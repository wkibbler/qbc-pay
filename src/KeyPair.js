var lib = require('genesis-js')
var bigi = require('bigi')
var crypto = require('crypto')
var request = require('request')
var Swal = require('sweetalert2')

module.exports = function(){
  var d = bigi.fromBuffer(crypto.randomBytes(20).toString('hex'));
  var keyPair = new lib.ECPair(d, null, {network: lib.networks.qbc});
  return {
    address: keyPair.getAddress(),
    privateKey: keyPair.toWIF()
  }
}