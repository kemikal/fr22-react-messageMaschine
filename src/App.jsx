import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'
import Message from './Message'

function App() {

  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const updateForm = (getHeading, getName, getMessage) => {
    setHeading(getHeading);
    setName(getName);
    setMessage(getMessage);
  }

  return (
      <div>
       <h1>Message Machine</h1>
       <div className="wrapper">
        <div className="content"><Form updateForm={updateForm} /></div>
        <div className="content"><Message heading={heading} name={name} message={message}/></div>
       </div>
      </div>
  )
}

export default App
