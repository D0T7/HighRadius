import Users from './views/Users';
import store from './services/store';
import { Provider } from 'react-redux';
import Header from './views/Header';
import Footer from './views/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Users />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
