import { Link } from "react-router-dom";

export default function Smallsrticle() {
  return (
    <>
    <div className='container-s m-2 p-2' style={{height: "100px", width: '100%', overflow: "hidden"}}>
      <div className="d-flex  align-items-start flex-column">
        <Link to={`/article/:id`} className=''>
          СОМЕ ЗАГОЛОВОК
        </Link>

      </div>

      <div>
        <p style={{"text-overflow": "ellipsis"}}>tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti </p>
      </div>
    </div>
      <div className='d-flex ms-3' style={{color: '#0c6efd'}}>
        <p className='pe-2'>0 💖</p>
        <p className='pe-2'>0 ❌</p>
        <p className='pe-2'>0 👁️</p>
        <p className='pe-2'>0 💬</p>
      </div>

    </>
  )
}
