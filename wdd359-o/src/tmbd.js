import React, { Component } from 'react';
//watched a video how to use jquery for fetching, wanted to try it out
import $ from "jquery"
// my api key for the site
const aPiKey = '4f7293179ec47513f99cf71f6a78671b';
//let url = 'https://api.themoviedb.org/3/' + 'configuration?api_key=' + aPiKey;
class TMBD extends Component {
//still learning hooks so I used props
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.doSearch()
  }

  doSearch(){
    console.log("Searching using movieDB")
    const urlSearchString = "https://api.themoviedb.org/3/search/movie?query=xmen&api_key=" + aPiKey;
    $.ajax({
      url: urlSearchString,
      success: (results) => {
        console.log("fetch was successful")
        console.log(results);
        this.setState(results);


      },
      error: (xhr, status, err) => {
        console.error("fetch did not work")
      }
    })
  }

  render(){
    return(
      <div>
        {this.state.results.map(function(item, index){
          return(
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
            </div>
          )
        }
        )}
      </div>
    );
  }
}
export default TMBD;
