import style from './Home.module.css'
export default function CardMain() {
  return (

    <div className={style.cardMain}>
      <h2 style={{ fontWeight: '700', fontSize: '60px', margin: '10px auto' }}>Welcome to the Wizarding World</h2>
      <p style={{ marginTop: 0, color: '#F9D059', fontSize: 'xx-large' }}>Explore the magic of Harry Potter</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '15px' }} className={`${style.button} ${style.orange}`}>Explore Characters</div>
        <div className={`${style.button} ${style.purple}`}>Discover Houses</div>
      </div>
    </div>
  )
}