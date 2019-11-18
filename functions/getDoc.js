const {
    db,
  } = require('./admin');
  
  /**
   * Reads a doc from Firestore and sends it's data in the response.
   *
   * @param {Object} req Express Request Object
   * @param {Object} res Express Request Object
   */
  const getDoc = (req, res) => {
    db.doc('doc-name').get().then((doc) => {
      res.json(doc.data());
    }).catch((error) => console.log(error));
  };
  
  module.exports = getDoc;