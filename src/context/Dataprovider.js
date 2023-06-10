import React, { createContext, useState, useEffect } from "react";


export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	

	
 /*
  useEffect(() => {
		const producto = Data.items
		if(producto){
            setProductos(producto)
        }else{
            setProductos([])
        }

			
            setProductos([])
		}, []); 
	const value = {
        productos : [productos]
    }*/

	
	return (
		<DataContext.Provider >
			{props.children}
		</DataContext.Provider>
	)
};