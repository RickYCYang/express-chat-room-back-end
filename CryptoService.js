const CryptoJS = require('crypto-js')
var config = require('./config');

const encrypt = (plainText) => {
    return CryptoJS.AES.encrypt(plainText, config.secretKey).toString();
}

const decrypt = (ciphertext) => {
    return CryptoJS.AES.decrypt(ciphertext, config.secretKey).toString(CryptoJS.enc.Utf8)
}

module.exports = {encrypt, decrypt}