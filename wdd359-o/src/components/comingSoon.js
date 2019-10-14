import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
//building the api url string
const aPI = 'AIzaSyDEVvgG2n21JbTBC_EObqDxHP6EmuY9ndw';
const iD = 'UCF9imwPMSGz4Vq1NiTWCC7g';
const results = 5;
let url = `https://www.googleapis.com/youtube/v3/search?key=${aPI}&channelId=${iD}&part=snippet,id&order=date&maxResults=${results}`


//youtube class
class ComingSoon extends Component {
//still learning hooks so I used props
  constructor(props){
    super(props);
    this.state = {
      items: []
    };

  }
componentDidMount(){
  this.loadVideos()
}
  loadVideos(){
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {


      this.setState(responseJson);
      console.log(responseJson);
    })
    //catch and log any errors
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <div>
        {this.state.items.map(function(item, index){
          return(
            <div key={index}>
              <h2>{item.description}</h2>
            </div>
          )
        }
        )}
      </div>
    );
  }
}
export default ComingSoon;
