import Highlights from '../HIGHLIGHTS/Highlights'
import Article from '../ARTICLE/Article'

export default function News() {
  return (
    <div className='container-xl d-flex mt-2'>
      <div className='' style={{width: '600vw', marginLeft: '10px' }}>
        <div className='m-2 mb-3'>
          <input placeholder='поиск по заголовку' />
          <button className='btn-primary ms-2'>искать</button>
        </div>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
      <Highlights />
    </div>
  )
}
