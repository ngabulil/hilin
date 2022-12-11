import { React, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, limit, query, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../config/Firebase';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import anonim from "../assets/anonim.png";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../config/AuthContext";

const SupportPage = () => {
    
    const { user } = UserAuth();
    const navigate = useNavigate();
    const messageRef = collection(db, "messages")
    const queryRef = query(messageRef, orderBy("createdAt", "desc"), limit(20));
    const [messages] = useCollection(queryRef, { idField: "id" })

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()

        if (!user || !formValue) return
        const payload = { text: formValue, createdAt: serverTimestamp(), uid: user.uid }
        await addDoc(messageRef, payload)

        setFormValue('')

    }
    useEffect(() => {
        if (user == null) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Anda Belum Login',
            })
            navigate('/login');
          }
    });

    return (
        <div>
            <Navigation />
            <div className="live-chat">
                <div className="live-chat-desk">
                    <h1>Live Chat</h1>
                    <p>Berikan dukungan positif kepada teman yang lain!</p>
                    <br />
                    <hr />
                </div>
                <div className="live">
                    {messages && messages.docs.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)}
                </div>

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

    if (!auth.currentUser) return

    const { createdAt, text, uid } = props.message

    let hours;
    let day;

    if(createdAt != null) {
        hours = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000).toLocaleString('default', { hour: '2-digit', minute: '2-digit' });
        day = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
    } else {
        hours = new Date().toLocaleString('default', { hour: '2-digit', minute: '2-digit' });
        console.log(hours)
        day = new Date().toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
        console.log(day)
    }

    const className = uid === auth.currentUser.uid ? "sent" : "received"
    return (
        <div className={className}>
            <div className="anonim">
                <img src={anonim} alt="anonim" />

                <div className="text-chat">
                    <p>{text}</p>
                    <hr />
                    <h6>{day + " - " + hours}</h6>
                </div>
            </div>
        </div>
    )
}

export default SupportPage
