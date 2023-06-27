import Pokemon from '../Pokemon.json';
import Tipos from '../Tipos.json';
import './pokemones.css';

function Pokemones(){
    return <div>
        <h2>Lista Pokémon de la Primera Generación</h2>
        <p>151 Pokémon (14,88% del total) fueron introducidos en esta Generación</p>
        <table className="contenedor-pokemones">
            <tr className="contenedor-pokemones-titulo">
                <th>Número</th>
                <th>Pokémon</th>
                <th>Nombre</th>
                <th>Tipos</th>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0001</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 1 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Bulbasaur</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0002</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 2 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Ivysaur</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0003</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 3 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Venasaur</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0004</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 4 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Charmander</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0005</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 5 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Charmeleon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0006</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 6 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Charizard</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0007</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 7 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Squirtle</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0008</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 8 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Wartortle</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0009</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 9 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Blastoise</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0010</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 10 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Caterpie</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>1001</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 11 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Metapod</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0012</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 12 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Butterfree</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0013</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 13 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Weedle</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0014</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 14 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kakuna</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0015</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 15 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Beedrill</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0016</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 16 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Pidgey</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0017</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 17 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Pidgeotto</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0018</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 18 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Pidgeot</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0019</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 19 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Rattata</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0020</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 20 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Raticate</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0021</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 21 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Spearrow</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0022</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 22 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Fearrow</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0023</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 23 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Ekans</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0024</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 24 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Arbok</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0025</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 25 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Pikachu</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0026</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 26 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Raichu</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0027</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 27 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Sandshrew</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0028</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 28 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Sandslash</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0029</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 29 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidoran♀</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0030</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 30 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidorina</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0031</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 31 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidoqueen</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0032</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 32 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidoran♂</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0033</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 33 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidorino</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0034</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 34 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Nidoking</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0035</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 35 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Clefair</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hada" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0036</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 36 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Clefable</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hada" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0037</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 37 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Vulpik</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0038</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 38 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Ninetales</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0039</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 39 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Jigglypuff</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Hada" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0040</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 40 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Wigglypuff</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Hada" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0041</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 41 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Zubat</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0042</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 42 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Golbat</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0043</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 43 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Oddish</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0044</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 44 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Gloom</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0045</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 45 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Vileplume</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0046</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 46 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Paras</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0047</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 47 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Parasect</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0048</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 48 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Venonat</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0049</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 49 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Venomoth</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0050</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 50 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Diglett</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0051</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 51 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dugtrio</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0052</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 52 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Meowth</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0053</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 53 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Persian</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0054</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 54 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Psyuck</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0055</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 55 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Golduck</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0056</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 56 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Mankey</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0057</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 57 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Primeape</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0058</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 58 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>growlithe</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0059</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 59 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Arcanine</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0060</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 60 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Poliwag</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0061</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 61 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Poliwhirl</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua"|| tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0062</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 62 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Poliwrath</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0063</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 63 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Abra</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0064</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 64 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kadabra</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0065</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 65 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Alakazam</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0066</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 66 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Machop</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0067</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 67 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Machoke</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0068</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 68 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Machamp</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0069</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 69 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Bellsprout</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0070</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 70 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Weepinbell</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0071</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 71 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Victreebel</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0072</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 72 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Tentacool</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0073</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 73 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Tentacruel</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0074</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 74 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Geodude</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0075</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 75 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Graveler</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0076</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 76 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Golem</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0077</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 77 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Ponyta</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0078</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 78 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Rapidash</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0079</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 79 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Slowpoke</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0080</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 80 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Slowbro</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0081</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 81 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Magnemite</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" || tipos.tipo === "Acero" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0082</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 82 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Magneton</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" || tipos.tipo === "Acero" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0083</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 83 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Farfetch'd</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0084</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 84 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Doduo</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0085</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 85 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dodrio</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0086</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 86 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Seel</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0087</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 87 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dewgong</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0088</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 88 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Grimer</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0089</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 89 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Muk</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0090</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 90 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Shellder</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0091</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 91 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Cloyster</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0092</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 92 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Gastly</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0093</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 93 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Haunter</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0094</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 94 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Gengar</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" || tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0095</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 95 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Onix</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0096</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 96 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Drowzee</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico"  ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0097</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 97 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Hypno</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico"? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0098</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 98 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Krabby</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0099</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 99 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kingler</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0100</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 100 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Voltorb</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico"? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0101</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 101 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Electrode</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0102</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 102 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Exeggcute</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0103</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 103 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Exeggutor</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0104</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 104 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Cubone</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0105</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 105 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Marowak</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0106</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 106 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Hitmonlee</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0107</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 107 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Hitmonchan</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0108</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 108 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Lickitung</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0109</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 109 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Koffing</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0110</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 110 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Weezing</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0111</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 111 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Rhyhorn</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" || tipos.tipo === "Roca" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0112</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 112 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Rhydon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" || tipos.tipo === "Roca" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0113</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 113 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>chansey</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0114</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 114 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Tangela</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0115</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 115 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kangaskhan</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0116</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 116 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Horsea</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0117</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 117 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Seadra</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua"  ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0118</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 118 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Goldeen</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0119</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 119 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Seking</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0120</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 120 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Staryu</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0121</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 121 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Starmie</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0122</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 122 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Mr. Mime</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" || tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0123</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 123 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Scyther</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0124</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 124 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Jynx</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" || tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0125</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 125 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Electabuzz</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0126</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 126 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Magmar</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0127</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 127 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Pinsir</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0128</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 128 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Tauros</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0129</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 129 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Magikarp</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0130</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 130 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Gyarados</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0131</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 131 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Lapras</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" || tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0132</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 132 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Ditto</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0133</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 133 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Eevee</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0134</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 134 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Vaporeon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0135</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 135 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Jolteon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0136</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 136 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Flareon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0137</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 137 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Porygon</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0138</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 138 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Omanyte</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0139</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 139 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Omastar</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0140</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 140 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kabuto</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0141</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 141 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Kabutops</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0142</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 142 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Aerodactyl</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0143</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 143 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Snorlax</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0144</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 144 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Articuno</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0145</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 145 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Zapdos</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0146</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 146 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Moltres</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0147</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 147 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dratini</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Dragon" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0148</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 148 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dragonair</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Dragon" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0149</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 149 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Dragonite</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Dragon" || tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0150</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 150 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Mewtwo</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
            <tr className="contenedor-pokemones-clasificacion">
                <td>0151</td>
                <td>{Pokemon && Pokemon.map((pokemon) => (
                            <div key={pokemon.id}> {pokemon.id === 151 ? (<img src={ pokemon.icon} alt=""/>): <div></div>}</div>))}
                </td>
                <td>Mew</td>
                <td>
                {Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}
                </td>
            </tr>
        </table>
    </div>
}

export default Pokemones;