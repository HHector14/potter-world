import style from './Ui.module.css'
export default function FilterItem({ label } : { label: string }) {
  return (
      <div className={`${style.box} ${style.select}`}>{label}</div>
  )
}