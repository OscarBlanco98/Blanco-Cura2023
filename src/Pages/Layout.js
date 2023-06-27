import { Link, Outlet } from 'react-router-dom';
import '../Components/menu.css'

const Layout = () =>{
    return <div>
                <nav className='menu'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ListaPokemones">Lista Pokemones</Link></li>
                        <li><Link to="/ListaMovimientos">Lista Movimientos</Link></li>
                        <li><Link to="/ListaAnime">Lista Anime</Link></li>
                        <li><Link to="/ListaPeliculas">Lista Peliculas</Link></li>
                        <li><Link to="/TarjetasPokemon">Tarjetas Pokemon</Link></li>
                    </ul>
                </nav>
                <Outlet/>
            </div>
}

export default Layout;