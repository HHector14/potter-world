import { useEffect, useState } from "react";
import type { CharacterCard } from "../types/components";

export default function useFetchAllCharacters() {
  const [characters, setCharacters] = useState<CharacterCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() =>{
    const fetchData = async () => {
      try {
      const response = await fetch("https://potterhead-api.vercel.app/api/characters")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      const charactersData : CharacterCard [] = data.map((char: any) => ({
        id: char.id,
        name: char.name,
        image: char.image,
      }));
      setCharacters(charactersData)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { characters, loading, error }
}