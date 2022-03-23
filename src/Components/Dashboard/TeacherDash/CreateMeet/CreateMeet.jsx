import React, { useEffect, useState } from 'react'

const CreateMeet = () => {
  const [signedIn, setSignedIn] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [meetLink, setMeetLink] = useState('')
  var gapi = window.gapi
  // var startDate
  var endDate = new Date()
  endDate.setTime(startDate.getTime() + 3600000)

  useEffect(() => {
    loadClient()
  }, [])

  // useEffect(() => {
  //   gapi.auth2
  //     .getAuthInstance()
  //     .signOut()
  //     .then(() => {
  //       setSignedIn(false)
  //       console.log('user signed out')
  //     })
  // }, [meetLink])

  const loadClient = () => {
    var CLIENT_ID =
      '985843940115-vj2ggcgsas9hfrepbpmtd6r84ebich66.apps.googleusercontent.com'
    var API_KEY = 'AIzaSyAw723ejATbumevYsS1JAWcVFEW-a2efAc'
    var DISCOVERY_DOCS = [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ]
    var SCOPES = 'https://www.googleapis.com/auth/calendar.events'

    gapi.load('client:auth2', () => {
      console.log('loading_client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () =>
        console.log('calenderAPI loaded')
      )

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          setSignedIn(true)
          console.log('user signed in')
          // getEvents()
        })
    })
  }

  const createMeetEvent = (e) => {
    e.preventDefault()
    console.log('creating meet link')
    var event = {
      summary: 'My Class',
      description: 'Online Class Meeting',
      start: {
        dateTime: startDate.toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      attendees: [{ email: 'vanshmithal@gmail.com' }],
      conferenceData: {
        createRequest: {
          requestId: 'wewdse1',
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      reminders: {
        useDefault: false,
      },
    }
    var request = gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: 'none',
    })

    request.execute((event) => {
      setMeetLink(event.hangoutLink)
      //send meet link via API
    })
  }

  return (
    <>
      <h1>Meeting Space:</h1>
      {signedIn ? (
        <div>
          <button onClick={createMeetEvent}>Create</button>
          <a href={meetLink} target='_blank'>
            {meetLink == '' ? 'Ruko Jara Sabar Karo' : 'Humka Join Karlo'}
          </a>
        </div>
      ) : (
        <div>
          <p>not signed in</p>
        </div>
      )}
    </>
  )
}

export default CreateMeet
