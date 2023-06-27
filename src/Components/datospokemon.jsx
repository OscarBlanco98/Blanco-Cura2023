import { useState, useEffect } from 'react';
import './datospokemon.css'
import axios from 'axios'
function DatosPokemon (){

    const[numero, setNumero]= useState(1)
    const[pokemon, setPokemon]= useState({})
    
    function numeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }

    const handlerandom = () =>{
        setNumero(numeroAleatorio(1,151)) 
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPokemon = async () =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${numero}`
        const respuesta = await axios.get(url)
        setPokemon(respuesta.data)
        console.log(respuesta.data)
    }

    useEffect(()=>{
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[numero])
    
    const objPokemon ={
        nombre: pokemon.name,
        id: pokemon.id,
        tipo: pokemon.types,
        habilidades: pokemon.abilities,
        estadisticas1: pokemon.stats,
    }

    const{nombre,id,tipo,habilidades,estadisticas1} = objPokemon

    return(
        <>
        <button className='btn-aleatorio' onClick={handlerandom}>Generar Pokemon Aleatorio</button> 
        <div className="card">
            <h4>Pokémon N° {id}</h4>
            <h1>{nombre}</h1>  
            <img className='img-pokemon-aleatorio' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${numero}.png`} alt="" />
            <h3>Tipos</h3>
            <div className='type'>
                <div className='types'>
                    {tipo === undefined? '': tipo.map((tipo, index)=>{
                            return(
                                <p key={index}>{tipo.type.name}</p>)
                                })}
                </div>
            </div>
            <h3>Habilidades</h3>
            <div className="abilities">
                <div className="group">
                    <div>
                        {habilidades === undefined? '': habilidades.map((habilidad, index)=>{
                            return(
                                <p key={index}>{habilidad.ability.name}</p>)
                                })}
                    </div>
                </div>
            </div>
            <h3>Estadisticas</h3>
            <div className="base-stat">
                <div className='base-stats'>
                    {estadisticas1 === undefined? '': estadisticas1.map((estadistica, index)=>{
                            return(
                                <p key={index}>{estadistica.stat.name}: {estadistica.base_stat}</p>)
                                
                                })}
                </div>
            </div>
        </div>     
        </>
    )
}
export default DatosPokemon;