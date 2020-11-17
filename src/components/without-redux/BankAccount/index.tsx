import React from 'react';

interface IProps {
    initialValue: number;
}

function BankAccount(props: IProps) {
    const [moneyInBankAccount, updateMoneyInBankAccount] = React.useState(props.initialValue);
    const [moneyToDeposit, updateMoneyToDeposit] = React.useState(0);

    function somarDeposito(){
        updateMoneyInBankAccount(moneyInBankAccount + moneyToDeposit);
    }

    return (
        <div>
            <input type="text" placeholder="Depositar valor..."
            onChange={(e) => updateMoneyToDeposit(parseInt(e.target.value))} />
            <button onClick={somarDeposito}>Depositar</button>
            <div>{moneyInBankAccount}</div>
        </div>
    );
}



export default BankAccount;