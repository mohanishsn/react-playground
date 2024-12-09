import React from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";

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
        <h2>Logged in user: <UserContext.Consumer>
          {(data) => <span>{data.userName}</span>}
          </UserContext.Consumer> </h2>
        <UserClass name={'Maulee'} location={'Vadodara'} />
      </div>
    )
  }
}

export default About