import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ImgPosts from './Pages/ImgPosts';
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts' component={ImgPosts} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
