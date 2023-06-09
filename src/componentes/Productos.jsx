import React, {useContext} from 'react'
import  Teniis  from '../Assets/tenis.jpg'
import  Teniis1  from '../Assets/tenis2.jpg'
import  Teniis2  from '../Assets/tenis3.jpg'
import '../Styles/productos.css'
import {DataContext} from '../context/Dataprovider'


const Productos = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos

  return (
    <>
    <h1 className='tittle'> PRODUCTOS  </h1>    
    <div className='Productos'>
        <div className='producto'>
        < a href='#'     >  
<div className="producto_img">
    <img className='img123' src={Teniis} />
</div>
</a>
<div className='producto_footer'> 
<h1>Title</h1>
<p> Categorias</p>
<p className='price'>$700</p>


</div>
<div className='buttom'>
    <button className='btn' >  
    Añadir al Carrito
    </button>
    <div>
        <a href='#' className='btn'>  Vista   </a>
    </div>
</div>
</div>
<div className='producto'>
        < a href='#'     >  
<div className="producto_img">
    <img className='img123' src={Teniis1} />
</div>
</a>
<div className='producto_footer'> 
<h1>Title</h1>
<p> Categorias</p>
<p className='price'>$700</p>


</div>
<div className='buttom'>
    <button className='btn' >  
    Añadir al Carrito
    </button>
    <div>
        <a href='#' className='btn'>  Vista   </a>
    </div>
</div>
</div>
<div className='producto'>
        < a href='#'     >  
<div className="producto_img">
    <img className='img123' src={Teniis2} />
</div>
</a>
<div className='producto_footer'> 
<h1>Title</h1>
<p> Categorias</p>
<p className='price'>$700</p>


</div>
<div className='buttom'>
    <button className='btn' >  
    Añadir al Carrito
    </button>
    <div>
        <a href='#' className='btn'>  Vista   </a>
    </div>
</div>
</div>

    </div>
    </>
  )
}

export default Productos