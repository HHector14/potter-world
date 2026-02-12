import type { MiniCardInfo } from '../../types/home'
import style from './Home.module.css'
export default function MiniCardInfo({colorTitle,title, text}: MiniCardInfo) {
  return (
      <div className={style.miniCardInfo}>
        <p style={{ fontSize: 50, fontWeight: 800, margin: 0, color: `${colorTitle}` }}>{title}</p>
        <p style={{ margin: 0 }}>{text}</p>
      </div>

  )
}