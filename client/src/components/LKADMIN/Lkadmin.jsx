import { useState } from "react"
import axios from 'axios';

export default function Lkadmin() {
  const [inviteEmail, setInviteEmail] = useState("")
  const [newadmin, setNewadmin] = useState("")

  function emailChangeHandler(e) {
    setInviteEmail(e.target.value)
  }

  function adminemailChangeHandler(e) {
    setNewadmin(e.target.value)
  }


  function submitHandler() {
    axios.post('http://localhost:3001/lK/invite', {
      adminEmail: 'margosha2.novikova@gmail.com',
      inviteEmail
    })
  }

  function submitAdminHandler() {
    axios.post('http://localhost:3001/lK/invite', {
      adminEmail: 'margosha2.novikova@gmail.com',
      newadmin
    })
  }


  return (
    <>
      <div className='container-sm mt-5' >
        <div className='d-flex justify-content-around'>
          <img height='100px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
          <h2 className="d-flex  align-items-start flex-column mb-5">
            админ_нейм
        </h2>
          <div className='d-flex align-items-end'>
            <div><h5 className="me-5">
              ваши подписки: число
          </h5></div>
            <div><h5 className="ms-5">
              (иф надо) на вас подписано: число
          </h5></div>
          </div>
        </div>
        <div className='container-s border border-primary mt-5 p-2' style={{ height: "200px", overflow: 'scroll' }}>
          <h5>Статьи, которые вы лайкали:</h5>
          <div className='d-flex flex-row'>

            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок:</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
            <div className='m-2 border border-primary p-2' style={{ width: 'max-content', height: '120px', whiteSpace: 'nowrap' }}>
              <p>соме заголовок</p>
              <p>соме автор</p>
            </div>
          </div>

        </div>
        <div className='container-s border border-primary mt-5 p-2' style={{ height: "220px", overflow: "scroll" }}>
          <h5>Авторы, на которых вы подписаны:</h5>
          <div className='d-flex flex-wrap'>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
            <div className=' d-flex border border-primary m-2 p-2' style={{ width: '300px' }}>
              <img height='50px' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
              <p className='p-1'>соме автор</p>
            </div>
          </div>
        </div>


        <div className='container-s border border-primary mt-5 mb-5 p-2' style={{ height: "200px" }}>
          <form className='mt-4 mx-3' onSubmit={submitHandler}>
            <label for="exampleInputEmail1" className="form-label">
              <h5>Отправить инвайт:</h5>
            </label>
            <div className="mb-3 text-center ">
              <input type="email" value={inviteEmail} onChange={emailChangeHandler} placeholder='имейл' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text text-start">Если у вас ещё нет инвайта, удачи!</div>
            </div>
            <div className='d-flex justify-content-end'>

              <button type="submit" className="btn-primary">Отправить</button>
            </div>
          </form>

        </div>
        <div className='container-s border border-primary mt-5 mb-5 p-2' style={{ height: "200px" }}>
          <form className='mt-4 mx-3' onSubmit={submitAdminHandler}>
            <label for="exampleInputEmail1" className="form-label">
              <h5>Добавить админа:</h5>
            </label>
            <div className="mb-3 text-center ">
              <input type="email" value={newadmin} onChange={adminemailChangeHandler} placeholder='имейл' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className='d-flex justify-content-end'>

              <button type="submit" className="btn-primary">Добавить</button>
            </div>
          </form>

        </div>
      </div>

      {/* <div className='container-sm d-flex justify-content-center mt-5'>
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
        </div> */}
    </>
  )
}
