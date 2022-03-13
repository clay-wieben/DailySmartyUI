import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";
import { connect } from "react-redux";

class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log("trying to handle for query", query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default Home;
