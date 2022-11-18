import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mentalTestData as testData } from '../../data/mentalTestData';
import '../../style/MentalTestPage.css';

export default function QuestionMentalTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mentalTestData, setMentalTestData] = useState(testData);
  const { question, options, selected } = mentalTestData[currentIndex];
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });

  console.log(selected)

  const nextQuestion = () => {
    if(mentalTestData.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    if(currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOptions = (indexSelected, indexOptionSelected) => {
    setMentalTestData(
      mentalTestData.map((item, index) =>
        index === indexSelected 
        ? {
            ...item, 
            selected: true, 
            options: options.map(
              (option, index) => index === indexOptionSelected
                ? {...option, selected: true }
                : {...option, selected: false }
            ),
          } 
        : item
      )
    );
  };

  const checkScore = () => {
    const questionAnswered = mentalTestData.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) => 
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );
    setScore({
      correct: questionCorrect.length,
      false: mentalTestData.length - questionCorrect.length,
    });
  };

  useEffect(() => {
    checkScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mentalTestData]);

  return (
    <div className='mentaltest-page'>
      <div className='question-mentaltest-container'>
        <div className='question-header box'>Pertanyaan ke {currentIndex + 1} dari {mentalTestData.length}</div>
        <div className='question-box'>{question}</div>
        {
          options.map((item, index) => (
            <div style={{ background: item.selected ? "#EBEBEB" : "white"}} onClick={() => selectOptions(currentIndex, index)} className="answer-section box" key={index} >{item.title} . {index}</div>
          ))
        }
        <div className='button-box'>
          <button 
            onClick={() => previousQuestion()}
            className="btn btn-previous"
            // disabled={currentIndex === 0 ? true : false}
            style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
          >
            Sebelumnya
          </button>
          {mentalTestData.length - 1 === currentIndex 
            ?
              <Link 
                to='/mentaltest/summary' state={score}
                className="btn btn-submit"
              >
                Akhiri Test
              </Link>
            : 
              <button 
                onClick={() => nextQuestion()}
                className="btn btn-next"
                disabled={selected === false ? true : false}
              >
                Lanjut
              </button>
          }
        </div>
      </div>
    </div>
  )
}