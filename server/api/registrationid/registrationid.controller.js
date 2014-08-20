'use strict';

var _ = require('lodash');
var Registrationid = require('./registrationid.model');

// Get list of registrationids
exports.index = function(req, res) {
  Registrationid.find(function (err, registrationids) {
    if(err) { return handleError(res, err); }
    return res.json(200, registrationids);
  });
};

// Get a single registrationid
exports.show = function(req, res) {
  Registrationid.findById(req.params.id, function (err, registrationid) {
    if(err) { return handleError(res, err); }
    if(!registrationid) { return res.send(404); }
    return res.json(registrationid);
  });
};

// Creates a new registrationid in the DB.
exports.create = function(req, res) {
  Registrationid.create(req.body, function(err, registrationid) {
    if(err) { return handleError(res, err); }
    return res.json(201, registrationid);
  });
};

// Updates an existing registrationid in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Registrationid.findById(req.params.id, function (err, registrationid) {
    if (err) { return handleError(res, err); }
    if(!registrationid) { return res.send(404); }
    var updated = _.merge(registrationid, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, registrationid);
    });
  });
};

// Deletes a registrationid from the DB.
exports.destroy = function(req, res) {
  Registrationid.findById(req.params.id, function (err, registrationid) {
    if(err) { return handleError(res, err); }
    if(!registrationid) { return res.send(404); }
    registrationid.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}