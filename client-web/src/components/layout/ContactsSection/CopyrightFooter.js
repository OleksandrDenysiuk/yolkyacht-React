import React, { Component } from "react";


export default class CopyrightFooter extends Component {

  render() {
    return (
      <div style={{position: 'absolute', bottom: 0, width: `${100}%`, backgroundColor:'#14417D', color: 'white', textAlign: 'center', paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}>
        {'\u00A9'} Allied Ocean Transport, {new Date().getFullYear() > 2019 ? `2019 - ${new Date().getFullYear()}` : `${new Date().getFullYear()}` }
        {process.env.NODE_ENV === 'production' ? '' : `,${'\u00A0\u00A0'}v0.04`}
      </div>
    );

  }
}

