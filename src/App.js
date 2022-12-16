// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

import React from 'react';
import axios from 'axios';
import './App.css';

const CardList = (props) => {
  return (
  <div>
    {
      props.profiles.map(profile) => {
        retirn < Card profile = { profile } />
    })
    }
  </div>
)
  }

class Form extends React.Component {
  state = {
    userName: '',
  }
  hanleInputChange = (event) => {
    this.setState( { userName: event.target.value });
  }
  handleOnSubmit = async (event) => {
    event.prevrntDefault();
    console.log("state", this.state.userName);
    // var axios = require('axios');
    // var config = {
      const config ={
      method: 'get',
      url: `https://api.github.com/user/${this.state.userName}`,
      headers: {}
    };
    try {
      const response = await axios(config)
      console.log(JSON.stringify(response.data))
      this.props.onDataRecivedFromAPI(response.data)
    }catch (error){
      console.log(error);
    }
    // axios(config)
    //   .than(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(functon(error){
    //     console.log(error);
    //   });
    // event.preventDefault();
//   }

// }
// render() {
//   return (
//     <div>
//       <form onSubmit={this.handleOnSubmit}>
//       <input type={"text"}
//        placeholder="Enter github username"
//         value={this.state.userName}
//          onChange={this.hanleInputChange} />
//       <button>Add profile Card</button>
//       </form>
//     </div>
//   )
// }
// }
// class card extends React.Component {
//   render(){
//     const profile = this.props;
//     return (
//   <div className="github-profile" >
//     <img src={profile.avatar_url} />
//     <div className="info">
//       <div className="name">{profile.name}</div>
//       <div className="company">{profile.company}</div>
//     </div>
//   </div>
// );
//   }
// }
// class App extends React.Component {

// class Form extends React.Component {
//   state =
//     {
//       userName: ''

//     };
//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
//     this.props.onSubmit(resp.data);
//     this.setState({ userName: '' });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.userName}
//           onChange={event => this.setState({ userName: event.target.value })}
//           placeholder="GitHub username"
//           required
//         />
//         <button>Add card</button>
//       </form>
//     );
//   }
// }

class App extends React.Component {
  state = {
    profiles: []
  }
  addNewProfile = (profileData) => {
    console.log("profile::", profileData);
    this.setState ({ profiles: [...this.state.profiles, profileData]})
      
    }
  
  render() {
    return (
      <div>
        <div className="header">the github app
        </div>
        <Form onDataRecivedFromAPI ={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}


export default App;
