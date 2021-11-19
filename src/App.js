import Navbar from './assets/Routes/routes';
import Footer from './assets/Components/footer';
import {Provider} from 'react-redux'
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Footer />
    </Provider>
  )
}

export default App;
