import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'

const Router = () => {
  return (
    <BrowserRouter>    
        <Routes>
        <Route path="/" element={<PokedexPage/>}/>
        <Route path="/list" element={<PokemonListPage/>}/>
        <Route path="/detail" element={<PokemonDetailPage/>} />
    </Routes>
    </BrowserRouter> 
    
  )
}

export default Router