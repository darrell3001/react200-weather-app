import React from "react";
import Header from "./components/header";
import Search from "./components/search";
import City from "./components/city";
import History from "./components/history";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <div id="column-wrapper">
          <City />
          <History />
        </div>
      </div>
    );
  }
}
