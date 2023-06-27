import{ Routes, Route, } from 'react-router-dom';
import Home from '../Pages/Home';
import ListaPokemones from '../Pages/ListaPokemon';
import ListaMovimientos from '../Pages/ListaMovimientos';
import ListaAnime from '../Pages/ListaAnime';
import ListaPeliculas from '../Pages/ListaPeliculas';
import TarjetasPokemon from '../Pages/TarjetasPokemon';
import Layout from '../Pages/Layout';

const Router = () =>{
    return(
        <div>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/ListaPokemones' element={<ListaPokemones/>}></Route>
                <Route path='/ListaMovimientos' element={<ListaMovimientos/>}></Route>
                <Route path='/ListaAnime' element={<ListaAnime/>}></Route>
                <Route path='/ListaPeliculas' element={<ListaPeliculas/>}></Route>
                <Route path='/TarjetasPokemon' element={<TarjetasPokemon/>}></Route>
              </Route>
            </Routes>
        </div>
    )  
}
export default Router;