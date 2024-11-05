import { useState } from "react"


export const Contador = () => {
    const [obj, setObj] = useState({
        num: 1
    })

    const handleClick = () => {
        const newObj = {...obj, num: obj.num + 1}
        setObj(newObj)
    }
    return <>
    <h2>Contador</h2>
    <p>contador: {obj.num}</p>
    <button onClick={handleClick}>agregar uno mas</button>
    </>
}