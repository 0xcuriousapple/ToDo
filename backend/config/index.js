const dbuser = 'thehead';
const dbpassword = 'abcd';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-co47j.gcp.mongodb.net/todo?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;


