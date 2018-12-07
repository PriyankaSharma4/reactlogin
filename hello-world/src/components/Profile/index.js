/***
- Registration Page UI
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { reactLocalStorage as ls } from 'reactjs-localstorage';

// import './styles.css';

import { getUserProfile, deleteUserProfile } from '../../actions/profile';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
            provider: '',
            name: '',
            email: '',
            role:'',
            formError: false,
            field_error: false
          };

          if(!ls.get('token'))
          {
            window.location.href = '/login'
          }
         
          

     // this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
   const id = ls.get('id');
      let params = {
        id: id
      };
      
      this.props.getuserprofile(params);
         
  }


    componentWillReceiveProps() {
        setTimeout( () => {
       
       if(this.props.profile.response !== null && this.props.profile.response !== undefined)
       {
          this.setState({ provider: this.props.profile.response.provider,
                        email: this.props.profile.response.email,
                        name: this.props.profile.response.name,
                        role: this.props.profile.response.role
                      });
       }

     });
      
      
    }

 logout = () => {localStorage.removeItem('token'); 
                  localStorage.removeItem('id');
                  window.location.href = '/login';}


   deleteuser = () => {
    const id = ls.get('id');
      let params = {
        id: id
      };
      console.log(params)
      localStorage.removeItem('token'); 
      localStorage.removeItem('id');
      this.props.deleteuserprofile(params);
      window.location.href = '/register';
   }


  render() {
    return (
      <div>
  <h1>Profile Info</h1>
      <div className="container" >
  <div className="row panel">
    <div className="col-md-4 bg_blur ">
       
    </div>
        <div className="col-md-8  col-xs-12">
           <div className="header">
                <h1>{this.state.name}</h1>
                <h4>{this.state.role}</h4>
                <span>Provider: {this.state.provider}</span>
           </div>
        </div>
    </div>   
    
  <div className="row nav">    
        <div className="col-md-4"></div>
        <div className="col-md-8 col-xs-12">
            <div className="col-md-3 col-xs-3 well"><Button type='submit' onClick={this.deleteuser}  >Delete</Button></div>
            <div className="col-md-3 col-xs-3 well"><Button  as='a' href='/edit'>Edit</Button></div>
            <div className="col-md-3 col-xs-3 well"><Button type='submit' onClick={this.logout} >Logout</Button></div>
            <div className="col-md-3 col-xs-3 well"><Button as='a' href='/'>Home</Button></div>
        </div>
    </div>
</div>
</div>
  
    );
  }
}

/* Redux */
const mapStateToProps = (store) => {
    return {
      profile: store.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getuserprofile : (params) => dispatch( getUserProfile(params) ),
      deleteuserprofile : (params) => dispatch( deleteUserProfile(params) )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)


