import React from 'react';
import { Link, useParams } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';

const PokemonDetails = () => {
  let { id } = useParams();
  const { pokemon } = usePokemon({ id });
  

 


  return (
   
    <div className="max-w-md mt-10 mx-auto bg-zinc-400 rounded-xl shadow-2xl overflow-hidden">
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 capitalize">{pokemon?.name}</h1>
      <div className="flex justify-center">
        <img
          className="w-48 h-48 object-contain "
          src={pokemon?.sprites?.other['official-artwork']?.front_default}
          alt={pokemon?.name}
        />
      </div>
      <h2 className="text-center mt-4 mb-2 shadow-md text-2xl bg-slate-400">#{pokemon?.id}</h2>
      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold">Height:</h3>
        <p className="text-gray-700">{pokemon?.height}</p>
        <h3 className="text-xl font-semibold">Weight:</h3>
        <p className="text-gray-700">{pokemon?.weight}</p>
        <h3 className="text-xl font-semibold">Abilities:</h3>
        <ul className="list-disc list-inside">
          {pokemon?.abilities?.map((ability) => (
            <li key={ability.ability.name} className="text-gray-700">
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
     <Link to='/'> <button className=' flex justify-center mx-36 p-2 mb-2 rounded-lg shadow-lg text-white bg-blue-700 font-semibold '>  Back To Home Page</button>
</Link>
     </div>
  );
};

export default PokemonDetails;
