/***
- Registration Page UI
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { reactLocalStorage as ls } from 'reactjs-localstorage';


// import './styles.css';

import { getUserRegister } from '../../actions/register';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
            username: '',
            role: 'user',
            email: '',
            password: '',
            confirm_password: '',
            formError: false,
            field_error: false,
            formMessage: ''
          };

      if(ls.get('token'))
          {
            window.location.href = '/profile'
          }
  }

  // handleChange(event) {
  

  // }


  
  componentWillReceiveProps() {


    setTimeout( () => { //wait for next ticker to execute

      if(this.props.register.response !== null && this.props.register.response !== undefined){
      // console.log("props"+this.props.login.response.token );
        const  token= this.props.register.response.token ;
        console.log("id "+this.props.register.response.data.data);
        if( token){
          
          ls.set('token', token);
          ls.set('id', this.props.register.response.data.id); //save token to local storage
         window.location.href = '/profile'
        }
      }

    });
      
  }

   /* hadle form events */
    handlechange = ( event) => {
   
      var name = event.target.name
      var value = event.target.value
        this.setState({
          [name]: value

        });

    }


    register = () => {

      const { email, password, confirm_password, role, username } = this.state;
      let field_error = false;

      

      if( password !== confirm_password ) {
        this.setState({
          formError: true,
          formMessage: 'Password does not match the confirm password.'
        });
        // this.setState({ field_error: true,
        //   formMessage: 'Password does not match the confirm password.' });
        field_error = true;
        console.log('Password does not match the confirm password.', 'error');
      }

      if( email === '' || password === '' || confirm_password === '' || username === '') { //validate required fields
        this.setState({ field_error: true });
        field_error = true;
        this.setState({
          formError: true,
          formMessage: 'Field Values are empty.'
        });
        console.log('Fix the errors below.', 'error');
      }

      if( !field_error ) {

        let params = {
          name: username,       
          role: role,
          email: email,
          password: password,
          confirm_password: confirm_password
        };
       

        this.props.getUserRegister(params);     

      }
    }



  render() {
    return (
      <div>
      <h1> Register </h1>
      <div>
        <Link className=" ui button green" to="/login">Login</Link>
        <Link className=" ui button green" to="/">Home</Link>
      </div>
      <p>{this.state.formMessage}</p>
       <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name='username' type='text'  value={this.state.username} onChange={this.handlechange}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Last Name' name='email' type='email' value={this.state.email} onChange={this.handlechange} />
        </Form.Field>
        <Form.Field>
          <label>PASSWORD</label>
          <input placeholder='Last Name' name='password' type='password' value={this.state.password} onChange={this.handlechange} />
        </Form.Field>
         <Form.Field>
          <label>Confirm Password</label>
          <input placeholder='Last Name' name='confirm_password' type='password' value={this.state.confirm_password} onChange={this.handlechange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' onClick={ this.register }>Submit</Button>
      </Form>
      </div>
  
    );
  }
}

/* Redux */
const mapStateToProps = (store) => {
    return {
      register: store.register
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getUserRegister : (params) => dispatch( getUserRegister(params) )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)


