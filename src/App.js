import logo from './logo.svg';
import './App.css';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';
import { v4 as uuidv4} from 'uuid';
import Todo from './components/Todo';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div>
      <h1 className="text-center">useState hooks</h1>
      {/* <ClassState/>
      <hr />
      <FunctionState/> */}
      <hr />
      <div className="container">
        <Todo/>
        <AddTodoForm/>
      </div>
      
    </div>
  );
}

export default App;
