import './App.css';
import {Header} from './Components/Header.js'
import {Balance} from './Components/Balance.js'
import {IncomeExpenses} from './Components/IncomeExpenses.js'
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className= "container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
