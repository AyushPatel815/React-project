import React, {Component} from "react";


class Welcome extends Component {
    render() {
        const {name,heroName, children} = this.props
        return (
            <h1>
                Welcome {name} a.k.a Paycomrades {heroName}
               
            </h1>
        )
    }


}

export default Welcome