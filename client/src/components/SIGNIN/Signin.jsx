export default function Signin() {
  return (
    <div className='container-sm d-flex justify-content-center mt-5'>
      <form>
        <div className="mb-3 text-center">
          <label for="exampleInputEmail1" className="form-label">
            <p>Привет!</p>
            <p>Чтобы приоединиться к нашему сообществу, вам необходимо получить инвайт на почту.</p>
            <p>Если вы его уже получили, введите свою почту в это окошко.</p>
          </label>
          <input type="email" placeholder='ваш имейл с инвайтом' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text text-start">Если у вас ещё нет инвайта, удачи!</div>
        </div>
        <div className='d-flex justify-content-end'>

        <button type="submit" className="btn-primary">Ворваться</button>
        </div>
      </form>
    </div>
  )
}
