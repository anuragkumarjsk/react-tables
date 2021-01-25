import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ContextComp from './contextapi'


import TopNavBar from './Components/topnav/TopNavBar'
import Dashboard from './Components/dashboard/TabDashboard'
import OrderForm from './Components/topnav/TabForm'
import ShowOrders from './Components/topnav/TabShoworders'

function App() {
  return (
    <div className="App" >
          <ContextComp>
         <BrowserRouter>
         <TopNavBar/>
         <div className="pages">
         <Switch>
         <Route exact path="/" component={Dashboard}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/form" component={OrderForm}></Route>
                <Route path="/orders" component={ShowOrders}></Route>
         </Switch>
         </div>
         </BrowserRouter>
         </ContextComp>
    </div>
  );
}

export default App;
