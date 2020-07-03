import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';


class App extends Component {

  // STATE o CONSTRUCTOR es un objeto
  state = {
    termino: '',
    imagenes: [],
    pagina : ''

  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () =>{
    //leer el state de la pag actual
      let pagina = this.state.pagina;

    // leer si la pagina es 1 no ir hacia atras
    if(pagina === 1) return null;

    //resta uno a la pagina actual
      pagina --;

    //agregar el cambio al state
      this.setState({ 
        pagina 
      }, () => {
        this.consultarApi();
        this.scroll();
      
      });

    //console.log(pagina);
  
  }

  paginaSiguiente = () =>{
    //leer el state de la pag actual
      let pagina = this.state.pagina;

    //sumar uno a la pagina actual
      pagina ++;

    //agregar el cambio al state
      this.setState({ pagina 
      }, () => {
        this.consultarApi();
        this.scroll();
      
      });

    //console.log(pagina);
  }

  consultarApi = () => {

    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;

     console.log(url); 

    // lee el json
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }


  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1

    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">

        {/* class de bootstrap  */}
        <div className="jumbotron">
          <p className="lead text-center"><h1>Buscador de Imágenes</h1></p>


          <Buscador
            /* props > pasamos datos del componete padre > App.js al componente hijo > buscaror*/
            datosBusqueda={this.datosBusqueda}
          />
        </div>

        <div className="row justify-content-center">
          <Resultado 
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
          />
        </div>

      </div>
    );
  }
}


export default App;
