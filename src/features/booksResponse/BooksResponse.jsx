import React from 'react';

function BooksResponse(props) {
  const { items } = props.books;
  console.log(items);
  return (
    <React.Fragment>
      <div>
        {items
          ? items.map(({ id, volumeInfo }) => {
              return <li key={id}>{volumeInfo.title} </li>;
            })
          : 'Waiting for your search'}
      </div>
    </React.Fragment>
  );
}

export default BooksResponse;
