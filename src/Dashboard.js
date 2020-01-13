import React, { Component } from 'react';
import './App.css';
var KeyPair = require('./KeyPair')
var request = require('request')


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      privKey: '',
      balance: 0
    }
  }

  componentDidMount(){
    if (!sessionStorage.getItem('keyPair')){
      let keys = KeyPair()
      this.setState({address: keys.address, privKey: keys.privateKey})
      sessionStorage.setItem('keyPair', JSON.stringify(keys))
    } else {
      let json = JSON.parse(sessionStorage.getItem('keyPair'))
      this.setState({address: json.address, privKey: json.privateKey})
    }
  }

  getbalance(){
    request('https://explorer.quebecoin.ca/ext/getaddress' + this.state.address, {JSON: true}, (err, body, res) => {
      let json = JSON.parse(body)
      if (json.address == undefined){
        this.setState({balance: 0})
      } else {
        this.setState({balance: json.balance})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
            <p>Please send {this.props.match.params.amount} QBC to:</p>
            <code>{this.state.address}</code>
            <div style={{marginTop: 50}}>
              <p>Amount Due: {this.props.match.params.amount} || Amount Paid: {this.state.balance}</p>
            </div>
        </div>
      </div>
    );
  }
}