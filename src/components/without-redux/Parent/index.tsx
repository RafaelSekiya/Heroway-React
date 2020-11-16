import React from 'react';

function Parent(props){
    return (
    <div>
        <nav>
            <span>Contato</span>
            <span>Sobre Nós</span>
        </nav>
        
        <div>
        {props.children}
        </div>
    </div>
    )
}

export default Parent;