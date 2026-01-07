import { Card } from "../components/Card"
import useFetchAllCharacters from "../hook/useFetchAllCharacters"

export default function Home() {
  const { characters, error, loading } = useFetchAllCharacters()
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error.message}</h2>

  return (
     <div className="App">
        {characters.map(c => (
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
          />
        ))}

      </div>
  )
}