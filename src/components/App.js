import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    this.setState({
      characters: this.state.characters.filter((item, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <div className="container is-fluid">
        <Table
          characterData={this.state.characters}
          removeCharacterMethod={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
