import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { POKEMON_API_POKEMON_URL } from '../constants'; 
const usePokemon = ({id}) => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  

  useEffect(()=> {
    if(id){
        fetchPokemon()
    }
  },[id])

    const fetchPokemon = async () => {
        if (id){
            setIsLoading(true)
            const url = `${POKEMON_API_POKEMON_URL}/${id}`
            const response = await axios.get(url)
           if (response?.data){
            setPokemon(response?.data)
           }
           setIsLoading(false);
        }
    }
  
    return {
        pokemon,isLoading
    }
}

export default usePokemon