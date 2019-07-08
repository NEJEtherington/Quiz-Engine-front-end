import React from "react";

class LoginBox extends React.Component {
  state = {
    userNameInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="textInput"
          onChange={this.handleInput}
          type="text"
          placeholder="Enter an email address"
          require="true"
          size="30"
        />
        <button disabled={!this.state.userNameInput}>Sign In</button>
        {/* disabled property prevents user from clicking without having entered anything */}
        {this.props.loggedInUser && <button>Sign Out</button>}
        {/* conditionally render sign out button only if user is signed in */}
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    // Apollo gql query to check if user exists in the database
    // If so set state at App level by loginUser function passed down in props and get successful login message
  };

  handleInput = event => {
    this.setState({ userNameInput: event.target.value });
  };
}

export default LoginBox;
