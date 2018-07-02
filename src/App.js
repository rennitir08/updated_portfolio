import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Modal from './Modal.js';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Navbar/>
            <table width="100%">
                <tr>
                <td align="center" width="33%"><Modal/></td>
                <td align="center" width="33%"><Modal/></td>
                <td align="center" width="33%"><Modal/></td>
                </tr>
            </table>
      </div>
    );
  }
}

export default App;
