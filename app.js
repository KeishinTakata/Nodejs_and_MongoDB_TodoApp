const express  =require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const PORT = 5000;
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
//ルートフォルダにアクセスしたときに、publicフォルダの中のhtmlファイルを探してそれを返すようになる
app.use(express.static("./public"));

//エンドポイントのマウント
app.use("/api/v1/tasks", taskRoutes);

//DBと接続メソッド
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        //立ち上げたポート番号と、立ち上げたときに動かす関数を記述している
        app.listen(PORT, console.log("サーバーが起動しました"));
    } catch(err) {
        console.log(err);
    }
};

//DBと接続、サーバーの立ち上げ
start();




