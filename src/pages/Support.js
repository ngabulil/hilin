/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navigation from '../components/Navigation';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, limit, query, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../config/Firebase';
import { useState } from 'react';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import anonim from "../assets/anonim.png";

const SupportPage = () => {
    const [user] = useAuthState(auth)

    const messageRef = collection(db, "messages")
    const queryRef = query(messageRef, orderBy("createdAt", "desc"), limit(20));
    const [messages] = useCollection(queryRef, { idField: "id" })

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()

        if (!user || !formValue) return
        const payload = { text: formValue, createdAt: serverTimestamp(), uid: user.uid, displayName: user.displayName }
        await addDoc(messageRef, payload)

        setFormValue('')

    }


    return (
        <div>
            <Navigation />
            <h1>Live Chat</h1>
            <div className="live-chat">
                {messages && messages.docs.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)}
            </div>
            <form className='form-chat'>
                <input placeholder='Masukkan Pesan ...' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button onClick={(e) => sendMessage(e)}><BsFillArrowRightSquareFill /></button>
            </form>

        </div>
    )
}

function ChatMessage(props) {
    if (!auth.currentUser) return

    const { text, uid, displayName } = props.message

    const className = uid === auth.currentUser.uid ? "sent" : "received"
    return (
        <div className={className}>
            <div className="anonim"> 
              <img src={anonim} alt="anonim" />
              <p>anonymous</p>
            </div>
            <p>{text}</p>
            {/* <p>{displayName}</p> */}
        </div>
    )
}

export default SupportPage
