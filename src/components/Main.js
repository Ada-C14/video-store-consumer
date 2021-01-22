import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import Library from './Library';
import Customers from './Customers';
import Home from './Home';


const Main = (props) => {

  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      {/* <Route exact path='/search' component={Search}></Route> */}
      <Route
        exact path='/search'
        render={() => (
          <Search setDisplayMessage={props.setDisplayMessage} />
        )}
      />
      <Route
        exact path='/library'
        render={() => (
          <Library videoCallback={props.videoCallback} setDisplayMessage={props.setDisplayMessage} video={props.video} />
        )}
      />
      <Route
        exact path='/customers'
        render={() => (
          <Customers customerCallback={props.customerCallback} setDisplayMessage={props.setDisplayMessage} customer={props.customer} />
        )}
      />
    </Switch>
  )

};

export default Main;
