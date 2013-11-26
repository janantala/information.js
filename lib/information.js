var _ = require('lodash');

var getInformation = function(array, reference) {
  var information = {};

  information.tp = _.intersection(array, reference).length;
  information.fp = array.length - information.tp;

  information.fn = reference.length - information.tp;
  information.tn = _.union(array, reference).length - _.intersection(array, _.union(array, reference)).length;

  information.precision = information.tp / (information.tp + information.fp);
  information.recall = information.tp / (information.tp + information.fn);

  information.tnrate = information.tn / (information.tn + information.fp);
  information.accurancy = (information.tp + information.tn) / (information.tp + information.tn + information.fp + information.fn);

  return information;
};

module.exports = {
  getInformation: getInformation
};