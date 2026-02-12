import style from './Home.module.css'
import type { CardInfo } from '../../types/home';

export default function CardInfo({colorbg, title, description, icon}: CardInfo ) {
  
  return (
    <div className={style.cardInfo}>
        <div className={`${style.cardInfoIconContainer} ${colorbg}`}>
            <i style={{color: '#FFF', fontSize: '20px'}} className={`fa-solid ${icon}`}></i>
        </div>
        <p style={{fontSize: '25px', fontWeight: '800'}}>{title}</p>
        <p style={{fontSize: '16px'}}>{description}</p>
    </div >
  )
}   