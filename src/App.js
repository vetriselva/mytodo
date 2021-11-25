import './App.css';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './TodoInput';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [data, setData] = useState([]);

  const addTodo = function() {
    const userInput = {
      id :  Math.random(),
      name: name, 
      priority: priority, 
      status: 'Start'
    };
    setData([userInput, ...data]);
  }

  const updateStatus = function(id,status) {
    const updatedTodo = data.map(todo => {
      if (id == todo.id) {
        return {...todo, status: status}
      }
      return todo;
    });
    setData(updatedTodo);
  }

  const removeTodo = function(id) {
    const updated = data.filter(todo => id !== todo.id);
    setData(updated);
  }

  return (
    <div className="App">
      <div className="container">
      <h3 className="Mytodo">My Todo</h3>
      {/* <TodoInput/> */}
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                    <label>Enter Todo:</label>
                    <input type="text" onChange={(e) => {setName(e.target.value)}} className="form-control"/>
                </div>
                <div className="col-md-3">
                    <label>Priority:</label>
                    <select className="form-control" onChange={(e) => {setPriority(e.target.value)}}>
                    <option value="">select priority</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <br/>
                    <input type="buttton" onClick={addTodo} className="form-control btn btn-info" value="Add"/>
                </div>
            </div> 
        </div>
      <br/>
      <br/>
      { data.map((todo,i) => {
        return <Todo remove= {removeTodo} updateStatus= {updateStatus} key={todo.id} todo={todo}/>
      })}
      </div>
    </div>
  );
}

export default App;
