import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addToWatched} from 'store/actions/watched';
import {addMovie} from 'store/actions/movie';

const defaultMovies = [
  {"Title":"Dunkirk","Year":"2017","Rated":"PG-13","Released":"21 Jul 2017","Runtime":"106 min","Genre":"Action, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong","Plot":"Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.","Language":"English, French, German","Country":"Netherlands, UK, France, USA","Awards":"Won 3 Oscars. Another 51 wins & 197 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.0","imdbVotes":"387,374","imdbID":"tt5013056","Type":"movie","DVD":"19 Dec 2017","BoxOffice":"$188,042,171","Production":"Warner Bros. Pictures","Website":"http://www.dunkirkmovie.com","Response":"True"},
  {"Title":"Batman v Superman: Dawn of Justice","Year":"2016","Rated":"PG-13","Released":"25 Mar 2016","Runtime":"151 min","Genre":"Action, Adventure, Fantasy","Director":"Zack Snyder","Writer":"Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)","Actors":"Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg","Plot":"Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.","Language":"English","Country":"USA","Awards":"14 wins & 30 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"},{"Source":"Rotten Tomatoes","Value":"27%"},{"Source":"Metacritic","Value":"44/100"}],"Metascore":"44","imdbRating":"6.6","imdbVotes":"531,678","imdbID":"tt2975590","Type":"movie","DVD":"19 Jul 2016","BoxOffice":"$293,792,936","Production":"Warner Bros. Pictures","Website":"http://www.facebook.com/batmanvsuperman","Response":"True"},
  {"Title":"Edge of Tomorrow","Year":"2014","Rated":"PG-13","Released":"06 Jun 2014","Runtime":"113 min","Genre":"Action, Adventure, Sci-Fi","Director":"Doug Liman","Writer":"Christopher McQuarrie (screenplay by), Jez Butterworth (screenplay by), John-Henry Butterworth (screenplay by), Hiroshi Sakurazaka (based on the novel \"All You Need Is Kill\" by)","Actors":"Tom Cruise, Emily Blunt, Brendan Gleeson, Bill Paxton","Plot":"A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.","Language":"English","Country":"USA, Canada","Awards":"11 wins & 37 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"7.9","imdbVotes":"512,020","imdbID":"tt1631867","Type":"movie","DVD":"07 Oct 2014","BoxOffice":"$77,121,429","Production":"Warner Bros. Pictures","Website":"http://www.edgeoftomorrowmovie.com","Response":"True"},
  {"Title":"Furious 7","Year":"2015","Rated":"PG-13","Released":"03 Apr 2015","Runtime":"137 min","Genre":"Action, Crime, Thriller","Director":"James Wan","Writer":"Chris Morgan, Gary Scott Thompson (characters)","Actors":"Vin Diesel, Paul Walker, Jason Statham, Michelle Rodriguez","Plot":"Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.","Language":"English","Country":"Japan, USA","Awards":"Nominated for 1 Golden Globe. Another 28 wins & 31 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.2","imdbVotes":"320,169","imdbID":"tt2820852","Type":"movie","DVD":"15 Sep 2015","BoxOffice":"$316,986,481","Production":"Universal Pictures","Website":"http://www.furious7.com/","Response":"True"},
  {"Title":"Olympus Has Fallen","Year":"2013","Rated":"R","Released":"22 Mar 2013","Runtime":"119 min","Genre":"Action, Thriller","Director":"Antoine Fuqua","Writer":"Creighton Rothenberger, Katrin Benedikt","Actors":"Gerard Butler, Aaron Eckhart, Finley Jacobsen, Dylan McDermott","Plot":"Disgraced Secret Service agent (and former presidential guard) Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack; using his inside knowledge, Banning works with national security to rescue the President from his kidnappers.","Language":"English, Korean","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNTU0NmY4MWYtNzRlMS00MDkxLWJkODYtOTM3NGI2ZDc1NTJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"48%"},{"Source":"Metacritic","Value":"41/100"}],"Metascore":"41","imdbRating":"6.5","imdbVotes":"225,731","imdbID":"tt2302755","Type":"movie","DVD":"13 Aug 2013","BoxOffice":"$98,600,000","Production":"FilmDistrict","Website":"http://olympusmovie.com","Response":"True"},
  {"Title":"TPB AFK: The Pirate Bay Away from Keyboard","Year":"2013","Rated":"NOT RATED","Released":"08 Feb 2013","Runtime":"85 min","Genre":"Documentary","Director":"Simon Klose","Writer":"N/A","Actors":"Gottfrid Svartholm, Peter Sunde, Fredrik Neij, Peter Althin","Plot":"An intellectual freedoms documentary based around the interpersonal triumphs, and defeats of the three main characters against the largest industry in the known universe. The media industry.","Language":"Swedish, English","Country":"Sweden, Denmark, Norway, UK, Netherlands, Germany","Awards":"N/A","Poster":"https://ia.media-imdb.com/images/M/MV5BMjU4MzY4ODg0MV5BMl5BanBnXkFtZTcwNTE2MjY5OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"12,790","imdbID":"tt2608732","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"FilmBuff","Website":"N/A","Response":"True"}
];

class Movie extends Component{
	constructor(props) {
    super(props);

    this.state = {
      data: null,
      isWatched: false
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.movie._rating = nextProps.movie.Ratings.filter(item => item.Source !== 'Metacritic').map(item => {
      if(item.Source === 'Internet Movie Database')
        return {
          source: 'IMDb', 
          rating: parseFloat(item.Value.split('/')[0], 10)
        }
      else
        return {
          source: 'Rotten Tomatoes', 
          rating: item.Value.split('%')[0] / 10
        }
    });

    this.setState({
      data: nextProps.movie,
      isWatched: Object.keys(nextProps.watched).indexOf(nextProps.movie.imdbID) > -1
    });
  }

  render() {
    return(
      <div id="movie" className="container p-0 m-0">
        {
          this.state.data !== null &&
            <div className="movie-holder">
              <div className="movie-holder--background"></div>
              <div className="movie-holder--poster">
                <img className="img-thumbnail" src={this.state.data.Poster} alt={this.state.data.Title} onClick={()=>{this.props._addToWatched(this.state.data)}} />
                <div className="movie-holder--poster-intro">
                  <h1>{this.state.data.Title}</h1>
                  <p className="releaseDate">{this.state.data.Released}</p>
                  <ul className="list-inline rating">
                  {
                    this.state.data._rating.map(item => {
                      return (
                        <li className="list-inline-item mr-5" key={item.source}>
                          <b>{item.rating}</b>
                          <i>{item.source}</i>
                        </li>
                      )
                    })
                  }
                  {
                    this.state.isWatched &&
                    <li className="list-inline-item mr-5 pt-3 is-watched" key="watched_key">
                      <div className="btn btn-success">Watched</div>
                    </li>
                  }
                  </ul>
                </div>
                <div className="movie-holder--description mt-5">
                  <h3>Description</h3>
                  <p>{this.state.data.Plot}</p>
                </div>           
              </div>
            </div>
        }
        {
          this.state.data === null &&
          <div id="watched" className="container pt-5">
            <h3>Popular Movies</h3>
            <div className="watched-holder mt-4">
              <ul className="list-inline watched-list">
              {
                defaultMovies.map(item => {
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
          </div>
        }
        <br />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    _addToWatched: addToWatched,
    _addMovie: addMovie
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
    watched: state.watched
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);