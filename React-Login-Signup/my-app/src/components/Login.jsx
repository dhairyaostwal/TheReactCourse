import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'


function Login() {
    return (
        <center>
            <div className="card cardLogin">
                <div className="container">
                    <div className="row">
                        <h3 className="text-center heading">
                            Welcome to Airprobe ✈️</h3></div>

                    <div className="row">
                        <div className="col-sm">
                            Username:
                    </div>

                        <div className="col-sm input-group mb-3">
                            <input id="username" placeholder="Enter your username"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            Password:
                    </div>

                        <div className="col-sm input-group mb-3">
                            <input id="password" type="password" placeholder="Enter your password"></input>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="text-center">
                            <button className="btn btn-primary" type="submit" onClick={checkCred}>Login</button>
                        </div>
                        <a className="alterSuggestion">New to Airprobe? Sign-up Now</a>
                    </div>

                </div>
            </div>
        </center>
    );
}

function checkCred() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "airprobeUser" && password === 'airprobePass') {
        console.log("Success...");
        alert('Success 🎉');
    }
    else {
        console.log("Failure");
    }

}


export default Login;
export { Login, checkCred };

// username: airprobeUser
// password: airprobePass