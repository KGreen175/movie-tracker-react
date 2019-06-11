import React, { Component } from "react";
import "./styles/App.scss";
import Movies from "./components/containers/movies/movies";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;
