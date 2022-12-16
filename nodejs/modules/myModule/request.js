const encrypt = (data) => {
    return 'encrypted data'
}

const send = (url, data) => {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

export {encrypt, send}