import CardSpell from "../components/spells/Card-spell"
import Search from "../components/ui/Search"
import style from "../components/spells/Spells.module.css"
export default function Spells() {
  return (
    <>
      <h2 className="title">Spells & Incantations </h2>
      <p className="description">Discover the magical spells of the Wizarding World</p>
      <div className={style.container}>
        <CardSpell
          colorbg="blueCyan"
          icon="fa-star-and-crescent"
          iconColor="star"
          label="Charm"
        />
        <CardSpell
          colorbg="redOrange"
          icon="fa-skull"
          iconColor="skull"
          label="Curse"
        />
        <CardSpell
          colorbg="purplePink"
          icon="fa-bolt"
          iconColor="star"
          label="Jinx"
        />
        <CardSpell
          colorbg="greenMint"
          icon="fa-staff-snake"
          iconColor="snake"
          label="Hex"
        />

      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <Search placeholder="Search spells..." />
      </div>
      <p className="TextNotFound" >No spells found matching your search</p>

    </>
  )
}