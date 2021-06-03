export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className='d-flex flex-row'>
        <a className="nav-link active" aria-current="page" href="/">статьи</a>
        <a className="nav-link active" aria-current="page" href="/authors">авторы</a>
        <a className="nav-link active" aria-current="page" href="/categories">категории</a>
        </div>
        <a className="nav-link active" aria-current="page" href="/lk/user">личный кабинет юзер</a>
        <a className="nav-link active" aria-current="page" href="/lk/admin">личный кабинет админ</a>
        <a className="nav-link active" aria-current="page" href="/signin">ворваться</a>
      </div>
    </nav>
  )
}
