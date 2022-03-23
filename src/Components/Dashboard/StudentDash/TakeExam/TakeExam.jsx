import React, { useEffect, useState } from 'react'
import './TakeExam.css'

const TakeExam = () => {
  const [examStr, setExamStr] = useState([])
  const [ansList, setAnsList] = useState([])

  const getExamString = () => {
    //api siri
    var stringii =
      '[{"question":"jnnj","optionA":"njnjk","optionB":"njkn","optionC":"nkjn","optionD":"nkjnk","answer":"a"},{"question":"knknkj","optionA":"j","optionB":"kjn","optionC":"kjn","optionD":"nkj","answer":"b"}]'
    var examListDataTemp = JSON.parse(stringii)
    var ansListTemp = []

    examListDataTemp.forEach((q) => {
      ansListTemp.push({
        answer: q.answer.toLowerCase(),
        studentAnswer: '',
      })
    })
    var tempStu = []
    ansList.forEach((q) => {
      if (q.studentAnswer != '') {
        tempStu.push('bla')
      }
    })
    if (tempStu.length == 0) {
      setAnsList(ansListTemp)
    }
    setExamStr(examListDataTemp)
    // console.log(ansListTemp)
  }

  const markAnswer = (id, option) => {
    var tempAnsList = ansList
    tempAnsList[id].studentAnswer = option
    setAnsList(tempAnsList)
    console.log(tempAnsList)
    getExamString()
    // setExamStr(examStr)
  }

  useEffect(() => {
    getExamString()
  }, [])

  //   useEffect(() => {
  //     var temp = examStr
  //     setExamStr(temp)
  //   }, [ansList])

  const submitHandler = () => {
    var marks = 0
    ansList.forEach((q) => {
      if (q.answer == q.studentAnswer) {
        marks++
      }
    })
    console.log(`${marks}/${ansList.length}`)
    //send this marks to api
    setExamStr([])
    setAnsList([])
  }

  return (
    <div>
      <div>Exam Do Jaldi...</div>
      {examStr.map((q, ind) => {
        return (
          <div className='student-take-exam-question' key={ind}>
            <div>
              Question {ind + 1} : {q.question}
            </div>
            <div
              onClick={() => markAnswer(ind, 'a')}
              className={ansList[ind].studentAnswer == 'a' ? 'correct' : ''}
            >
              Option A : {q.optionA}
            </div>
            <div
              onClick={() => markAnswer(ind, 'b')}
              className={ansList[ind].studentAnswer == 'b' ? 'correct' : ''}
            >
              Option B : {q.optionB}
            </div>
            <div
              onClick={() => markAnswer(ind, 'c')}
              className={ansList[ind].studentAnswer == 'c' ? 'correct' : ''}
            >
              Option C : {q.optionC}
            </div>
            <div
              onClick={() => markAnswer(ind, 'd')}
              className={ansList[ind].studentAnswer == 'd' ? 'correct' : ''}
            >
              Option D : {q.optionD}
            </div>
          </div>
        )
      })}
      <div>
        {examStr.length > 0 ? (
          <button onClick={submitHandler}>Submit Paper</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default TakeExam
