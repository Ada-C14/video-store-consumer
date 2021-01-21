import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import Library from './Library';
import Customers from './Customers';
import Home from './Home';
import './Main.css';

const Main = (props) => {

  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/search' component={Search}></Route>
      {/* <Route exact path='/library' component={Library}></Route> */}
      <Route
        exact path='/library'
        render={() => (
          <Library videoCallback={props.videoCallback} />
        )}
      />
      {/* <Route exact path='/customers' component={Customers}></Route> */}
      <Route
        exact path='/customers'
        render={() => (
          <Customers customerCallback={props.customerCallback} />
        )}
      />
    </Switch>
  )

};

export default Main;
