import React, { Component } from 'react' /* importamos el componente */

class Buscador extends Component{

    busquedaRef = React.createRef(); /* funcion de react */

    obtenerDatos = (e) => {
        e.preventDefault();/* el metodo va con parentesis */

        //tomamos el valor del input
        console.log(this.busquedaRef.current.value);
  
        //lo enviamos al componente principal "App.js"
        this.props.datosBusqueda(this.busquedaRef.current.value); 
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}> {/* onSubmit evento para buscar */}
                <div className="row">
                  <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Ejemplo: Café" />

                    </div>
                

                <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-success btn-block" value="Buscar..." />

                    </div>
                    </div>
            </form>
        );
    }
}

export default Buscador;
