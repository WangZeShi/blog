import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefalutLayout/DefaultLayout'
import LoginUser from './layouts/LoginUser/LoginUser'
import ShowArticle from './routes/Article/ShowArticle';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LoginUser} exact/>
                        <Route path="/home" component={DefaultLayout}/>
                        <Route path="/index" component={ShowArticle} />
                        {/*<Route path='*' component={LoginUser} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}