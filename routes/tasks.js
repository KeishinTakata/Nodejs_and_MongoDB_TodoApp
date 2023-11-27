const express = require("express");
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
} = require("../controllers/tasks");

//関数に()をつけると即座に実行されてしまうらしい。
//つけない場合は、指定した関数を参照する
router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", getSingleTask);

//情報を更新するメソッド(put)
router.patch("/:id", updateTask);


router.delete("/:id", deleteTask);

module.exports = router;