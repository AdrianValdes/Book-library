import React, { useState } from 'react';
import { Button, Form, Container, TextArea } from 'semantic-ui-react';
import { auth, db } from '../../../configs/firebaseConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [bio, setBio] = useState('');
  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          return db.collection('users').doc(cred.user.uid).set({
            bio: bio,
          });
        })
        .then(() => {})
        .catch((err) => console.error(err));
    } else {
      alert('Password do not match');
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <Form>
          <TextArea
            placeholder="Tell us more about you"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button positive onClick={handleSignUp} content="Submit" />
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;
