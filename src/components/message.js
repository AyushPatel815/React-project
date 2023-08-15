import React, {Component} from "react";


class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Enjoy your life!!'
        })
    }

    render() {
        return (
            <div>
            <h1>
                 {this.state.message} a.k.a Paycomrades
            
            </h1>
            <button onClick={() => this.changeMessage()}>Button</button>
            </div>
        )
    }


}

export default Message