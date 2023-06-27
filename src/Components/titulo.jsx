import pokemon from '../pokemon.png';
import './titulo.css';
function Titulo(){
    return(
      <div className="titulo">
        <img className='img-titulo' src={pokemon} alt="Pokemon Logo"/>
      </div>
    )
}
export default Titulo;
