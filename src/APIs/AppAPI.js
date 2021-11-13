import React, { Component } from "react";

class AppAPI extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  // class App2 extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       isLoading: true
  //     };
  //   }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({
  //         isLoading: false
  //       });
  //     }, 1500);
  //   }

  //   render() {
  //     return (
  //       <div>{this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}</div>
  //     );
  //   }
  // }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name;
    return <div>{text}</div>;
  }
}

export default AppAPI;
