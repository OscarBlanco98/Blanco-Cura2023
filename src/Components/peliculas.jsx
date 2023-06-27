import peliculas from '../Peliculas.json';
import './peliculas.css'
function Peliculas(){
    return(
        <div>
            <h2>Peliculas</h2>
            <p>La película Pokémon, llamadas así a partir de la película Negro - Victini y Reshiram / Blanco - Victini y Zekrom, o simplemente películas son producciones en su mayoría protagonizadas por el elenco principal de la serie televisiva, en las que Ash y sus amigos se involucran con uno o varios Pokémon legendarios. También suelen contar con la participación del Equipo/Team Rocket y con nuevos Pokémon nunca antes vistos en el anime, como ha ocurrido con algunos Pokémon singulares.</p>
            <p>Algunas películas han estado acompañadas de un corto animado al inicio, el cual muestra las aventuras del Pikachu de Ash junto con otros Pokémon sin la intervención de los humanos. Al principio de cada película siempre se muestra una nueva versión del opening que se está emitiendo actualmente en el anime, por otras parte, los endings de las películas siempre son totalmente nuevos.</p>
            <p>Todos los años hasta 2020, en el mes de julio, se estrena en Japón una película de Pokémon. Esta es distribuída por Toho en el país asiático, mientras que en occidente las distribuidoras han sido 4Kids Entertainment Licensing, Inc., Miramax Films, Warner Bros. Pictures y más recientemente VIZ Media. Junto con los estrenos y proyecciones en el cine de algunas de las películas se han repartido Pokémon de eventos y cartas promocionales del JCC Pokémon.</p>
            <h3>Lista de Películas</h3>
            <p>Desde el año 1998 y hasta finales del año 2020, se han estrenado 23 películas animadas y un live-action basado en el videojuego Detective Pikachu:</p>
            <h4>Animadas</h4>
            <table className="contenedor-peliculas">
                <tr className="contenedor-peliculas-titulo">
                    <th>Número</th>
                    <th>Póster</th>
                    <th>Títulos</th>
                    <th>Detalles</th>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>1</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 1 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Mewtwo Contraataca</td>
                    <td>En un laboratorio del Equipo Rocket, unos prestigiosos científicos, expertos en genética Pokémon, crean a partir del ADN de Mew un nuevo Pokémon al que llaman Mewtwo. <hr /> <b>Estreno:</b> 18 de julio de 1998 (JA) • 10 de noviembre de 1999 (EE.UU.) • 14 de abril de 2000 (ES) • 15 de diciembre de 1999 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>2</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 2 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>El poder Uno</td>
                    <td>Lawrence III viaja por las diferentes islas Naranjas para capturar a las tres aves Legendarias: Moltres, Articuno y Zapdos. Estos Pokémon son el camino hacia una recompensa mucho más grande: Lugia. <hr /> <b>Estreno: </b> 17 de julio de 1999 (JA) • 21 de julio de 2000 (EE.UU.) • 24 de noviembre de 2000 (ES) • 16 de agosto de 2000 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>3</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 3 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>El Hechizo de los Unown</td>
                    <td>Cuando el profesor Spencer Hale investiga uans ruinas, los Unown lo atrapan en su dimensión y hacen aparecer a Entei para servir todo capricho de Molly<hr /> <b>Estreno: </b> 8 de julio de 2000 (JA) • 6 de abril de 2001 (EE.UU.) • 20 de julio de 2001 (ES) • 29 de agosto de 2001 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>4</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 4 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Pokémon x siempre - Celebi: La voz del Bosque</td>
                    <td>Un oficial del élite del Equipo Rocket conocido como la Máscara de Hierro tiene el objetivo de capturar a Celebi para así conseguir poder. El joven Samuel Oak, quien ha viajado en el tiempo desde el pasado, se interpone en los planes de la Máscara de hierro y cuenta con la ayuda de Suicune<hr /> <b>Estreno: </b> 7 de julio de 2001 (JA) • 11 de octubre de 2002 (EE.UU.) • 15 de octubre de 2003 (ES) • 5 de diciembre de 2004 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>5</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 5 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Héroes Pokémon: Latios y Latias</td>
                    <td>Latios y Latias se ven amenzados por las integrantes Annie y Oakley del Equipo Rocket quienes intentan hacerse con los Pokémones legendarios, así como con una joya misteriosa que les dará el control de una poderosa máquina<hr /> <b>Estreno: </b> 13 de julio de 2002 (JA) • 16 de mayo de 2003 (EE.UU.) • 12 de mayo de 2004 (ES) • 18 de septiembre de 2004 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>6</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 6 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Jirachi y los deseos</td>
                    <td>Un ex-científico del Equipo/Team Magma llamado Butler lleva a cabo un plan para revivir a Groudon con la energía del cometa del milenio, que solo puede obtenerse a través de Jirachi<hr /> <b>Estreno: </b> 19 de julio de 2003 (JA) • 1 de junio de 2004 (EE.UU.) • No emitida (ES) • 20 de octubre de 2008 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>7</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 7 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>El destino de Deoxys</td>
                    <td>La tecnológica Ciudad LaRousse sufre un colapso cuando es visitada por el Pokémon del espacio Deoxys quien toma el control del lugar. La situación se complica más cuando el Pokémon legendario Rayquaza acude para intentar expulsar al invasor.<hr /> <b>Estreno: </b> 17 de julio de 2004 (JA) • 22 de enero de 2005 (EE.UU.) • No emitida (ES) • 20 de octubre de 2008 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>8</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 8 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Lucario y el misterio de Mew</td>
                    <td>Mew se lleva al Pikachu de Ash al Árbol del Comienzo/Árbol de los Comienzos, pero resulta ser un lugar hostil para los humanos. Ash y sus amigos con la ayuda del Lucario de Sir Aaron intentan llegar hasta Pikachu, sin embargo son sorprendidos por Regirock, Registeel y Regice.<hr /> <b>Estreno: </b> 16 de julio de 2005 (JA) • 19 de septiembre de 2006 (EE.UU.) • 16 de junio de 2007 (ES) • 4 de febrero de 2008 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>9</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 9 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Pokémon Ranger y el Templo del Mar</td>
                    <td>Un Pokémon Ranger llamado Jackie rescata un huevo de Manaphy de un codicioso pirata llamado Fantasma/Fantomas, el cual está totalmente decidido a robar la Corona del Mar. Kyogre aparece para truncar los planes de este villano.<hr /> <b>Estreno: 15 de julio de 2006 (JA) • 23 de marzo de 2007 (EE.UU.) • 1 de diciembre de 2007 (ES) • 16 de enero de 2009 (HA)</b> </td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>10</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 10 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>El surgimiento de Darkrai</td>
                    <td>Una feroz batalla entre la deidad del tiempo Dialga y la deidad del espacio Palkia toma lugar en Pueblo Álamos, transportándolo a una extraña dimensión que amenaza con desintegrar todo. Solo un Pokémon puede detenerlos, Darkrai, que vive en los jardines del pueblo.<hr /> <b>Estreno: </b> 14 de julio de 2007 (JA) • 24 de febrero de 2008 (EE.UU.) • 6 de septiembre de 2008 (ES) • 13 de mayo de 2009 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>11</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 5 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Giratina y el guerrero celestial</td>
                    <td>Un investigador conocido como Zero tiene intenciones de hacerse con los poderes de Giratina y así gobernar el Mundo Inverso. Sin embargo, el conflicto entre Giratina y Dialga complica las cosas, mientras que un Shaymin y un Regigigas sufren las consecuencias de los planes de Zero.<hr /> <b>Estreno: </b> 19 de julio de 2008 (JA) • 13 de febrero de 2009 (EE.UU.) • 1 de mayo de 2009 (ES) • 9 de abril de 2010 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>12</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 12 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Arceus y la joya de la vida</td>
                    <td>Arceus, quien había confiado la joya de la vida a los habitantes de Pueblo Michina, descubre que ha sido traicionado y se dispone a destruirlo todo. Dialga, Palkia y Giratina se ponen del lado de los humanos y hacen todo lo posible para remediar la situación.<hr /> <b>Estreno: </b> 18 de julio de 2009 (JA) • 20 de noviembre de 2009 (EE.UU.) • 4 de abril de 2010 (ES) • 21 de noviembre de 2010 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>13</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 13 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Zoroark: El maestro de ilusiones</td>
                    <td>Un empresario llamado Grings Kodai usa las habilidades de Zoroark para facilitar la búsqueda de una misteriosa onda del tiempo dejada por Celebi, generando el caos en Ciudad Corona y la furia de Entei, Suicune y Raikou.<hr /> 10 de julio de 2010 (JA) • 5 de febrero de 2011 (EE.UU.) • 26 de febrero de 2011 (ES) • 10 de marzo de 2012 (HA)<b>Estreno: </b> </td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>14</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 14 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Negro - Victini y Reshiram</td>
                    <td>Damon, un descendiente de la Tribu del Valle, busca restaurar el reino perdido de su gente con la ayuda de Zekrom, sin embargo requiere de los poderes de Victini.<hr /> <b>Estreno: </b> 16 de julio de 2011 (JA) • 10 de diciembre de 2011 (EE.UU.) • 28 de abril de 2012 (ES) • 29 de noviembre de 2012 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>15</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 15 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Kyurem contra el espadachín místico</td>
                    <td>Keldeo decide a retar a Kyurem, del cual se dice es el Pokémon tipo dragón más poderoso que existe. Esto con el fin de demostrarles a sus maestros Cobalion, Terrakion y Virizion que está listo para ser un espadachín místico.<hr /> <b>Estreno: </b> 14 de julio de 2012 (JA) • 8 de diciembre de 2012 (EE.UU.) • 14 de septiembre de 2013 (ES) • 1 de noviembre de 2013 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>16</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 16 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Genesect y el despertar de una leyenda</td>
                    <td>Un grupo de Genesect decide hacer de la Ciudad de Nueva Tork su nuevo hogar, llamando la atención de Mewtwo. Sin embargo, su estadía representa una amenaza para los ciudadanos.<hr /> <b>Estreno: </b> Estreno: 13 de julio de 2013 (JA) • 19 de octubre de 2013 (EE.UU.) • 19 de octubre de 2013 (ES) • 30 de mayo de 2014 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>17</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 17 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Diancie y la crisálida de la destrucción</td>
                    <td>El Pokémon joya Diancie necesita de las habilidades de Xerneas para mantener con vida a su reino pero su tarea se ve amenazada cuando Yveltal despierta de un largo sueño en su crisálida, trayendo consigo destrucción a la región de Kalos.<hr /> <b>Estreno: </b> 19 de julio de 2014 (JA) • 8 de noviembre de 2014 (EE.UU.) • 14 de septiembre de 2015 (ES) • 2 de agosto de 2015 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>18</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 18 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Hoopa y un duelo histórico</td>
                    <td>El poder oscuro de Hoopa que había permanecido sellado por muchos años es liberado y desata un combate de grandes proporciones protagonizado por Lugia, Latios, Latias, Kyogre, Groudon, Rayquaza, Regigigas, Dialga, Palkia, Giratina, Arceus, Zekrom, Reshiram y Kyurem.<hr /> <b>Estreno: </b> 18 de julio de 2015 (JA) • 19 de diciembre de 2015 (EE.UU.) • 19 de enero de 2016 (ES) • 1 de junio de 2016 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>19</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 19 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Volcanion y la maravilla mecánica</td>
                    <td>Latios y Latias se ven amenzados por las integrantes Annie y Oakley del Equipo Rocket quienes intentan hacerse con los Pokémones legendarios, así como con una joya misteriosa que les dará el control de una poderosa máquina<hr /> <b>Estreno: </b> 16 de julio de 2016 (JA) • 5 de diciembre de 2016 (EE.UU.) • 26 de noviembre de 2016 (ES) • 10 de agosto de 2017 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>20</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 20 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>¡Yo te elijo!</td>
                    <td>Después de un difícil primer día como entrenador, Ash Ketchum tiene un avistamiento único del Pokémon arcoíris Ho-Oh. Esto encamina al joven de 10 años en una búsqueda que estará supervisada desde las sombras por Marshadow.<hr /> <b>Estreno: </b> 15 de julio de 2017 (JA) • 5 de noviembre de 2017 (EE.UU.) • 5 de noviembre de 2017 (ES) • 5 de noviembre de 2017 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>21</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 21 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>El poder de todos</td>
                    <td>El Festival del Viento que se realiza en honor a Lugia se ve amenazado por una serie de incidentes. Cinco personas con intereses muy diferentes deberán trabajar juntos para salvar el evento, al mismo tiempo revelando los misterios que envuelven al Pokémon Zeraora.<hr /> <b>Estreno: </b> 13 de julio de 2018 (JA) • 24 de noviembre de 2018 (EE.UU.) • 15 de diciembre de 2018 (ES) • 10 de diciembre de 2018 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>22</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 22 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Mewtwo contraataca: Evolución</td>
                    <td>Cuando los investigadores descubren un fósil del Pokémon singular Mew y llevan a cabo una creación que va en contra de las leyes de la naturaleza: Mewtwo, un Pokémon legendario destinado a ser utilizado como una herramienta de destrucción. Pero a medida que toma conciencia de su existencia, comienza a sentir resentimiento hacia sus creadores humanos y a buscar venganza, ¡y Ash, Pikachu y sus amigos se encuentran en medio de su furia desenfrenada!<hr /> <b>Estreno: </b> 12 de julio de 2019 (JA) • 27 de febrero de 2020 (EE.UU.) • 27 de febrero de 2020 (ES) • 27 de febrero de 2020 (HA)</td>
                </tr>
                <tr className="contenedor-peliculas-enumeracion">
                    <td>23</td>
                    <td>{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 23 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>Los secretos de la selva</td>
                    <td>En lo profundo de la selva, muy lejos de cualquier rastro de civilización, se encuentra el Bosque de Okoya, un paraíso Pokémon vedado para los forasteros y protegido por un estricto código de normas. En esta selva vive Koko, un niño humano que ha sido criado como un Pokémon más por el Pokémon singular Zarude.<hr /> <b>Estreno: </b> 25 de diciembre de 2020 (JA) • 8 de octubre de 2021 (EE.UU.) • 8 de octubre de 2021 (ES) • 8 de octubre de 2021 (HA)</td>
                </tr>
            </table>
            <br /><br />
            <h4>Live Action</h4>
            <table className="contenedor-peliculas">
                <tr className="contenedor-peliculas-titulo">
                    <th>Número</th>
                    <th>Póster</th>
                    <th>Títulos</th>
                    <th>Detalles</th>
                </tr>    
                <tr className="contenedor-peliculas-enumeracion">
                    <td>1</td>
                    <td class="contenedor-peliculas-image">{peliculas && peliculas.map((peliculas) => (
                            <div key={peliculas.id}> {peliculas.id === 24 ? (<img src={ peliculas.Icon} alt=""/>): <div></div>}</div>))}
                    </td>
                    <td>POKÉMON: Detective Pikachu</td>
                    <td>El joven Tim Goodman debe investigar la repentina desaparición de su padre, la cual está relacionada con Mewtwo. Para ello, Tim contará con la asistencia de un peculiar Pikachu con el cual puede comunicarse y que tiene dotes de detective.<hr /> <b>Estreno: </b> 5 de mayo de 2019 (JA) • 10 de mayo de 2019 (EE.UU.) • 10 de mayo de 2019 (ES) • 9 de mayo de 2019 (HA)</td>
                </tr>
            </table>
        </div>
    )
}

export default Peliculas;