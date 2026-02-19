import Search from "../components/ui/Search"
import Filter from "../components/characters/Filter"
export default function Characters() {
  return (
    <>
      <h2 className="title">Characteres </h2>
      <p className="description">Discover the witches and wizards of the Wizarding World</p>
      <div style={{ display: 'flex', marginTop: '1.5rem' }}>
        <Search placeholder="Search characters..."/>
        <Filter />
      </div>
      <p className="TextNotFound" >No characters found matching your criteria</p>

    </>
  )
}