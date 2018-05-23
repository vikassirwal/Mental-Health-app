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
        thought : response.contents.quotes[0].quote
      }});
      //console.log(response.contents.quotes[0].quote);
      });
    })()}

  render(){
    return (
      <div className = "wrapperDiv">
        <div className = "headerWrapper">
          <p>hello</p>
        </div>
        <div className = "thoughtWrapper">
           <p className = "thoughtDiv">'{this.state.thought}'</p>
        </div>
        <div className= "contentWrapper">
          <div className = "contentWrapperOne">
              <div className = "contentWrapperOneI">
              </div>
              <div className = "contentWrapperOneII">
              </div>
              <div className = "contentWrapperOneIII">
              </div>
          </div>
          <div className = "contentWrapperTwo">
              <div className = "contentWrapperTwoI">
              </div>
              <div className = "contentWrapperTwoII">
              </div>
              <div className = "contentWrapperTwoIII">
              </div>
          </div>
          <div className = "contentWrapperThree">
              <div className = "contentWrapperThreeI">
              </div>
              <div className = "contentWrapperThreeII">
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


