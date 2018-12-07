/***
- Registration Page UI
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { reactLocalStorage as ls } from 'reactjs-localstorage';


// import './styles.css';


import { getUserProfile, updateUserProfile} from '../../actions/profile';



class Edit extends Component {

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



    if(!ls.get('token'))
    {
      window.location.href = '/login'
    }

  }

  // handleChange(event) {
  

  // }

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
          this.setState({ username: this.props.profile.response.name,
                        email: this.props.profile.response.email
                      });
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
         const id = ls.get('id');
        let params = {
          name: username,       
          role: role,
          email: email,
          password: password,
          confirm_password: confirm_password,
          id: id
        };
       

        this.props.updateuserprofile(params);     

      }
    }



  render() {

    return (
      <div>
      <h1> Edit </h1>
      {!ls.get('token') && <div>
        <Link className=" ui button green" to="/login">Login</Link>
        <Link className=" ui button green" to="/">Home</Link> 
      </div>}
      {ls.get('token') && <div>
        <Link className=" ui button green" to="/profile">Profile</Link>
        <Link className=" ui button green" to="/">Home</Link> 
      </div>}
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
      profile: store.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getuserprofile : (params) => dispatch( getUserProfile(params) ),
      updateuserprofile : (params) => dispatch( updateUserProfile(params) ),
      
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)


