import React from 'react';
//import { Button, Form, Input, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { signIn } from '../../../redux/actions/authActions';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/startPage" />;
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError} </p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
/* 
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <Container>
        <Form>
          <Input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="passsword"
            value={passsword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button positive onClick={handleSignIn}>
            Submit
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}; */
