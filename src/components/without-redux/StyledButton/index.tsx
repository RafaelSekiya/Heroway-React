import React from 'react';
import './styles.css';

interface iProps {
    backgroundColor: string;
    text: string;
}

function styledButton(button: iProps) {

    return (
        <div>
            <button className="button">Clique aqui...</button>
        </div>
    )
}

export default styledButton;
