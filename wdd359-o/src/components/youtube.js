import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
//building the api url string
const aPI = 'AIzaSyDEVvgG2n21JbTBC_EObqDxHP6EmuY9ndw';
const iD = 'UC2-BeLxzUBSs0uSrmzWhJuQ';
const results = 10;
let url = `https://www.googleapis.com/youtube/v3/search?key=${aPI}&channelId=${iD}&part=snippet,id&order=date&maxResults=${results}`

//youtube class
class Youtube extends Component {
//still learning hooks so I used props
  constructor(props){
    super(props);
    this.state = {
      youTubeVideoID: []
    };

  }
componentDidMount(){
  this.loadVideos()
}
  loadVideos(){
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      const youTubeVideoID = responseJson.items.map(object => "https://www.youtube.com/embed/"+object.id.videoId);
      this.setState({youTubeVideoID});
    })
    //catch and log any errors
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <div>
        <Typography variant="h3" align="center">New Releases</Typography>
          {
            this.state.youTubeVideoID.map((youTubeLink, i) => {
              console.log(youTubeLink);
              let youTubeIFrame =
              <div key={i} className="iFrame">
                <iframe key={i} title={youTubeLink} width="560" height="315" src={youTubeLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              return youTubeIFrame;
            })
          }
          {this.youTubeIFrame}

      </div>
    );
  }
}
export default Youtube;
