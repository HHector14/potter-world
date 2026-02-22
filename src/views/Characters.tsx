import Search from "../components/ui/Search"
import Filter from "../components/characters/Filter"
import useFetchCharacters from "../hook/useFetchCharacters"
export default function Characters() {
  const { characters, loading, error } = useFetchCharacters();

  if(loading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>Error: {error.message}</p>
  }
  return (
    <>
      <h2 className="title">Characteres </h2>
      <p className="description">Discover the witches and wizards of the Wizarding World</p>
      <div style={{ display: 'flex', marginTop: '1.5rem' }}>
        <Search placeholder="Search characters..."/>
        <Filter />
      </div>
      {characters.length > 0 ? (
        <div className="characters-grid">
          {characters.map((character) => (
            <div key={character.id} className="character-card">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="TextNotFound" >No characters found matching your criteria</p>
      )}

    </>
  )
}