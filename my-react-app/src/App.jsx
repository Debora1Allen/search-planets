import './App.css';
import Provider from './components/Provider';
import Table from './components/table/Table';
import globalStyles from './styles/globalStyles.module.css';

function App() {
  return (
    <div className={globalStyles.globalTextBold}>
       <Provider>
      <Table />
    </Provider>
    </div>
   
  );
}

export default App;
