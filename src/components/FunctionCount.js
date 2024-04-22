import React, {useEffect, useState} from 'react'

function FunctionCount() {
    const [counter, setCount] = useState(0)

    const [name, setName] = useState('')
    useEffect( () => {
      console.log('Mise à jour du tire via useEffect')
      document.title= `Vous avez cliqué ${counter} fois`;
    }, [counter])

  return (
    <div>
      <h1>{counter}</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() =>setCount(counter +1)}>Add 1 to counter</button>
    </div>
  )
}

export default FunctionCount
