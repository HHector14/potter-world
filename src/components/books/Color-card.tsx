import type { colorCard } from "../../types/books";
import style from "./Books.module.css";

export default function ColorCard({ color, icon, title, description }: colorCard) {
  return (
    <div className={`${style.cardColor} ${color}`}>
      <i className={`fa-solid ${icon} ${style.icon}`}></i>
      <p className={`text ${style.cardColorLabel} `}>{title}</p>
      <p className={`text ${style.cardColorSublabel} `}>{description}</p>
    </div>
  )
}