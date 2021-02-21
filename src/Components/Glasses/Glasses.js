import React, { Component } from 'react';

class Glasses extends Component {
  render() {
    let {url} = this.props.items
    let {change} = this.props
    return (
      <div>
         <div className="btn btn-secondary">
            <img src={url} alt={url} style={{ width: "100%" }} onClick={() => {
              change(this.props.items)
            }} />
          </div>
      </div>
    );
  }
}

export default Glasses;
