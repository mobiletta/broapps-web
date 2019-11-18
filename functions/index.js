// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('./admin');
const createNotification = require('./createNotification');
const getDoc = require('./getDoc');
const addMessage = require('./addMessage');
const makeUppercase = require('./makeUppercase');
const projectCreated = require('./projectCreated');
const userJoined = require('./userJoined');
const userStatusChanged = require('./userStatusChanged');

module.exports = {
  'admin': admin,
  'createNotification': createNotification,
  'getDoc': functions.https.onRequest(getDoc),
  'addMessage': functions.https.onRequest(addMessage),
  'makeUppercase': functions.database.ref('/messages/{pushId}/original').onCreate(makeUppercase),
  'projectCreated': functions.firestore.document('projects/{projectId}').onCreate(projectCreated),
  'userJoined': functions.auth.user().onCreate(userJoined),
  'userStatusChanged': functions.database.ref('/status/{uid}').onUpdate(userStatusChanged)
};



