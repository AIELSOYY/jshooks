import './App.css';
import React, { Component, useCallback, useState } from 'react'
import ClickSayHello from './components/ClickSayHello';
// import Count from './components/Count';
// import Button from './components/Button';

// import logo from './logo.svg';
// import ClassState from './components/ClassState';
// import FunctionState from './components/FunctionState';
// import { v4 as uuidv4} from 'uuid';
// import Todo from './components/Todo';
// import AddTodoForm from './components/AddTodoForm';
// import ClassCount from './components/ClassCount'
// import FunctionCount from './components/FunctionCount';
// import Profile from './components/Profile';
// import { UserContext, ColorContext } from './components/MyContext';
// import { Button } from 'bootstrap';

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

// class App extends React.Component {

  // state = {
  //   user: {
  //     name: 'Lisa',
  //     age: 8
  //   }
  // }

  // render(){
  //   return(
  //     <UserContext.Provider value={this.state.user}>
  //       <ColorContext.Provider value={'red'}>
  //         <Profile/>
  //       </ColorContext.Provider>
  //     </UserContext.Provider>
  //   );
  // }

  // render(){
  //   return(
  //     <div className="text-center">
  //       <Count></Count>
  //       <Button>Count 1</Button>
  //       <Button>Count 2</Button>

  //     </div>
  //   )
  // }
// }

// function App() {
//   const [countOne, setCountOne] = useState({value: 0, btnColor :'success',increment: 25 })
//   const [countTwo, setCountTwo] = useState({value: 0, btnColor :'danger',increment: 20 })

//   const incrementCountOne = useCallback((val) => {
//     console.log('Je suis dans incrementCountOne')
//     countOne.value < 100 && setCountOne({...countOne,value: countOne.value + val })
//   }, [countOne])
//   const incrementCountTwo = useCallback((val) => {
//     console.log('Je suis dans incrementCountTwo')
//     countTwo.value < 100 && setCountTwo({...countTwo,value: countTwo.value + val })
//   },[countTwo])

//   return(
//     <div className='container'>
//       <Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor} />
//       <Count text="CountOne" count={countTwo.value} bgColor={countTwo.btnColor}/>

//       <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
//       <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
//     </div>

//   )
// }

function App(){
  return(
    <div className="App">
      <ClickSayHello/>
    </div>
  )
}

export default App;
