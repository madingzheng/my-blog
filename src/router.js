import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Index from "./layouts/index";
import About from "./layouts/about";
import Archive from "./layouts/archive";
import Collect from "./layouts/collect";
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Index}  exact />
                        <Route path="/about" component={About} exact/>
                        <Route path="/archive" component={Archive} exact/>
                        <Route path="/collect" component={Collect} exact/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}