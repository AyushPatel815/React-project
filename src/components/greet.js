import React from 'react'

// function Greet() {
//   return <h1>Hello Ayush</h1>
// }

const Greet = (props) => {
  const {name,heroName, children} = props
  console.log()
  return(
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
      {children}
    </div>
      
   
  )


  // return (
  //   <div>
  //     <h1>
  //       Hello {props.name} a.k.a {props.heroName}
  //     </h1>
  //     {props.children}
  //   </div>
  // )
}

export default Greet