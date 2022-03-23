import React from 'react'

const ChooseSubject = ({ props, availableClasses }) => {
  //   console.log(props.subjectList, availableClasses)

  const clickHandler = (ac) => {
    console.log('send api add ', ac)
  }

  return (
    <>
      {availableClasses.map((ac, ind) => {
        if (!props.subjectList.includes(ac)) {
          return (
            <div key={ind} onClick={() => clickHandler(ac)}>
              {ac}
            </div>
          )
        }
      })}
    </>
  )
}

export default ChooseSubject
