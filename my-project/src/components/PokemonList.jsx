import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
const PokemonList = () => {

  const [ pokemonList, setPokemonList] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  useEffect(()=> {
    loadMorePokemon();
  },[])

  const loadMorePokemon = async function () {
   
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pageOffset}`)
    setPokemonList((prevList) => [...prevList,...response.data.results]);
    setPageOffset((prevOffset)=>prevOffset+10);
  }
 



  return (
    <div className="bg-blue-500 min-h-screen ">
      <Link to='/'> <h1 className="text-4xl text-white font-bold text-center  ">Pokédex</h1> </Link>

 <InfiniteScroll 
 dataLength={pokemonList.length}
 next={loadMorePokemon}
 hasMore={true}
 loader = {<p className=" text-center mt-4">Loadimg more Pokemon.....</p>}
 className=" text-center  text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4 mt-10"
       >

{pokemonList.map((p)=> {
  console.log(p)
  return  <Link   key={p.name}  to={`pokemon/${p.name}` }> <div >
 
    <div className="  flex flex-col items-center m-2 bg-zinc-300 rounded-md shadow-xl">
    
    <img className="w-32 h-32 object-contain" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${
                  p.url.split('/')[6]
                }.png`} alt={p.name} />
                </div>
                <p className="mt-2 text-center capitalize shadow-md "> {p.name}</p>
  </div></Link>
})}
</InfiniteScroll>

    </div>
  )
}

export default PokemonList