const crypto = require("crypto")

 function Encrypt(word, key) { 
    var cipher = crypto.createCipher('aes256', key);
    var encrypted = cipher.update(word, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
    } 

module.exports = {Encrypt}