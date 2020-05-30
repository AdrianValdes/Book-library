import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Segment, Input, Form, Button } from 'semantic-ui-react';
import { db } from '../../configs/firebaseConfig';

const StartPage = ({ currentUser }) => {
  const [collection, setCollection] = useState([]);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionContent, setCollectionContent] = useState('');
  const [userBio, setUserBio] = useState('');

  const getUserBio = useCallback(async () => {
    try {
      if (currentUser) {
        const theUserBio = await db
          .collection('users')
          .doc(currentUser.uid)
          .get()
          .then((doc) => doc.data().bio);

        setUserBio(theUserBio);
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [currentUser]);

  const getCollection = useCallback(async () => {
    try {
      const theCollection = (await db.collection('guides').get()).docs;

      setCollection(theCollection);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    getCollection();
    getUserBio();
  }, [getCollection, getUserBio]);

  const handleAddCollection = (e) => {
    e.preventDefault();

    db.collection('guides')
      .add({
        title: collectionTitle,
        content: collectionContent,
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>This is the starter page</h1>
      <Form>
        <Input
          value={collectionTitle}
          placeholder="Title for  collection"
          onChange={(e) => setCollectionTitle(e.target.value)}
        />
        <Input
          value={collectionContent}
          placeholder="Content for collection"
          onChange={(e) => setCollectionContent(e.target.value)}
        />
        <Button onClick={handleAddCollection} content="Submit" />
      </Form>
      {currentUser && currentUser ? (
        <p>
          You are logged in as {currentUser.displayName} with this email:{' '}
          {currentUser.email}. And this is your bio: {userBio}
        </p>
      ) : (
        <p>You are logged out, please sign in to change collections.</p>
      )}
      <Segment>
        {collection && collection.length > 0
          ? collection.map((doc) => (
              <li key={doc.id}>{`Title is: ${
                doc.data().title
              } and Content is: ${doc.data().content}`}</li>
            ))
          : 'Waiting'}
      </Segment>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(StartPage);
