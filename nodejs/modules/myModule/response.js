const decrypt = (data) => {
    return 'decrypt data'
}
const read = () => {
    const decryptedData = decrypt('data')
    console.log(`${decryptedData}`)
}

export {decrypt, read}