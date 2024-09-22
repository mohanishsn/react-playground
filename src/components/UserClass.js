import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
    // console.log('child constructor')
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'VYZ',
        avatar_url: ''
      }
    }
	}

  async componentDidMount() {
    // console.log('child componentDidMount');
    const data = await fetch("https://api.github.com/users/mohanishsn")
    const jsonData = await data.json();
    console.log('data==>', jsonData);
    this.setState({
      userInfo: jsonData
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

	render() {
    const {name, location, avatar_url} = this.state.userInfo
		return (
			<div className="user-card">
        <img src={avatar_url} alt="Profile Photo" />
				<h2>{name}</h2>
				<h2>{location}</h2>
			</div>
		);
	}
}

export default UserClass;
