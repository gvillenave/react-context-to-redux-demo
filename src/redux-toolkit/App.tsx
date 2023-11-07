import { Provider } from 'react-redux';
import { store } from './stores/store';
import { MainLayout } from './components/MainLayout';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
