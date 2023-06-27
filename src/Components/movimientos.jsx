import Tipos from '../Tipos.json';
import './movimientos.css'
function Movimientos(){
    return(
        <div>
            <h3>Lista de movimientos por generación</h3>
            <h3>Movimientos de la Primera Generación</h3>
            <p>En la Primera Generación se agregaron 164 movimientos distribuidos de la siguiente manera:</p>
            <table className="contenedor-movimientos">
                <tr className="contenedor-movimientos-clasificacion">
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 1 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>0</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 2 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>9</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 3 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>4</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 4 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>1</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 5 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>5</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 6 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>3</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 7 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>5</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 8 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>0</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 9 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>6</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 10 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>9</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 11 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>73</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 12 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>10</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 13 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>15</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 14 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>2</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 15 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>1</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 16 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>6</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 17 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>8</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.id === 18 ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>7</td>
                </tr>
            </table>

            <br /><br />
            <table className="contenedor-movimientos">
                <tr className="contenedor-movimientos-clasificacion">
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Clase</th>
                    <th>Concurso</th>
                    <th>Ingles</th>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Burbuja</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bubble</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Cascada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Waterfall</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hidrobomba</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Hydro Pump</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Martillazo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Crabhammer</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pistola Agua</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Water Gun</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo Burbuja</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bubble Beam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Refugio</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Withdraw</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Surf</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Surf</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Tenaza</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Agua" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Clamp</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Chupavidas</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Leech Life</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Disparo Demora</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>String Shot</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Doble Ataque</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Twineedle</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pin Misil</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Bicho" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Pin Missile</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Furia Dragon</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Dragon" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Dragon Rage</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Impactrueno</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thunder Shock</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Onda Trueno</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thunder Wave</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Puño Trueno</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thunder Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thunderbolt</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Trueno</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Electrico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thunder</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Lengüetazo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Lick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo Confuso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Confuse Ray</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Tinieblas</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fantasma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Night Shade</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ascuas</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Ember</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Giro Fuego</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fire Spin</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Lanzallamas</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Flamethrower</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Llamarada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fire Blast</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Puño de Fuego</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Fuego" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fire Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Neblina</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mista</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Niebla</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Haze</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Puño Hielo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Ice Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo Aurora</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Aurora Beam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo Hielo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Ice Beam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ventisca</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Hielo" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Blizzard</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Contraataque</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Counter</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Doble Patada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Double kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Golpe Karate</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Karate Chop</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Patada Baja</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Low Kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Patada Giro</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Rolling Kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Patada Salto</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Jump Kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Patada Salto Alta</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>High Jump Kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Sismico</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Seismic Toss</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Sumisión</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Lucha" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Submission</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Afilar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sharpen</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Agarre</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Vise Grip</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Anulación</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Disable</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Arañazo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Scratch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Atadura</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bind</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ataque Furia</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fury Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ataque Rápido</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Quick Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Atizar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Slam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Autodestrucción</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Self-Destruct</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Beso Amoroso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Lovely Kiss</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Bomba Huevo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Egg Bomb</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Bomba Sónica</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sonic Boom</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Bombardeo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Barrage</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Cabezaso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Skull Bash</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Canto</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sign</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Chirrido</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Screech</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Clavo Cañon</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Spike Cannon</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Constricción</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Wrap</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Conversión</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Conversion</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Cornada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Horn Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Corte</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Cut</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Cuchillada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Slash</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Danza Espada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Swords Dance</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Derribo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Take Down</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Desarrollo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Growth</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Deslumbrar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Glare</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Destello</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Flash</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Destructor</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Pound</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Dia de Pago</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Pay Day</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Doble Bofetón</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Double Slap</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Doble Equipo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Double Team</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Doble Filo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Double-Edge</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Explosión</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Explosion</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Foco energía</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Focus Energy</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Fortaleza</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Harden</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Fuerza</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Strength</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Furia</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Rage</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Golpe Cabeza</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Headbutt</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Golpe Cuerpo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Body Slam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Golpes Furia</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fury Swipes</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Gruñido</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Growl</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Guillotina</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Guillotine</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hipercolmillo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Hyper Fang</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hiperrayo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Hyper Beam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Látigo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Tail Whip</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Malicioso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Leer</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Megapatada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mega Kick</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Megapuño</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mega Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Meteoros</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Swift</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Metrónomo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Metronome</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Mimético</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mimic</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ovocuración</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Soft-Boiled</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pantalla de Humo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Smokescreen</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Perforador</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Horn Drill</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pisotón</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Stomp</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Placaje</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Tackle</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Puño Cometa</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Comet Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Puño Mareo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Dizzy Punch</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Recuperación</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Recover</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Reducción</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Minimiza</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Remolino</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Whirlwind</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Restricción</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Constrict</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rizo Defensa</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Defense Curl</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rugido</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Roar</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Salpicadura</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Splash</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Saña</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Thrash</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Superdiente</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Super Fang</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Supersónico</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Supersonic</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Sustituto</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Substitute</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Transformación</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Transform</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Triataque</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Tri Atatack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Venganza</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bide</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Viento Cortante</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Normal" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Razor Wind</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Absorver</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Absorb</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Danza Pétalo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Petal Dance</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Drenadora</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Leech Seed</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Espora</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Spore</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hoja Afilada</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Razor Leaf</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Látigo Cepa</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Vine Whip</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Megaagotar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mega Drain</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Paralizador</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Stun Spore</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Rayo Solar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Solar Beam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Somnífero</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Planta" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sleep Powder</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Agilidad</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Agility</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Amnesia</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Amnesia</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Barrera</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Barrier</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Comesueños</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Dream Eater</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Confusión</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Confusion</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Descano</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Rest</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hipnosis</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Hypnosis</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Kinético</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Kinesis</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Meditación</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Meditate</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pantalla de Luz</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Light Screen</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Psicoonda</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Psywave</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Psicorrayo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Belleza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Psybeam</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Psíquico</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Psychic</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Reflejo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Reflect</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Teletransporte</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Psiquico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Teleport</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Avalancha</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Rock Slide</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Lanzarrocas</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Roca" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Rock Throw</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Mordisco</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Siniestro" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bite</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ataque Arena</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dulzura" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sand Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Excavar</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Dig</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Fisura</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fissure</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Hueso Palo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bone Club</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Huesomerang</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Bonemerang</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Terremoto</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Tierra" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Earthqueke</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ácido</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Acid</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Armadura Ácida</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Acid Armor</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Gas Venenoso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Poison Gas</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Picotazo Venenoso</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Poison Sting</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Polucion</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Smog</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Polvo Veneno</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Poison Powder</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Residuos</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Dureza" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sludge</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Tóxico</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Veneno" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Toxic</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ataque Aéreo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Sky Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Ataque Ala</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Wing Attack</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Espejo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Estado" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Mirror Move</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Pico Taladro</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Drill Peck</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Picotazo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Carisma" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Peck</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Tornado</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Especial" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Gust</td>
                </tr>
                <tr className="contenedor-movimientos-tipos">
                    <td>Vuelo</td>
                    <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.tipo === "Volador" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.clase === "Fisico" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                        <td>{Tipos && Tipos.map((tipos) => (
                            <div key={tipos.id}> {tipos.concurso === "Ingenio" ? (<img src={ tipos.icon} alt=""/>): <div></div>}</div>
                        ))}</td>
                    <td>Fly</td>
                </tr>
            </table>
        </div>
    )
}

export default Movimientos;