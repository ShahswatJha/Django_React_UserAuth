import React, { Component} from 'react';

class Message extends Component
{
    state = {
        message: [],
        errorMessage: ''
    }
    
    Show_mssgs = () => {

        fetch('http://127.0.0.1:8000/api/message/', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${this.props.token} `
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then( data => data.json())
        .then(
            data => {
                this.setState({ message: data });
            }
        ).catch( error => {
            this.setState({errorMessage:error.message});
        } )


    }

    render()
    {
        return (
            <div>
                <h2> Login to see the Message </h2>
                {this.state.message.map(
                    mssg => {
                        return <h4 key={mssg.id}> { mssg.mssg } </h4>
                    }
                )}
            
             <button onClick={this.Show_mssgs}> SHOW </button>

            </div>

        );
    }

}
export default Message;
