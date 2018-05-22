import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className = "wrapperDiv">
        <div className = "headerWrapper">
          <p>hello</p>
        </div>
        <div className = "thoughtWrapper">
           <p className = "thoughtDiv">"Thought"</p>
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
              </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;


