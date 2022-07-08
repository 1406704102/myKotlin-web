var CryptoJs = require("crypto-js");

function AesEnc(word, key, iv) {
    const enc_word = CryptoJs.enc.Utf8.parse(word)
    const enc_key = CryptoJs.enc.Utf8.parse(key)
    const enc_iv = CryptoJs.enc.Utf8.parse(iv)
    const encrypted = CryptoJs.AES.encrypt(enc_word, enc_key, {
        iv: enc_iv,
        mode: CryptoJs.mode.ECB,
        padding: CryptoJs.pad.Pkcs7
    })
    return encrypted.toString()
}

function AesDec(word, key, iv) {
    const enc_key = CryptoJs.enc.Utf8.parse(key);
    const enc_iv = CryptoJs.enc.Utf8.parse(iv)
    const decrypt = CryptoJs.AES.decrypt(word, enc_key, {
        iv: enc_iv,
        mode: CryptoJs.mode.ECB,
        padding: CryptoJs.pad.Pkcs7
    });
    return CryptoJs.enc.Utf8.stringify(decrypt).toString()
}

function Md5(word) {
    const encrypted = CryptoJs.MD5(word)
    return encrypted.toString()
}

function SHA1(word) {
    const encrypted = CryptoJs.SHA1(word)
    return encrypted.toString()
}

function SHA256(word) {
    const encrypted = CryptoJs.SHA256(word)
    return encrypted.toString()
}
function SHA512(word) {
    const encrypted = CryptoJs.SHA512(word)
    return encrypted.toString()
}
function SHA3(word) {
    const encrypted = CryptoJs.SHA3(word)
    return encrypted.toString()
}
function RIPEMD160(word) {
    const encrypted = CryptoJs.RIPEMD160(word)
    return encrypted.toString()
}
export default {
    AesEnc,
    AesDec,
    Md5,
    SHA1,
    SHA256,
    SHA512,
    SHA3,
    RIPEMD160
}