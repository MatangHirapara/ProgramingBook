const data = require("../book.json");
const getData = async (req, res) => {
  const result = data;
  console.log('result', result);
  res.status(200).send(result)
};
module.exports =  getData;
