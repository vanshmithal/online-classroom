import React, { useState, useEffect } from 'react'
import EnrolExam from '../EnrolExam/EnrolExam'
import JoinClass from '../JoinClass/JoinClass'
import TakeExam from '../TakeExam/TakeExam'
import ViewScore from '../ViewScore/ViewScore'
import './StudentSubDash.css'

const StudentSubDash = (props) => {
  const [state, setState] = useState({
    actionType: <></>,
  })

  useEffect(() => {
    return () => {
      setState((prev) => ({
        ...prev,
        actionType: <></>,
      }))
    }
  }, [props])

  return (
    <>
      <h2>{props.subject}</h2>
      <div className='studentSubDash-action-cont'>
        {/* <div
          onClick={() =>
            setState({ ...state, actionType: <EnrolExam {...props} /> })
          }
        >
          enrol for exam
        </div> */}
        <div onClick={() => setState({ ...state, actionType: <TakeExam /> })}>
          take exam
        </div>
        <div
          onClick={() =>
            setState({ ...state, actionType: <JoinClass {...props} /> })
          }
        >
          join class
        </div>
        <div
          onClick={() =>
            setState({ ...state, actionType: <ViewScore {...props} /> })
          }
        >
          view my result
        </div>
      </div>
      <div>{state.actionType}</div>
    </>
  )
}

export default StudentSubDash
