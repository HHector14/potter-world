import style from './Characters.module.css'
export default function Filter() {
  return (
    <>
      <div style={{backgroundColor: '#bb4d00', color: '#FFF'}} className={`${style.box} ${style.select}`}>All</div>
      <div className={`${style.box} ${style.select}`}>Gryffindor</div>
      <div className={`${style.box} ${style.select}`}>Slytherin</div>
      <div className={`${style.box} ${style.select}`}>Ravenclaw</div>
      <div className={`${style.box} ${style.select}`}>Hufflepuff</div>
    </>
  )
}