const router = require("express").Router();
//importing auth middleware
const auth = require("../middleware/auth");

const {
  askQuestion,
  getQuestions,
  getquestionbyid,
} = require("./question.controller");

//route to send/post question using ask question
router.post("/newquestion", auth, askQuestion);

//route to retrieve questions from database
router.get("/getquestions", auth, getQuestions);

//route to retreive question using given id
router.get("/getquestionbyid", auth, getquestionbyid);

module.exports = router;
