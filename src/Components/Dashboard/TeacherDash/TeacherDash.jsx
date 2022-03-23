import React, { useState } from 'react'
import CreateMeet from './CreateMeet/CreateMeet'
import ViewScores from './ViewScores/ViewScores'
import CreateTest from './CreateTest/CreateTest'
import ViewStudents from './ViewStudents/ViewStudents'
import './TeacherDash.css'

const TeacherDash = (props) => {
  const [state, setState] = useState({ actionType: <></> })

  return (
    <>
      <div>Hello Teacher {props.username}</div>
      <h2>{props.subjectCode}</h2>
      <div className='action-cont'>
        <div
          onClick={() =>
            setState({ ...state, actionType: <ViewStudents {...props} /> })
          }
        >
          view student list
        </div>
        <div
          onClick={() =>
            setState({ ...state, actionType: <CreateTest {...props} /> })
          }
        >
          create test
        </div>
        <div
          onClick={() =>
            setState({ ...state, actionType: <ViewScores {...props} /> })
          }
        >
          view test scores
        </div>
        <div
          onClick={() =>
            setState({ ...state, actionType: <CreateMeet {...props} /> })
          }
        >
          create class meeting
        </div>
      </div>
      <div>{state.actionType}</div>
    </>
  )
}

export default TeacherDash
