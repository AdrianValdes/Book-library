import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <div className="master">
      <img src="/assets/logo.png" alt="logo" style={{ height: '50px' }} />

      <Container className="homePage">
        <Header
          content="Book Library"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        ></Header>
        <Header
          as="h2"
          content="Find and share your books"
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '0.5em',
          }}
        />
        <Button
          inverted
          basic
          size="huge"
          onClick={() => {
            history.push('startPage');
          }}
        >
          {' '}
          Get started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </div>
  );
};
export default HomePage;
