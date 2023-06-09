import Barra from '../componentes/Barra';
import Carrucel from '../componentes/Carrucel';
import Cuadro from '../componentes/Cuadro';
import Productos from '../componentes/Productos';
import '../Styles/productos.css'

// aCCESOS A LOS USUARIOS AUTENTICADOS 
export const Board = () => {
    return (
       <>
       <Barra/>
       <Carrucel/>
       <div className='Appcp'>
       <Cuadro/>
      <Productos/>
       </div>
       
       
       </>
    )
}
