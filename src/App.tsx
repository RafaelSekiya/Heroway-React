import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/without-redux/HelloWorld';
import Parent from './components/without-redux/Parent';
import Counter from './components/without-redux/Counter';
import SimpleHeroesList from './components/without-redux/SimpleHeroesList';
import TodoList from './components/without-redux/TodoList';
import StyledButton from './components/without-redux/StyledButton';
import BankAccount from './components/without-redux/BankAccount';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      {/* <HelloWorld company="Heroway" />
        <HelloWorld company="Eduzz" age={2015}/>

        <Parent company="Heroway">
          <h2>Children</h2>
          </Parent> */}
          {/*<SimpleHeroesList />*/}

         {/* <TodoList /> */}
         {/*< StyledButton backgroundColor={"red"} text={"Clique aqui..."} />*/}
          < BankAccount initialValue={100} />
      </div>
    </div>
  );
}

export default App;
