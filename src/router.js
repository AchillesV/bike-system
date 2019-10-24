import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './router';
import Login from './pages/login';
import Admin from './router';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
class IRouter extends Component{
  render(){
      return(
          <HashRouter>
              <App>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/admin" render={()=>{
                      return(
                          <Admin>
                              <Switch>
                                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                  <Route component={NoMatch}></Route>
                              </Switch>
                          </Admin>
                      );
                  }}></Route>
                  <Route path="/order/detail" component={Login}></Route>
              </App>
          </HashRouter>
      );
  }
}
export default IRouter;
