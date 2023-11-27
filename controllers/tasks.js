const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try{
        const getAllTasks = await Task.find({});
        res.status(200).json(getAllTasks);
    }catch(err){
        res.status(500).json(err);
    }
}

const  createTask = async (req, res) => {
    try {
        //model.create()でデータモデルを基に,reqのbodyに含まれる情報を使ってデータを作成
        const  createTask = await Task.create(req.body);
        //正常に処理されたときに、200と値をjson形式でreturnする
        res.status(200).json(createTask);
    }catch(err){
        res.status(500).json(err);
    }
}

const getSingleTask = async (req, res) => {
    try{
        const getSingleTask = await Task.findOne({_id: req.params.id });
        if(!getSingleTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません。`);
        }
        res.status(200).json(getSingleTask);
    }catch (err) {
        res.status(500).json(err);
    }
}

const updateTask = async (req, res) => {
    try{
        const updateSingleTask = await Task.findOneAndUpdate(
            {_id: req.params.id },
            //req.bodyを引数にすることで、bodyに含まれるすべてを更新することができる
             req.body,
             {
                new: true,
             }
        );
        if(!updateSingleTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません。`);
        }
        res.status(200).json(updateSingleTask);
    }catch (err) {
        res.status(500).json(err);
    }
}

const deleteTask = async (req, res) => {
    try{
        const deleteTask = await Task.findOneAndDelete(
            {_id: req.params.id }
        );
        if(!deleteTask) {
            return res.status(404).json(`_id:${req.params.id}は存在しません。`);
        }
        res.status(200).json(deleteTask);
    }catch (err) {
        res.status(500).json(err);
    };
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};