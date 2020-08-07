const booksLoaded = (newBooks) => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: "BOOKS_LOADED",
        payload: newBooks,
      });
    }, 1000);
  };
};

const booksLoading = () => {
  return {
    type: "BOOKS_LOADING",
  };
};
const bookAddedInCart = (id) => {
  return {
    type: "BOOK_ADDED_IN_CART",
    payload: id,
  };
};
const bookRemovedInCart = (id) => {
  return {
    type: "BOOK_REMOVED_IN_CART",
    payload: id,
  };
};
const bookDeletedInCart = (id) => {
  return {
    type: "BOOK_DELETED_IN_CART",
    payload: id,
  };
};

export {
  booksLoaded,
  booksLoading,
  bookAddedInCart,
  bookRemovedInCart,
  bookDeletedInCart,
};
