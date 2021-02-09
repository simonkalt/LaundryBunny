import React, { Component  } from "react";
import { render } from 'react-dom'
import Swal from 'sweetalert2'
import validator from 'validator'


var [emailError, setEmailError] = ""
export default class Login extends Component {
    render() {
              return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={function(e) { validator.isEmail("lsjkdlfj") ? emailError =  'Enter valid Email!': emailError = 'Valid Email :)'}} /> 
                    <span id="emailError">{emailError}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={function() { Swal.fire("Validation","Authentication occurs here!")}}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}