import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ColorPicker from './components/ColorPicker';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/colorpicker' component={ColorPicker} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
