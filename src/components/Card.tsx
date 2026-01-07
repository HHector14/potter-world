import type { CharacterCard } from "../types/components";

export function Card({id, name, image}: CharacterCard) {
  return (
    <div>
      <div className="Card">
          <img className='avatar' src={image} alt="hh" />
          <img className='frame' src="./card.png" alt="" />
      </div>
      <p className="Text">{name}</p>
    </div>
  )
}