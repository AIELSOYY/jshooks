import React, {useEffect, useState} from 'react'

function FunctionCount() {
    const [counter, setCount] = useState(0)

    useEffect( () => {
        setTimeout(() => {
            document.title= `Vous avez cliqué ${counter} fois`;
        }, 5000)
    })

  return (
    <div>
        <p>Vous avez cliqué {counter} fois</p>
        <button onClick={() =>setCount(counter +1)}>Add 1 to counter</button>
    </div>
  )
}

export default FunctionCount
