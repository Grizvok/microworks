import React from 'react';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
  static async getInitialProps({ req }) {
    return { isServer: req ? 'true' : 'false' };
  }
  constructor(props) {
    super(props);

    this.state = {
      response: '',
      otherResponse: '',
    };
  }

  componentDidMount = async () => {
    const otherResult = await fetch('http://localhost:3002/api/ticket/hello');
    const otherJSON = await otherResult.json();

    const res = await fetch('http://localhost:3001/api/user/hello');
    const json = await res.json();

    if (res.status === 200 && otherResult.status === 200) {
      this.setState({
        response: json.message,
        otherResponse: otherJSON.message,
      });
    }
  };

  render() {
    return (
      <div>
        <p>Hello World!</p>
        <p>{this.state.response}</p>
        <p>{this.state.otherResponse}</p>
      </div>
    );
  }
}

export default Index;
