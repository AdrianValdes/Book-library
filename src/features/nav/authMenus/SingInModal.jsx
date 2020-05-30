import React from 'react';

import { Modal, Form, Button, Header } from 'semantic-ui-react';

const SingInModal = () => {
  return (
    <div className="App">
      <Modal as={Form} trigger={<Button>Sign Modal</Button>} size="small">
        <Header content="Sing in to BookLibrary" />
        <Modal.Content>
          <Form.Input fluid name="email" label="Email" placeholder="Email" />
          <Form.Input
            fluid
            name="password"
            label="Password"
            placeholder="Password"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red">
            No
          </Button>
          <Button type="submit" color="green">
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default SingInModal;
