import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
const aPI = 'AIzaSyDEVvgG2n21JbTBC_EObqDxHP6EmuY9ndw';
const iD = 'UCkDSAQ_5-yx5hmuvUcsJL7A';
const results = 10;
let url = `https://www.googleapis.com/youtube/v3/search?key=${aPI}&channelId=${iD}&part=snippet,id&order=date&maxResults=${results}`

class MrSundayYoutube extends Component {
  constructor(props){
    super(props);
    this.state = {
      youTubeVideoID: [],
      youTubeTitle: [],
    };
  }
componentDidMount(){
  this.loadVideos()
}

  loadVideos(){
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      const youTubeTitle = responseJson.items.map(object => object.id.title);
      this.setState({youTubeTitle});
      const youTubeVideoID = responseJson.items.map(object => "https://www.youtube.com/embed/"+object.id.videoId);
      this.setState({youTubeVideoID});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <div>
      <Typography variant="h5" gutterBottom align="center">
        Mr. Sunday
      </Typography>
      <div >
          {
            this.state.youTubeVideoID.map((youTubeLink, i) => {
              console.log(youTubeLink);
              let youTubeIFrame =

              <div key={i} className="iFrame" style={{ marginBottom: "1rem", position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 25, height: 0 }}>
                <iframe key={i} title={youTubeLink} style={{ position: "absolute",top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }} src={youTubeLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              return youTubeIFrame;
            })
          }
          {this.youTubeIFrame}
      </div>
      </div>
    );
  }
}
export default MrSundayYoutube;
