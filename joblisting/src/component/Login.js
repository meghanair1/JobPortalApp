import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: '',

        }
        
        this.Username = this.Username.bind(this);
        this.Password = this.Password.bind(this);
        
    }
    Username(event) {
        this.setState({ Username: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
       
        fetch('https://divercity-test.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: this.state.Username,
                Password: this.state.Password,



            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status =='OK')
                    alert('Invalid User');

                else
                    this.props.history.push("/JobListing");
            })
    }
    render() {
        
        return (

            <div>
                {

                    <div>
                        <input type="text" placeholder="username"
                            onChange={this.Username} /><br /><br />
                        <input r type="text" placeholder="password"
                            onChange={this.Password} /><br /><br />
                        <button >Login</button>
                    </div>

                }

            </div>
        )

    }
}


export default Login;
