import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
  }
  
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => < FriendCard key={freind.id} />)
          name = {
            friend.name 
          }
          image = {
            friend.image
          }
          occupation = {
            freind.occupation
          }
          location = {
            friend.location
          }
        }
      </Wrapper>
    )
  }
}


export default App;
