import './App.css';
import React from 'react'

// import logo from './logo.svg';
// import ClassState from './components/ClassState';
// import FunctionState from './components/FunctionState';
// import { v4 as uuidv4} from 'uuid';
// import Todo from './components/Todo';
// import AddTodoForm from './components/AddTodoForm';
// import ClassCount from './components/ClassCount'
// import FunctionCount from './components/FunctionCount';
import Profile from './components/Profile';
import { UserContext, ColorContext } from './components/MyContext';

// function App() {
//   const [name, setName] = useState('Lisa')
//   const [age, setAge] = useState(8)
//   const ProfContext = createContext(null);
//   return (
    
//     <div >
//       <h1 className="text-center">useState hooks</h1>
//       {/* <ClassState/>
//       <hr />
//       <FunctionState/> */}
//       {/* <hr />
//       <div className="container">
//         <Todo/>
//       </div> */}
//       {/* <ClassCount/> */}
//       {/* <FunctionCount/> */}
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    user: {
      name: 'Lisa',
      age: 8
    }
  }

  render(){
    return(
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={'red'}>
          <Profile/>
        </ColorContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
