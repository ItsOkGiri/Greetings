import React , { useState, useEffect } from 'react' ;
import Greet  from './Greet';

function App() {

    const [count, setCount] = useState(Math.ceil(Math.random() * 25)); 
    const [isOn , setIsOn] = useState(false);

    useEffect(() => {

        if(isOn && count > 0){
            setTimeout(() => {
                setCount(count => count - 1);
            }, 1000);
        }
    },[isOn , count]);
    if(count > 0){
        return(
            <div className='center'>   
                <button className={'btn'} onClick = { () => setIsOn(true) }> Ready!! </button>
                <div className={'timer'}>{count}</div>
            </div>
            );
        } else {
        console.log('1')
        return ( <Greet /> );
    }
  
}


export default App ;
