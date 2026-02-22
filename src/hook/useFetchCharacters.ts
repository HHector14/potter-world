import { useEffect, useState } from "react";
import type { CharacterCard } from "../types/components";
import { API_BASE_URL } from "../config/api";

export default function useFetchCharacters() {
  const [characters, setCharacters] = useState<CharacterCard[]>([])
  const [url, setUrl] = useState<string>("characters")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() =>{
    const fetchData = async () => {
      try {
      const response = await fetch(`${API_BASE_URL}${url}`)
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
  }, [setCharacters, url])


  return { characters, loading, error, setUrl }
}