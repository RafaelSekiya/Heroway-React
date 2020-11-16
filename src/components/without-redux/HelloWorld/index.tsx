import React from 'react';


// <HelloWorld company="Heroway" age{2015}/>
// nome da função tem que ser = ao nome da pasta -> Boas Práticas
interface IHelloWorld {
    company: string;
    age?: number;
}
// iHelloWorld é melhor que HelloWorldProps
function HelloWorld(props: IHelloWorld){
    // ? = if ternário, se não tiver age não mostra a div
    const myContent = props.age ? <div> ajudando as pessoas desde {props.age}</div> : null;

    return (
        <div>
            <h1>
                <div> Olá mundo, somos a {props.company}</div>
                {myContent}
                </h1>
        </div>
    )
}

/*HelloWorld.defaultProps = {
    company: "Heroway"
};*/

export default HelloWorld;