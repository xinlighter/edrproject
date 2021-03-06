import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Main from './view/main';
import Item from './view/item'
import LoginPage from './view/loginpage'
import RegisterPage from './view/registerpage'
import Cellphone from './view/cellphone'
import Laptop from './view/laptop'
import Desktop from './view/desktop'
import GamingLaptop from './view/gaminglaptop'
import GamingDesktop from './view/gamingdesktop'
import Business from './view/business'
import HomeOffice from './view/homeoffice'


class App extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(

            <div>
                <Router>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/item" exact component={Item}></Route>
                    <Route path="/loginpage" exact component={LoginPage}></Route>
                    <Route path="/registerpage" exact component={RegisterPage}></Route>
                    <Route path="/category/cellphone" exact component={Cellphone}></Route>
                    <Route path="/category/laptop" exact component={Laptop}></Route>
                    <Route path="/category/desktop" exact component={Desktop}></Route>
                    <Route path="/category/business" exact component={Business}></Route>
                    <Route path="/category/gamingdesktop" exact component={GamingDesktop}></Route>
                    <Route path="/category/gaminglaptop" exact component={GamingLaptop}></Route>
                    <Route path="/category/homeoffice" exact component={HomeOffice}></Route>
                </Router>
            </div>
        )
    }
}

export default App