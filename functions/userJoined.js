const createNotification = require('./createNotification');
var FieldValue = require('firebase-admin').firestore.FieldValue;
const {
    db,
  } = require('./admin');

const userJoined = user => {
    
    return db.collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the Party in Room [Fanatics]',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
};

module.exports = userJoined;