const router = require("express").Router();
//importing auth middleware
const auth = require("../middleware/auth");

const { newAnswer, getAnswerByQuestId } = require("./answer.controller");

//route new answer to be created using new answer controller
router.post("/newanswer", auth, newAnswer);

//route to get answer using qestion id and getAnswerByQuestId
router.get("/getanswer", auth, getAnswerByQuestId);

module.exports = router;
