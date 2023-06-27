import { useState } from 'react';

function Contador(){
    const [contador, setContador]=useState(0)
    const handleClick = () =>{
        setContador(contador + 1)
    }
    return(
        <div>
            <span>El Contador está a:  {contador}</span>
            <button onClick={handleClick}>Clickeame</button>
        </div>
    )
    }
export default Contador;