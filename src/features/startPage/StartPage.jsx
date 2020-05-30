import React from 'react';
import { connect } from 'react-redux';
import { Segment, Input, Form, Button } from 'semantic-ui-react';

const StartPage = ({ currentUser }) => {
  return (
    <div>
      <h1>This is the starter page</h1>
      <Form>
        <Input placeholder="Title for  collection" />
        <Input placeholder="Content for collection" />
        <Button content="Submit" />
      </Form>
      {currentUser && currentUser ? (
        <p>
          You are logged in as {currentUser.displayName} with this email:{' '}
          {currentUser.email}. And this is your bio:
        </p>
      ) : (
        <p>You are logged out, please sign in to change collections.</p>
      )}
      <Segment></Segment>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(StartPage);
