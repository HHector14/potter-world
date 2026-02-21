import { NavLink } from 'react-router-dom'
import style from './Ui.module.css'
export default function FilterItem({ url, label }: { url: string, label: string }) {
  return (
    <NavLink to={url} className={({ isActive }) => `${style.box} ${style.select} ${isActive ? style.active : ''}`}>
      {label}
    </NavLink>
  )
}