import Mochila from './assets/Mochila.png'
import Tijeras from './assets/Tijeras.png'

function Eleccion({onCambio}) {
    return (
        <div>
            <h1>Producto: Mochila </h1>
            <img src={Mochila} alt='mochila'/>
            <h1>Producto: Tijeras</h1>
            <img src={Tijeras} alt='tijeras' width={300} height={200}/>
            <input
             type="text"
             placeholder="Escribe el producto"
             onChange={(e)=>onCambio(e.target.value)} />
        </div>
    )
}


export default Eleccion;