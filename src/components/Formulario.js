import React, { Component } from 'react'


class Formulario extends Component {
    constructor (){
        super();
        this.state ={
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    
    
    handleInput(e){
        const {value,name} =  e.target;
        this.setState({
            [name]:value
        })
      
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
        console.log("Enviando los Datos");
    }


    render() {
        return (
           <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>

                <h3>Registro de Tarea</h3>

                <div className="form-group">
                    <input type="text"
                    name="titulo"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Titulo"/>
                </div>

                <div className="form-group">
                    <input type="text"
                    name="responsable"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Responsable"/>
                </div>

                <div className="form-group">
                    <input type="text"
                    name="descripcion"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Descripcion"/>
                </div>

                <div className="form-group">
                    <select name="prioridad" className="form-control" onChange={this.handleInput}> 
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Agregar Tarea</button>

            </form>

           </div>
        )
    }
}

export default Formulario;

