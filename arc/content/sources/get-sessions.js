const resolve = (query) => {
    const uri = `https://boiling-hollows-82728.herokuapp.com/graphql?query={ Session { about date name _id } }`;
    return uri;
}

export default {
    resolve,
    schemaName: 'sessions',
    params: {}
}
