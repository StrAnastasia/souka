import { Link } from "react-router-dom";

export default function Article() {
  return (
    <div className='container-s border border-primary m-2 p-2'>
      <div className="d-flex  align-items-start flex-column m-2 ms-3">
        <Link to={`/article/:id`}>
          СОМЕ ЗАГОЛОВОК
        </Link>

      </div>

      <div>
        <p className="mx-2" style={{ padding: '1%', height: "150px", width: '100%', overflow: "hidden", "text-overflow": "ellipsis" }}>tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novostitut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novostitut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti tut budut novosti</p>
        <a href='/' style={{marginLeft: '85%'}}>читать дальше</a>
        <img height='' width='50%' style={{ margin: '0px 25% 0px 25% ' }} className='' alt='cat' src='https://i.kym-cdn.com/entries/icons/original/000/035/692/cover1.jpg' />
      </div>
      <div className='d-flex mt-2  ms-3' style={{color: '#0c6efd'}}>
        <p className='pe-2'>0 💖</p>
        <p className='pe-2'>0 ❌</p>
        <p className='pe-2'>0 👁️</p>
        <p className='pe-2'>0 💬</p>
      </div>
    </div>
    
  )
}
