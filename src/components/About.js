import React from "react"
import UserClass from "./UserClass"

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <User name={'Mohanish FN'} />
//       <UserClass name={'Mohanish CL'} location={'Vadodara CL'} />
//     </div>
//   )
// }

// export default About

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor');
  }

  componentDidMount() {
    // console.log('parent componentDidMount');
  }

  render() {
    console.log('parent render');
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={'Maulee'} location={'Vadodara'} />
      </div>
    )
  }
}

export default About