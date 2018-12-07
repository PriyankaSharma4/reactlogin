/***
- Registration Page UI
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { reactLocalStorage as ls } from 'reactjs-localstorage';

// import './styles.css';

import { loginuser } from '../../actions/login';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
            email: '',
            password: '',
            formError: false,
            field_error: false
          };

          if(ls.get('token'))
          {
            window.location.href = '/profile'
          }

     // this.handleChange = this.handleChange.bind(this);
  }



    componentWillReceiveProps() {


    setTimeout( () => { //wait for next ticker to execute

      if(this.props.login.response !== null){
      // console.log("props"+this.props.login.response.token );
        const  token= this.props.login.response.token ;
        const id = this.props.login.response.data
           
        if( token){
          localStorage.setItem('token' , token);

          ls.set('token', token);
        // console.log("props"+ ls.get('token'));
          ls.set('id', this.props.login.response.data.id); //save token to local storage
          window.location.href = '/profile'
        }
      }

    });
    
  }

  // handleChange(event) {
  

  // }

   /* hadle form events */
    handlechange = ( event) => {
   
      var name = event.target.name
      var value = event.target.value
        this.setState({
          [name]: value

        });

    }


    login = () => {

      const { email, password} = this.state;
      let field_error = false;

   

      if( email === '' || password === '' ) { //validate required fields
        this.setState({ field_error: true });
        field_error = true;
        this.setState({
          formError: true,
          //formMessage: 'Check and remove field errors.'
        });
        console.log('Fix the errors below.', 'error');
      }

      if( !field_error ) {

        let params = {
          email: email,
          password: password
        };
      
        this.props.loginuser(params);     

      }
    }



  render() {
    return (
      <div>
     
      <h1> Login </h1>
      <div>
        <Link className=" ui button green" to="/register">Register</Link>
        <Link className=" ui button green" to="/">Home</Link>
      </div>
        <p>
         {this.props.login.error}
        </p>
       <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Last Name' name='email' type='email' value={this.state.email} onChange={this.handlechange} />
        </Form.Field>
        <Form.Field>
          <label>PASSWORD</label>
          <input placeholder='Last Name' name='password' type='password' value={this.state.password} onChange={this.handlechange} />
        </Form.Field>
        <Button type='submit' onClick={ this.login }>Submit</Button>
      </Form>
      
      </div>
  
    );
  }
}

/* Redux */
const mapStateToProps = (store) => {
    return {
      login: store.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loginuser : (params) => dispatch( loginuser(params) )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


