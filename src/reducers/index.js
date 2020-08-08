const initialState = {
  books: [],
  loading: true,
  totalOrdered: 0,
  cartItems: [],
};

const updateCart = (state, action, amount) => {
  const bookId = action.payload;
  const book = state.books.find((item) => item.id === bookId);
  const bookInCart = state.cartItems.find((item) => item.id === bookId);

  if (bookInCart) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === bookId) {
        item.count += amount;
        item.total += book.price * amount;
        state.totalOrdered += book.price * item.count;
      }
      return item;
    });
    if (bookInCart.count === 0) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== bookId),
      };
    }
    return {
      ...state,
      cartItems,
    };
  } else {
    const newItem = {
      id: book.id,
      name: book.title,
      total: book.price,
      count: 1,
    };
    return {
      ...state,
      cartItems: state.cartItems.concat(newItem),
    };
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case "BOOKS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "BOOK_REMOVED_IN_CART":
      return updateCart(state, action, -1);
    case "BOOK_ADDED_IN_CART":
      return updateCart(state, action, 1);
    case "BOOK_DELETED_IN_CART":
      console.log(state.cartItems[0].count);
      state.cartItems[0].count = 0;
      return updateCart(state, action, 0);
    default:
      return state;
  }
};

export default reducer;
