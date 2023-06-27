import Generacion from '../Generacion.json';
import './anime.css';

function Anime(){
    return(
        <div>
            <h2>Lista de Episodios</h2>
            <p>Los Episodios del anime se dividen actualmente en 8 grandes series en japón y 9 en occidente, las cuales en occidente se dividen en un total de 26 temporadas. Además de la serie principal, hay varios episodios especiales, algunos de los cuales pertenecen a una temporada extra, Crónicas Pokémon</p>
            <p>Estas 26 Temporadas suman más de 1200 episodios. En la siguiente tabla se encuentras todas las temporadas y series del anime, contando todos los episodios (incluso los no emitidos o censurados).</p>
            <table className="contenedor-anime">
                <tbody>
                <tr>
                    <th className="contenedor-anime-titulo">Series y sus Temporadas</th>
                    <th className="contenedor-anime-titulo">Episodios</th>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "El Comienzo"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 1 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">118</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Primera Temporada: <br /></li>
                            <i>¡Atrápalos ya!</i>
                        </ul>
                    </td>
                    <td>
                        52+3 Censurados <br />
                        (EP001 - EP052)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Segunda Temporada: <br /></li>
                            <i>Liga Naranja</i>
                        </ul>
                    </td>
                    <td>
                        60+3 Censurados <br />
                        (EP052 - EP118)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Oro y Plata"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 2 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">158</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Tercera Temporada: <br /></li>
                            <i>Los Viajes Johto</i>
                        </ul>
                    </td>
                    <td>
                        41 <br />
                        (EP119 - EP159)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Cuarta Temporada: <br /></li>
                            <i>Los Campeones de la Liga Jhoto</i>
                        </ul>
                    </td>
                    <td>
                        52 <br />
                        (EP160 - EP211)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Quinta Temporada: <br /></li>
                            <i>La Búsqueda del Maestro</i>
                        </ul>
                    </td>
                    <td>
                        64 + 1 Censurado <br />
                        (EP212 - EP276)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Rubí y Zafiro"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 3 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">192 + 1 no emitido</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Sexta Temporada: <br /></li>
                            <i>Fuerza Máxima</i>
                        </ul>
                    </td>
                    <td>
                        40 <br />
                        (EP277 - EP316)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Septima Temporada: <br /></li>
                            <i>Reto Máximo</i>
                        </ul>
                    </td>
                    <td>
                        52 <br />
                        (EP317 - EP368)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Octava Temporada: <br /></li>
                            <i>La Búsqueda del Maestro</i>
                        </ul>
                    </td>
                    <td>
                        52 + 2 no emitidos<br />
                        (EP369 - EP422)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Novena Temporada: <br /></li>
                            <i>La Búsqueda del Maestro</i>
                        </ul>
                    </td>
                    <td>
                        47 <br />
                        (EP423 - EP469)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Diamante y Perla"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 4 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">191</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Décima Temporada: <br /></li>
                            <i>Diamante y Perla</i>
                        </ul>
                    </td>
                    <td>
                        51 + 1 no emitido <br />
                        (EP470 - EP521)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Undécima Temporada: <br /></li>
                            <i>Dimensión de Batalla</i>
                        </ul>
                    </td>
                    <td>
                        52 <br />
                        (EP522 - EP573)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Duodécima Temporada: <br /></li>
                            <i>Batallas Galácticas</i>
                        </ul>
                    </td>
                    <td>
                        52 + 1 no emitido<br />
                        (EP574 - EP626)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Decimotercera Temporada: <br /></li>
                            <i>Los Vencedores de la Liga Sinnoh</i>
                        </ul>
                    </td>
                    <td>
                        34 <br />
                        (EP627 - EP660)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Negro y Blanco"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 5 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">142 + 2 no emitidos</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Decimocuarta Temporada: <br /></li>
                            <i>Negro y Blanco</i>
                        </ul>
                    </td>
                    <td>
                        48 + 2 no emitidos <br />
                        (EP661 - EP710)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Decimoquinta Temporada: <br /></li>
                            <i>Destinos Rivales</i>
                        </ul>
                    </td>
                    <td>
                        49 <br />
                        (EP711 - EP759)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la DecimoSexta Temporada: <br /></li>
                            <i>Aventuras en Unova</i>
                        </ul>
                    </td>
                    <td>
                        45 <br />
                        (EP760 - EP804)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "XY" 
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 6 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">139</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Decimoséptima Temporada: <br /></li>
                            <i>XY</i>
                        </ul>
                    </td>
                    <td>
                        48 <br />
                        (EP805 - EP853)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Decimoctava Temporada: <br /></li>
                            <i>XY - Expediciones en Kalos</i>
                        </ul>
                    </td>
                    <td>
                        45 <br />
                        (EP854 - EP896)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Decimonovena Temporada: <br /></li>
                            <i>XYZ</i>
                        </ul>
                    </td>
                    <td>
                        48 <br />
                        (EP897 - EP943)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Sol y Luna"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 7 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">146</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Vigésima Temporada: <br /></li>
                            <i>Sol y Luna</i>
                        </ul>
                    </td>
                    <td>
                        43 <br />
                        (EP944 - EP986)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Vigésimoprimera Temporada: <br /></li>
                            <i>Ultra Aventuras</i>
                        </ul>
                    </td>
                    <td>
                        48 + 1 Censurado <br />
                        (EP987 - EP1035)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Vigésimosegunda Temporada: <br /></li>
                            <i>Ultraleyendas</i>
                        </ul>
                    </td>
                    <td>
                        54 <br />
                        (EP1036 - EP1089)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Viajes Pokemon"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 8 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">147</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodiso de la Vigésimotercera Temporada: <br /></li>
                            <i>Viajes</i>
                        </ul>
                    </td>
                    <td>
                        48 <br />
                        (EP1090 - EP1137)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Vigésimocuarta Temporada: <br /></li>
                            <i>Viajes Maestros</i>
                        </ul>
                    </td>
                    <td>
                        42 <br />
                        (EP1138 - EP1179)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Vigésimoquinta Temporada: <br /></li>
                            <i>Viajes Definitivos</i>
                        </ul>
                    </td>
                    <td>
                        57 <br />
                        (EP1180 - EP1236)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-serie">Serie "Horizontes Pokemon"
                    {Generacion && Generacion.map((generacion) => (
                            <div key={generacion.id}> {generacion.id === 9 ? (<img src={ generacion.Icon} alt=""/>): <div></div>}</div>))}
                    </th>
                    <th className="contenedor-anime-serie">???</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Lista de Episodios de la Vigésimosexta Temporada: <br /></li>
                            <i>?????</i>
                        </ul>
                    </td>
                    <td>
                        ?? <br />
                        (EP1237 - EP????)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-titulo">Episodios Especiales del Anime</th>
                    <th className="contenedor-anime-titulo">93</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Cortos de Pikachu</li>
                        </ul>
                    </td>
                    <td>
                        21 (PK01 - PK21)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Episodios Especiales</li>
                        </ul>
                    </td>
                    <td>
                        20 (EE01 - EE20)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Epidios de las Crónicas Pokemon</li>
                        </ul>
                    </td>
                    <td>
                        22 (CP01 - CP22)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Epidios del Especial Pokemon Megaevolución</li>
                        </ul>
                    </td>
                    <td>
                        4 (SME01 - SME04)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Cortos de Los Sorprendentes Anillos de Hoopa</li>
                        </ul>
                    </td>
                    <td>
                        6 (OAH01 - OAH06)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Cortos de EEvee, ¿A dónde vas?</li>
                        </ul>
                    </td>
                    <td>
                        6 (EDV01 - EDV06)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Episodios Pokemon: Las crónicas de Arceus</li>
                        </ul>
                    </td>
                    <td>
                        4 (LPA01 - LPA04)
                    </td>
                </tr>
                <tr>
                    <th className="contenedor-anime-titulo">Otras Animaciones (Separadas del anime y los Especiales)</th>
                    <th className="contenedor-anime-titulo">53</th>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Episodios Pokemon: Los Orígenes</li>
                        </ul>
                    </td>
                    <td>
                        4 (PO01 - PO04)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Episodios Pokemon: Generaciones</li>
                        </ul>
                    </td>
                    <td>
                        18 (GEN01 - GEN18)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Minipisodios Pokemon: Alas del Crepúsculo </li>
                        </ul>
                    </td>
                    <td>
                        8 (PAC01 - PAC08)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Minipisodios Poketoon: </li>
                        </ul>
                    </td>
                    <td>
                        8 (TOON01- TOON08)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Minipisodios Evoluciones Pokemon </li>
                        </ul>
                    </td>
                    <td>
                        8 (EVO01 - EVO08)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Minipisodios Pokemon: Nieves de Hisui </li>
                        </ul>
                    </td>
                    <td>
                        3 (NH01 - NH03)
                    </td>
                </tr>
                <tr className="contenedor-anime-episodios">
                    <td>
                        <ul>
                            <li>Tráilers animados de los Videojuegos: </li>
                        </ul>
                    </td>
                    <td>
                        4 (TA01 - TA04)
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Anime;