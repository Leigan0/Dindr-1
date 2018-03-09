import React from 'react';
import axios from 'axios';
import UserPreview from './UserPreview'

class App extends React.Component {
  state = { users: [] }
//this.props.initialMessage
  componentDidMount() {
    // Does stuff when first mounted
    axios.get('/api/users')
      .then(res => {
        console.log({res});
        this.setState({ users: res.data })
      })
  };

  componentWillUnmount() {
    // Runs when component gets unmounted/replaced
    console.log('unmounted')
  };


  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user =>
           <div key={user._id}> <li><UserPreview {...user} /> </li></div>
          )}
        </ul>
      </div>
    )
  }
}

export default App;