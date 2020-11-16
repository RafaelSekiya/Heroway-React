import React from 'react';
// counterState = {0, function() {faz algo...} }
function Counter() {
    //let counter = 0;
    const counterState = React.useState(0);
    const counter = counterState[0];
    const setCounter = counterState[1];
    
    
    function add(){
        //counter = counter + 1;
        setCounter(counter + 1);
        console.log('add', counter);
    }
    
    function sub(){
        //counter = counter - 1;
        setCounter(counter - 1);
        console.log('sub', counter);
    }

    return (
    <div>
        <button onClick={add}>Adicionar</button>
        <div>{counter}</div>
        <button onClick={sub}>Subtrair</button>
    </div>
    )
}

export default Counter;