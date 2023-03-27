const router = require('express').Router();
const {addUser, searchApi} = require("../controllers/users")
const ecryptionMiddleware = require("../middleware/middleware")

/* Search api. */
router.get('/', ecryptionMiddleware, searchApi);

/* Add users api. */
router.post('/',ecryptionMiddleware,addUser);

module.exports = router;
