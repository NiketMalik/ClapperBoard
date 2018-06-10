import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addMovie} from 'store/actions/movie';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: []
		}
	}

	handleSearchInput(event) {
		if(event.target.value === '') {
			this.setState({
				searchResults: []
			});
			return;
		}

		fetch('http://www.omdbapi.com/?s=' + event.target.value + '&apikey=aabca0d')
		.then((response) => response.json())
		.then((res) => {
			if(res.Response === 'True')
				this.setState({
					searchResults: res.Search
				});
		})
		.catch(err => {
			console.error(err);
			alert("Something went wrong.");
		});
	}

	handleMovieSelect(id) {
		this.setState({
			searchResults: []
		});

		fetch('http://www.omdbapi.com/?i=' + id + '&apikey=aabca0d')
		.then((response) => response.json())
		.then((res) => {
			this.props._addMovie(res)
		})
		.catch(err => {
			console.error(err);
			alert("Something went wrong.");
		});
	}

  onSubmit(event) {
    event.preventDefault();
    if(this.state.searchResults.length > 0)
      this.handleMovieSelect(this.state.searchResults[0].imdbID);
  }

  render() {
    return(
      <div id="header">
      	<nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
				  <a className="navbar-brand" href="/">
				  	<img src="/static/media/logo.svg" alt="Clapper Board" />
				  	<span>Clapper Board</span>
				  </a>
				  
          <div className="navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto"></ul>
				    
				    <form className="navbar-search-form form-inline my-2 my-lg-0" onSubmit={this.onSubmit.bind(this)}>
				      <input className="form-control mr-sm-2" type="search" placeholder="Search a movie..." aria-label="Search" onChange={this.handleSearchInput.bind(this)} />
							{
								this.state.searchResults.length > 0 &&
								<ul className="navbar-search">
									{
										this.state.searchResults.map(item => {
											return(
												<li key={'search-' + item.imdbID} onClick={() => this.handleMovieSelect(item.imdbID)}>{item.Title}</li>
											)
										})
									}
								</ul>
							}
						</form>

				  </div>
				</nav>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _addMovie: addMovie
  }, dispatch);
}

export default connect(null,mapDispatchToProps)(Header);