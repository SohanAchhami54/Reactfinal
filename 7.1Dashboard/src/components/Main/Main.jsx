import React from 'react'
import Overview from '../Overview/Overview'
import Analytic from '../Analytics/Analytic'
import Project from '../Project/Project'
import Message from '../Message/Message'
import Calendar from '../Calendar/Calendar'
import Report from '../Report/Report'
import Setting from '../Setting/Setting'

const Main = ({activePage}) => {
  return (
    <div className='flex-1 bg-gray-500 min-h-screen p-3'>
      {activePage ==='overview'  && <Overview/>}
      {activePage ==='analytic'  && <Analytic/>}
      {activePage ==='project'  && <Project/>}
      {activePage ==='message'  && <Message/>}
      {activePage ==='calendar'  && <Calendar/>}
      {activePage ==='report'  && <Report/>}
      {activePage ==='setting'  && <Setting/>}
    </div>
  )
}

export default Main
