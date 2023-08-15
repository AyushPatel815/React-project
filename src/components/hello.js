import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //     <h1>Hello Ayush</h1>
    //     </div>
    // )


    return React.createElement(
        'div', 
        {id: 'Hello', className: 'Dummy'}, 
        React.createElement('h1', null, 'Hello Ayush'))

}

export default Hello