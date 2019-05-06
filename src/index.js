import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: '',
  //     error: false,
  //   }
  // }

  state = {
    lat: null,
    errorMessage: '',
    error: false,
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let latPosition = position.coords.latitude.toFixed(4)
        this.setState({
          lat: latPosition
        });
      }, (err) => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat){
      return (
        <div>Error: {this.state.errorMessage}</div>
      )
    } else if (this.state.lat === null && !this.state.errorMessage){
      // console.log('loading');
      return (
        <div>
          <h1>
            <Spinner message='Allow location request please' />
          </h1>
        </div>
      )
    }
    return (
      <SeasonDisplay lat={this.state.lat} />
    )
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}


ReactDOM.render(
  <App />, document.querySelector('#root')
)
