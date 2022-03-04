import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recent-posts";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}

export default Home;
