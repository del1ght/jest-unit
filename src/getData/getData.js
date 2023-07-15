const axios = require('axios').default;
const mapArrToStrings = require('../mapArrToStrings/mapArrTostrings');

const getData = async () => {
  try {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const userIds = result.data.map((user) => user.id);
    return mapArrToStrings(userIds);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getData;
