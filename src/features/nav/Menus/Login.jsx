import React, { useState } from 'react';
import { Button, Form, Input, Container } from 'semantic-ui-react';
import { auth } from '../../../configs/firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, passsword)
      .then((user) => console.log(user))
      .catch((err) => console.error(err));
    if (name) {
      var user = auth.currentUser;
      user.updateProfile({
        displayName: name,
      });
    }
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
};

export default Login;
