import React from 'react'

// const initialState = 0;
// const reducer =(state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reinitialiser':
//             return  initialState
//         default:
//             return state
//     }
// }

const Count = ({text, count, bgColor}) => {
    // const [count, dispatch] = useReducer(reducer,initialState)

    console.log(`Pourcentage ${text}`);
    const progress = {width: `${count}%`}

    return (
        // <div>
        //     <h1>{count}</h1>
        //     <button className="btn btn-success m-3" onClick={() => dispatch('increment')}>+</button>
        //     <button className="btn btn-danger m-3"  onClick={() => dispatch('decrement')}>-</button>
        //     <button className="btn btn-danger m-3"  onClick={() => dispatch('reinitialiser')}>0</button>

        // </div>
        <div>
            <p className='h1'>{count} %</p>

            <div className='progress'>
                <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role='progressbar'
                    style={progress}
                >
                </div>
            </div>
        </div>
    )
}

export default React.memo(Count);