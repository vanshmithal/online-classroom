import React, { useState } from 'react'

const CreateTest = () => {
  const [questionList, setQuestionList] = useState([])
  const [state, setState] = useState({
    ques: {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      answer: '',
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    var q = state.ques
    if (
      q.question == '' ||
      q.optionA == '' ||
      q.optionB == '' ||
      q.optionC == '' ||
      q.optionD == '' ||
      q.answer == ''
    ) {
    } else {
      var l = questionList
      l.push(q)
      setQuestionList(l)
      setState({
        ques: {
          question: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          answer: '',
        },
      })
    }
  }

  const sendPaper = () => {
    if (questionList.length > 0) {
      console.log(JSON.stringify(questionList))
      //snd paper API
      setQuestionList([])
    }
  }

  return (
    <>
      <div>Create Test</div>

      <form action='submit' onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Question</label>
          <input
            type='text'
            value={state.ques.question}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, question: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <label>Option A</label>
          <input
            type='text'
            value={state.ques.optionA}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, optionA: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <label>Option B</label>
          <input
            type='text'
            value={state.ques.optionB}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, optionB: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <label>Option C</label>
          <input
            type='text'
            value={state.ques.optionC}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, optionC: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <label>Option D</label>
          <input
            type='text'
            value={state.ques.optionD}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, optionD: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <label>Correct Option</label>
          <input
            type='text'
            value={state.ques.answer}
            onChange={(e) => {
              setState({
                ...state,
                ques: { ...state.ques, answer: e.target.value },
              })
            }}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div>Questions: </div>
      {questionList.length}
      <div>
        <button onClick={sendPaper}>Send Paper</button>
      </div>
    </>
  )
}

export default CreateTest
