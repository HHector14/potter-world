import styles from './Ui.module.css'
export default function Search({placeholder} : {placeholder?: string}) {
  return (
    <div className={styles.box}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input style={{background: "var(--bg-filter)"}} type="text" placeholder={placeholder || "Search..."} />
    </div>
  )
}