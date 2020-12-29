import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'

function Signup() {
    return (
        <center>
            <div className="card cardLogin">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Name:
                    </div>

                        <div className="col-sm input-group mb-3">
                            <input id="username"  placeholder="Enter your username"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            Name:
                    </div>
                    Check...
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            Check:
                    </div>

                        <div className="col-sm input-group mb-3">
                            <input id="password" type="password" placeholder="Enter your password"></input>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                        <a href="#">Already have an account? Login here</a>
                    </div>

                </div>
            </div>
        </center>
    );
}

export default Signup;
