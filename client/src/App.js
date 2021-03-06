import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ContextComp from './contextapi'


import TopNavBar from './Components/TopNavBar'
import Dashboard from './Components/TabDashboard'
import OrderForm from './Components/TabForm'
import ShowOrders from './Components/TabShoworders'

function App() {
  return (
    <div className="App" style={ { "height": "100vh" , "width":"100vw"} }>
          <ContextComp>
         <BrowserRouter>
         <TopNavBar/>
         <Switch>
         <Route exact path="/" component={Dashboard}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/form" component={OrderForm}></Route>
                <Route path="/orders" component={ShowOrders}></Route>
         </Switch>
         </BrowserRouter>
         </ContextComp>
    </div>
  );
}

export default App;
