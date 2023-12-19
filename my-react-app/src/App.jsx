import './App.css';
import Provider from './components/Provider';
import Table from './components/table/Table';
import globalStyles from './styles/globalStyles.module.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className={globalStyles.globalTextBold}>
       <Provider>
        <Header></Header>
      <Table />
    </Provider>
    </div>
   
  );
}

export default App;
