//basic starting code 
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TheDate from './TheDate'
import Accordion from './state-drills/Accordion'

ReactDOM.render(

  // <Accordion sections={[{title:'title1', content:'content1'}, {title:'title2', content:'content2'}]}/>
  <TheDate />,
  document.getElementById('root')
)