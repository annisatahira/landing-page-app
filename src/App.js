import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
