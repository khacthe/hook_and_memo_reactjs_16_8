// @flow
import React, { Component } from 'react';

class Content extends Component {

  const { href, text } = this.props;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        </header>
      </div>
    );
  }
}

export default Content;