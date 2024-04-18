import './App.css';
// import logo from './logo.svg';
// import ClassState from './components/ClassState';
// import FunctionState from './components/FunctionState';
// import { v4 as uuidv4} from 'uuid';
// import Todo from './components/Todo';
// import AddTodoForm from './components/AddTodoForm';
import ClassCount from './components/ClassCount'
import FunctionCount from './components/FunctionCount';

function App() {
  return (
    <div >
      <h1 className="text-center">useState hooks</h1>
      {/* <ClassState/>
      <hr />
      <FunctionState/> */}
      {/* <hr />
      <div className="container">
        <Todo/>
      </div> */}
      {/* <ClassCount/> */}
      <FunctionCount/>
    </div>
  );
}

export default App;
