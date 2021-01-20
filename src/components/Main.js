import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import Library from './Library';
import Customers from './Customers';
import Home from './Home';
import Navigation from './Navigation';

const Main = () => {
  //
  //   <Route
  //   path='/dashboard'
  //   render={(props) => (
  //     <Dashboard {...props} isAuthed={true} />
  //   )}
  // />
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route exact path='/library' component={Library}></Route>
      <Route exact path='/customers' component={Customers}></Route>
    </Switch>
  )

};

export default Main;
