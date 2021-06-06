const uuid = require('uuid').v4;

const genReqId = (req) => {
  let correlatonId = req.headers['x-correaltionid'];
  if (!correlatonId)
    correlatonId = req.headers['request-id'];
  return correlatonId || uuid();
}

module.exports = { genReqId };