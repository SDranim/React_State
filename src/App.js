import './App.css';
import React from 'react';
import Profile from './Components/Profile';


class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      Person:{ 
        fullName: "Ranim Saoudi",
        bio: "25 years old / FullStack Web Developement Student / Love Cats", 
        imgSrc:"https://i.pinimg.com/originals/76/94/84/769484dafbe89bf2b8a22379658956c4.jpg", 
        profession:"Student (Go My Code)"
      },
      Shows: true,
      timer:0
      }
  }
  componentDidMount() {
    this.myTimer=setInterval (()=>{
      this.setState(prevState => ({
        timer: prevState.timer + 1
    }))
  }, 1000)
  }
  componentWillUnmount=()=>{
    clearInterval(this.myTimer)
  }


  render() { 
    return (  
      <div>
<p className='title'>Profil</p> <br/>
<button onClick={()=>this.setState({Shows:!this.state.Shows})}>{this.state.Shows ? "Hide" : "Show"}</button>
<h3>Time interval : {this.state.timer}</h3>
{this.state.Shows && <Profile Person={this.state.Person}/>}

      </div>
    );
  }
}
 
export default App;
