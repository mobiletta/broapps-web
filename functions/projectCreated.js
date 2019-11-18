const createNotification = require('./createNotification');
var FieldValue = require('firebase-admin').firestore.FieldValue;
const {
    db,
  } = require('./admin');

const projectCreated = doc => {

    const project = doc.data();
    const notification = {
      content: 'Placed a New Bet',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: FieldValue.serverTimestamp()
    }

    return createNotification(notification);

};

module.exports = projectCreated;