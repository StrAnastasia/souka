import { useState } from "react"
import axios from 'axios';

export default function Lkadmin() {
  const [inviteEmail, setInviteEmail] = useState("")

  function emailChangeHandler(e) {
    setInviteEmail(e.target.value)
  }
  
  function submitHandler() {
    axios.post('http://localhost:3001/lK/invite', {
      adminEmail: 'margosha2.novikova@gmail.com',
      inviteEmail
    })
  }

  return (
    <div className='container-sm d-flex justify-content-center mt-5'>
      <form onSubmit={submitHandler}>
        <div className="mb-3 text-center">
          <label for="exampleInputEmail1" className="form-label">
            <p>Послать инвайт!</p>
          </label>
          <input type="email" value={inviteEmail} onChange={emailChangeHandler} placeholder='имейл' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className='d-flex justify-content-end'>

        <button type="submit" className="btn-primary">Ворваться</button>
        </div>
      </form>
    </div>
  )
}
