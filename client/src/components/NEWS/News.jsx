import Highlights from '../HIGHLIGHTS/Highlights'
import Article from '../ARTICLE/Article'

export default function News() {
  return (
    <div className='container-xl d-flex mt-5'>
      <div className='' style={{width: '600vw', marginLeft: '10px' }}>
        <div>
          <input placeholder='поиск по заголовку' />
          <button className='btn-primary'>искать</button>
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
