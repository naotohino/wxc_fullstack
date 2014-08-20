'use strict';

var _ = require('lodash');
var Message = require('./message.model');

// Get list of messages
exports.index = function(req, res) {
  Message.find(function (err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, messages);
  });
};

// Get a single message
exports.show = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    return res.json(message);
  });
};

// Creates a new message in the DB.
exports.create = function(req, res) {
  console.log("send message");

var request = require('request');
    var api_key = 'AIzaSyDmEPC_ehFpJmW3yJI8mQoAg8t8xmFHSrU'; // APIキーを入れる
    // メッセージの作成
    var msg = {
        registration_ids: ['APA91bGuasptdceWoy77gx5la7iZqiKWoaxkj5XPU6iRgb74Me-T-BHeNQugLY0Fv4h5GWMwCPq2-cuSt6lVV9gnHsBp74C14eVZbEQY2YlO3tDVYE3PLrAzHyUprUHAP50C0120w2aPtlJm5Lz-xVheiVj9Gs8Kz_3PU1Yh0XqtEWjX0Raj7Jw'], // 端末で登録した registrationId を入れる
        collapse_key: "update",
        time_to_live: 180,
        // 送信するデータ
        data: {
            message: req.body.msg
        }
    };

    request.post({
        uri: 'https://android.googleapis.com/gcm/send',
        json: msg,
        headers: {
            Authorization: 'key=' + api_key
    }
  }, function(err, response, body) {
    //res.redirect('/');
  });










  Message.create(req.body, function(err, message) {
    if(err) { return handleError(res, err); }
    return res.json(201, message);
  });
};

// Updates an existing message in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Message.findById(req.params.id, function (err, message) {
    if (err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    var updated = _.merge(message, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, message);
    });
  });
};

// Deletes a message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}