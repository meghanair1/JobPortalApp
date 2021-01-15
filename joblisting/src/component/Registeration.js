
import React, { Component } from 'react';

class Registeration extends Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: '',
            Name: '',
          
        }
        this.Username = this.Username.bind(this);
        this.Password = this.Password.bind(this);
        this.Name = this.Name.bind(this);
        this.register = this.register.bind(this);
    }
    Username(event) {
        this.setState({ Username: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    Name(event) {
        this.setState({ Name: event.target.value })
    }


    register(event) {
        fetch('https://divercity-test.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                Username: this.state.Username,
                Password: this.state.Password,
                Name: this.state.Name,
            }

        }).then((Response) => Response.json())
            .then((Result) => {
                // console.log(JSON.str);
                if (Result.Status == 'OK') {
                    this.props.history.push("/login");
                }
                else {
                    alert('Un-authenticated User')
                }
            })
    }

    handleSubmit(event) {
        alert('User registered successfully ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>


                {

                    !this.state.isRegister ?

                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="username"
                                    onChange={this.Username} /><br /><br />
                                <input type="text" placeholder="password"
                                    onChange={this.Password} /><br /><br />
                                <input type="text" placeholder="Name"
                                    onChange={this.Name} /><br /><br />
                                <button type="button" onClick={() => this.setState({ isRegister: true })}>Register</button>
                            </form>
                        </div>
                        : null
                }
            </div>
        )
    }
}


export default Registeration;
