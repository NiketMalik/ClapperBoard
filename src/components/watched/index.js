import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addMovie} from 'store/actions/movie';

function parseWatched(data) {
  let keys = Object.keys(data);
  let _list = [];
  
  for (let i = 0, len = keys.length; i < len; i++) 
    _list[i] = data[keys[i]];

  return _list;
}

class Watched extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: parseWatched(this.props.watched)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      watched: parseWatched(nextProps.watched)
    });
  }
  
  render() {
    return(
      <div id="watched" className="bt container py-5 my-5">
        <h3>My Watched Movies</h3>
        {
          this.state.watched.length === 0 &&
          <p>Click on a poster to add to your watched list</p>
        }
        {
          this.state.watched.length > 0 &&
          <div className="watched-holder mt-4">
            <ul className="list-inline watched-list">
              {
                this.state.watched.map(item => {
                  return(
                    <li className="list-inline-item watched-list--item" key={item.imdbID} onClick={() => this.props._addMovie(item)}>
                      <img src={item.Poster} alt={item.Title} />
                      <b>{item.Title} ({item.Year})</b>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _addMovie: addMovie
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    watched: state.watched
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Watched);