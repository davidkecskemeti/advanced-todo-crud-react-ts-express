import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateBook from "./components/CreateBook/CreateBook";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import Header from "./components/Header/Header";
import BooksList from "./components/Book/BookList/BooksList";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </>
  );
};

export default App;
