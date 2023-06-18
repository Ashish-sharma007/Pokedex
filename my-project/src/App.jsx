import PokemonList from "./components/PokemonList"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import PokemonDetails from "./components/PokemonDetails";
const router = createBrowserRouter([{
  path: '/',
  element: <PokemonList/>
},

{
  path: 'pokemon/:id',
  element: <PokemonDetails/>
}


])

const App = () => {
  return (
   
<>
      <RouterProvider router={router} />
    </>
  )
}

export default App
