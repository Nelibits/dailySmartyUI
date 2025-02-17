import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recent-posts';

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('trying to handle submit for query', query);
    this.props.history.push('/results');
}


  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}