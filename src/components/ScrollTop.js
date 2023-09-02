import React from 'react'

export const ScrollTop = ()  => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página al tope cuando el componente se monta
      }, []);
    
      return null; 
}
