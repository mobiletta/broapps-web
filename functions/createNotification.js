const {
    db,
  } = require('./admin');

const createNotification = ((notification) => {
    return db.collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  });

  module.exports = createNotification;