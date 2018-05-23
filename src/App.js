import React from 'react';
import './App.css';
import addIcon from './img/add_icon.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      thought : ""
    }
  }

  componentWillMount(){
    (async () => {
    await fetch('https://quotes.rest/qod.json') 
    .then((response) => response.json()).then((response) => {

      this.setState (() => {return {
        thought : response.contents.quotes[0].quote,
        goalContent : 'Learn pro level Skate Boarding',
        daysRemainingForGoal : 10,
        sleepingHours : 8 ,
        sleepingModeStatus : 'OFF',
        wakeUpTime : 15 + ":" + 30,
        gratefulContent : 'GOD IS KIND TO ME',
        journalContent : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        meditationMusicStatus : 'OFF',
        meditationMusicName : 'name of music',
        meditationTimer : 10 + ":" + 10,
        musicStatus : 'ON',
        musicName : 'this is music name'



      }});
      //console.log(response.contents.quotes[0].quote);
      });
    })()}

  render(){
    return (
      <div className = "wrapperDiv">
        <div className = "headerWrapper">
        </div>
        <div className = "thoughtWrapper">
           <p className = "thoughtDiv">'{this.state.thought}'</p>
        </div>
        <div className= "contentWrapper">
          <div className = "contentWrapperOne">
              <div className = "contentWrapperOneI">
                 <h2 className = "contentWrapperOneIDiv">WHAT'S MY GOAL !!</h2>
                 <h3 className = "contentWrapperOneIDiv">{this.state.goalContent}</h3>
                 <h3 className = "contentWrapperOneIDiv"> Days Remaining : {this.state.daysRemainingForGoal}</h3>
              </div>
              <div className = "contentWrapperOneII">
                 <h2 className = "contentWrapperOneIIDiv">HEALTHY SLEEPING MODE</h2>
                 <h3 className = "contentWrapperOneIIDiv">Status : {this.state.sleepingModeStatus}</h3>
                 <h3 className = "contentWrapperOneIIDiv">Sleeping Hours : {this.state.sleepingHours}</h3>
                 <h2 className = "contentWrapperOneIIDiv" style = {{color: 'red'}}>Wake up time : {this.state.wakeUpTime}</h2>

              </div>
              <div className = "contentWrapperOneIII">
                  <h3>Food of the day</h3>
              </div>
          </div>
          <div className = "contentWrapperTwo">
              <div className = "contentWrapperTwoI">
                <h2 className = "contentWrapperOneIIDiv">WHAT ARE YOU GRATEFUL FOR TODAY?</h2>
                <h3 className = "contentWrapperOneIIDiv">'{this.state.gratefulContent}'</h3>
              </div>
              <div className = "contentWrapperTwoII">
                <h2 className = "contentWrapperOneIIDiv">JOURNAL SECTION</h2>
                <h3 className = "contentWrapperOneIIDiv">{this.state.journalContent}</h3>
              </div>
              <div className = "contentWrapperTwoIII">
                <h2 className = "contentWrapperOneIIDiv">TIME FOR MEDITATION</h2>
                <h3 className = "contentWrapperOneIIDiv">Music : {this.state.meditationMusicStatus} ... {this.state.meditationMusicName}</h3>
                <h2 className = "contentWrapperOneIIDiv" style = {{color: 'red'}}> Meditation Timer : {this.state.meditationTimer}</h2>
              </div>
          </div>
          <div className = "contentWrapperThree">
              <div className = "contentWrapperThreeI">
                <h2 className = "contentWrapperOneIIDiv">PLAY THE MUSIC</h2>
                <h3 className = "contentWrapperOneIIDiv">Status : {this.state.musicStatus}</h3>
                <h2 className = "contentWrapperOneIIDiv"> Music : {this.state.musicName}</h2>
              </div>
              <div className = "contentWrapperThreeII">
                <h2 className = "contentWrapperOneIIDiv">PLAY THE VIDEO</h2>
                <h3 className = "contentWrapperOneIIDiv">Click for the video section</h3>
              </div>
              <div className = "contentWrapperThreeIII">
                <div className = "contentWrapperThreeIIIDiv">
                  <img className="imageClass" src={addIcon} />
                  <h2>Add Module</h2>
                </div>
              </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;


