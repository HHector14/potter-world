import style from './Spells.module.css'
import type { SpellCard } from '../../types/spells'
export default function CardSpell({label, colorbg, icon, iconColor}: SpellCard) {
  return(
    <div className={`${style.cardSpell} ${colorbg}`}>
        <i className={`fa-solid ${icon} ${style.icon} ${style[iconColor]}`}></i>
        <p className={`text ${style.cardSpellLabel}`}>{label}</p>
    </div>
  )
}