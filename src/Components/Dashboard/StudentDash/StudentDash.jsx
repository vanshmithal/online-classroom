import React, { useState } from 'react'
import ChooseSubject from './ChooseSubject/ChooseSubject'
import './StudentDash.css'
import StudentSubDash from './StudentSubDash/StudentSubDash'

const StudentDash = (props) => {
  //uses props.subjectList = ['p', 'c', 'm']
  const [state, setState] = useState({
    class: <></>,
    selectSubject: '',
    chooseSubject: <></>,
  })

  // const buttonHandler = () => {
  //   //get available classes API
  //   var availableClasses = ['p', 'c', 'm', 'b', 'pe', 'css', 'blacki']
  //   // console.log(props.subjectList, availableClasses)
  //   setState({
  //     ...state,
  //     chooseSubject: (
  //       <ChooseSubject props={props} availableClasses={availableClasses} />
  //     ),
  //   })
  // }

  return (
    <>
      {/* <div className='student-dash-join-div'>
        <button onClick={buttonHandler}>Join Classes</button>
        {state.chooseSubject}
      </div> */}
      <div className='studentDash-container'>
        {props.subjectList.map((subj, ind) => {
          return (
            <div
              className='studentDash-subject-button'
              style={{
                borderBottom:
                  state.selectSubject === subj ? '1px solid black' : '',
              }}
              key={ind}
              onClick={() => {
                setState({
                  ...state,
                  class: <StudentSubDash subject={subj} />,
                  selectSubject: subj,
                })
              }}
            >
              {subj}
            </div>
          )
        })}
      </div>
      {state.class}
    </>
  )
}

export default StudentDash
