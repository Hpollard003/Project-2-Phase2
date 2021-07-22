import Home from './Pages/Home';
import About from './Pages/About';
import ImgPosts from './Pages/ImgPosts';
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RandomPosts from './components/RandomPosts';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts' component={ImgPosts} />
          <Route exact path='/oldposts' component={RandomPosts} />
          {/* the route below generates an error 404 page when any exact path above is not found */}
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
