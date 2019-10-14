import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { member: [] };
    console.log(this.state);
  }

  memberList(list) {
    console.log("memberList");
    const memberList = list.map((member, index) => {
      return (
        <li>
          {member.name}
          {member.age}
        </li>
      );
    });

    return <ul>{memberList}</ul>;
  }

  render() {
    // stateが更新されるとrenderが走る
    console.log("render");
    return (
      <div>
        <button onClick={this.getJson}>Get Json</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  getJson = () => {
    console.log("getJson");
    const url = "https://api.myjson.com/bins/eben2";
    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
