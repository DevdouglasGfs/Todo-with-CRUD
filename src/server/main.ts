import express, { Response, Request } from "express";
// import {knex} from "knex";
import * as db from "./db/db-operations";
import ViteExpress from "vite-express";

const app = express();

app.use(express.json());

app.get("/api/todos", async (req:Request, res:Response) => {
  try{
    const todos = await db.find();
    return res.status(200).json(todos);
  }catch(e){
    console.error(e)
  }
  // res.send([{
    // id: 1,
    // name: 'Não sei',
    // description: 'N sei tmb',
    // status: 'pendente'
  // }])
});
app.put("/api/todos",(_req:Request, _res:Response) => {
  
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
