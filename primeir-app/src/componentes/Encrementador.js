import { useState } from 'react'
import './Encrementador.css'

function Encrementar (){
    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
    }
    return(
    <div className='encrementador'>
    <p>Número: {number}</p>
    <button onClick={changeNumber}>Adicione +1!</button>
    </div>    
    )
}

export default Encrementar