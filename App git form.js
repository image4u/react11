
import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>The Git Hub Card App</h1>
//     </div>
//   );
// }

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
const CardList = (props) => {
  return (
    <div>
      {
        props.profiles.map((profile) => {
          return (<Card profile={profile} />)
        })
      }
    </div>
  )
}
// class Form extends React.Component{
//   state= {
//     userName:""
//   }

//   handleOnSubmit =() =>{

//   }
class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log(this.state.userName);
  };
  render(){
return (
<div>
<form onSubmit={this.handleSubmit}>
  {/* <form onSubmit={handleOnSubmit}> */}
    {/* <input type={"text"} placeholder="enter github username" value={this.state.userName} onChange= /> */}
    <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
    <button>Add Profile card </button>

  </form>
</div>)
}
class Card extends React.Component {
  render() {

    const profiles = this.props.profile
    return (
      <div style={{ margin: "1rem" }}>
        <img src={this.props.profile.avatar_url} style={{ width: "75px" }} />
        <div style={{ display: "inline-block", marginLeft: "12px" }}>
          <div style={{ fontSize: "125%" }}> {this.props.profile.name} </div>
          <div> {this.props.profile.company} </div>
        </div>

      </div>
    )
  }
}

// class Form extends React.Component {
// 	render() {
//   	return (
//     	<form action="">
//     	  <input type="text" placeholder="GitHub username"/>
//         <button>Add card</button>
//     	</form>
//     );
//   }
// }
class App extends React.Component {
//   constructor(props){
// super(props)
// this.state={

// }
//   }

state={
profiles: testData
}
  render() {
    return (
      <div>
        <div className='header'>
          The Git hub App
        </div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
