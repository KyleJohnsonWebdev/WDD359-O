import React, { Component } from 'react';

//building the api url string
const aPI = 'AIzaSyDEVvgG2n21JbTBC_EObqDxHP6EmuY9ndw';
const iD = 'UC2-BeLxzUBSs0uSrmzWhJuQ';
const results = 5;
let url = `https://www.googleapis.com/youtube/v3/search?key=${aPI}&channelId=${iD}&part=snippet,id&order=date&maxResults=${results}`

//youtube class
class Youtube extends Component {
//still learning hooks so I used props
  constructor(props){
    super(props);
    this.state = {
      youTubeVideoID: []
    };
    this.wasClicked = this.wasClicked.bind(this);
  }
  //when the button is clicked it fetches the data from the youtube api
  wasClicked(){
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
        <button onClick={this.wasClicked}>Click on this to load movie trailers</button>
          {
            this.state.youTubeVideoID.map((youTubeLink, i) => {
              console.log(youTubeLink);
              let youTubeIFrame =
              <div key={i} className="iFrame">
                <h2>{this.state.youTubeVideoID[i]}</h2>
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
