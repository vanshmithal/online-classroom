import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StudentDash from './StudentDash/StudentDash'
import TeacherDash from './TeacherDash/TeacherDash'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const props = useLocation().state
  useEffect(() => {
    if (props === null) {
      navigate('/404')
    }
  })
  if (props === null) {
    return <></>
  }
  // props.subjectList = ['p', 'c', 'm', 'b'] //caution
  // console.log(props)
  // props.testList = ['t1', 't2', 't3'] //caution

  return (
    <>
      <h1>{props.loginType} dash</h1>
      {props.loginType === 'student' ? (
        <StudentDash {...props} />
      ) : (
        <TeacherDash {...props} />
      )}
      <button onClick={() => navigate('/')}>logout</button>
    </>
  )
}

export default Dashboard
