import styles from './Characters.module.css'
export default function Search() {
  return (
    <div className={styles.box}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search characters..." />
    </div>
  )
}