/***
- Defines Layout for the app
- Load Components for Header, Content, Footer
- Defines app routes
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { BASE_URL } from '../config';

// import Header from './partials/Header';
// import Footer from './partials/Footer';


// import Home from './pages/Home';

// import Login from './pages/Login';

import Register from './Register';
import Login from './Login';
import HomepageLayout from './Home';
import Profile from './Profile';
import Edit from './Edit';




import { 
    Sidebar,
    Segment,
    Icon
} from 'semantic-ui-react';


// import {
//     getCurrentUser,
//     // getUser,
//     // getNotification,
//     saveToken
// } from '../actions/profile';

// import _ from 'lodash';

import { reactLocalStorage as ls } from 'reactjs-localstorage';
 



const jwt_token = ls.get('token');


// const PrivateRoute = ({ component: Component, profile, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       ( profile && profile !== null) ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const NoMatch = () => {
//     return(
//         <Redirect
//           to={{
//             pathname: "/"
//           }}
//         />
//     )
// }


class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        };

        this.routerRef = React.createRef();
    }

    

    /*Force close sidebar*/
    
    

   
    componentWillMount(){
        
        
        
    }

    componentDidMount() {
        // this.getFirebaseToken();
    }

  

   


    navigateTo(path){

        this.routerRef.current.history.push( path )

    }

    handleRouteChange(){
        // setTimeout(function() {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: "smooth"
        //     });
        // }, 1000);
    }

    render(){
        return(
            <Router>

                <Switch>
                    <Route exact path="/" component={HomepageLayout} /> 
                    <Route  path="/login" component={Login} /> 
                    {ls.get('token') && <Route  path="/profile" component={Profile} />}
                    {ls.get('token') && <Route  path="/edit" component={Edit} />}
                    <Route  path="/register" component={Register} />              
                </Switch>
            </Router>

             )}

    }


/*** Redux */
const mapStateToProps = (store) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)

