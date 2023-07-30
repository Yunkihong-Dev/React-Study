import './App.css';
import User from './components';
import UserStoreProvider from './context/user';

function App() {
  return (
    <UserStoreProvider>
    <div className="App">
      <User/>
    </div>
    </UserStoreProvider>
  );
}

export default App;
