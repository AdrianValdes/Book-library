import React, { useState } from 'react';
import { Form as FinalForm, Field as FieldFinal } from 'react-final-form';

import BooksResponse from '../booksResponse/BooksResponse';
import { Input, Button, Container } from 'semantic-ui-react';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

const SearchForm = () => {
  const [bookTitles, setBookTitle] = useState({});

  const onSearch = async ({ bookTitle }) => {
    let searchedTitle = '';

    if (bookTitle) {
      searchedTitle = `intitle:${bookTitle}`;
    }

    try {
      let response = await fetch(
        `${baseURL}${searchedTitle}&key=${KEY}&maxResults=12`
      );
      let result = await response.json();
      setBookTitle(result);
    } catch (error) {
      alert(`There has been an error: ${error}`);
    }
  };

  return (
    <div>
      <Container>
        <h2>Search your book</h2>
        <FinalForm
          onSubmit={onSearch}
          render={({ handleSubmit, values, form, pristine, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <FieldFinal
                  name="bookTitle"
                  component={Input}
                  type="text"
                  placeholder="Book Title"
                />
              </div>

              <Button positive type="submit" disabled={pristine || submitting}>
                Submit
              </Button>
              <Button negative type="button" onClick={form.reset}>
                Reset
              </Button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>

              <BooksResponse books={bookTitles} />
            </form>
          )}
        ></FinalForm>
      </Container>
    </div>
  );
};

export default SearchForm;
