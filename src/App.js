import React,{ Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import logo from './logo.svg';

import {tasks} from './tasks.json';
import ParticleComponent from "./ParticleComponent";

class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
   
  }

  handleAddTask(task){
    this.setState({
      tasks:[...this.state.tasks,task] 
    })

  }
   
  removeTask(index){
      if(window.confirm('Esta seguro que desea eliminar esta tarea?')){
        this.setState({
          tasks: this.state.tasks.filter((e,i) =>{
            return i !== index
          })
        })
      }
  }
  render(){
    const tasks =this.state.tasks.map((task, i) =>{
      return (
 
          <div className="card" key={i}>
            <div className="card-header">
              <h3>{task.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{task.descripcion}</p>
              <p><mark>{task.responsable}</mark></p>
            </div>

            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>Eliminar</button>
            </div>

          </div>

      )
    })
  return (


      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <h3 className="text-white">
              Tareas
              <span className="badge badge-pill badge-light ml-4">
                {this.state.tasks.length}

              </span>
            </h3>
          </nav>
        <div className="container">
          <div className="row mt-4">
              <div className="col-sm-4">
               
               <Formulario onAddTask={this.handleAddTask}/>
               
              </div>
            <div className="col card-columns"> {tasks} </div>
          </div>
                   
        </div>

          <img src={logo} className="App-logo" alt="logo"/>
    </div>
        </div>
      </div>
 
    
  );
}
}
export default App;
