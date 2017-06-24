import React, { Component } from 'react';
import './Widget.css';

class Widget extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false
    };

  }

  componentDidMount() {

  }

  render() {
    return (

      <div className="rehub-widget">
        { this.props.children }
      </div>

    );
  }
}

export default Widget;