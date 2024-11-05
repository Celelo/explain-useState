import { useState } from "react"



export const Home = () => {

           // 1      // 2                 // 3
    const [mensaje, setMensaje] = useState({
        mensajito: 'holis carajito' ,
        numero: 2
    })
//1.valor del estado 
// 2.funcion que cuando la ejecutemos nosva permitir cambiar el valor de 'mensaje' y va a forzar el renderizado del componente
// 3.valor




// al hacer click vamos a cambiar al numero 2 por otro. lo que pasemos en la funcion de modifiacion (setMensaje) es lo que va a formaer parte del estado y lo demas va a desaparecer. si no queremos que se pierda tambien lo podriamos redeclarar, por ejemplo setMensaje({mensajito: mensaje.mensajito, numero: 3}) AUNQUE NO ES LA MEJOR PRACTICA
const handleClick = () => {
    // setMensaje({numero: 3})
    setNumber(4)
    setNewMenssaje('hi')

}

// para resolver esto podemos usar los useState las veces que queramos y con distinta info en el 1. ejemplo

// 1. ejemplo : 

const [newMessaje, setNewMenssaje] = useState('hello!')

const [number, setNumber] = useState(3)

// 2. o lo podemos hacer con arrays : 

const [names, setNames] = useState(['matu'])


const handleName = () => {
    setNames([...names,'cele'])
}
    return <>
    {/* <h2>{mensaje.mensajito}</h2>
    <p>{mensaje.numero}</p> */}
    {/* <button onClick={handleClick}>toca</button> */}

    {/* // 1. */}
    <h2>{newMessaje}</h2>
    <p>{number}</p>
    <button onClick={handleClick}>toca</button>
    <button onClick={handleName}>agregar nombre</button>
    <ul>
        {names.map(name => 
        <li>{name}</li>

        )}
    </ul>

    </>
}