import express, { Response, Request } from "express";
import { knex } from "knex";
import ViteExpress from "vite-express";
import { ref } from "vue";

const app = express();
const router = express.Router()
const counterId = ref(0);

router.get("/", (_, _res:Response)=>{
  _res.send(JSON.stringify({
    id: 1,
    name: 'Não sei',
    description: 'N sei tmb',
    status: 'pendente'
  }))
})
router.get("/api/todos", (_, _res:Response) => {
  knex({
    client: "sqlite3",
    connection:{
      filename: "./db/todo.sqlite",
      flags: ["OPEN_URL"]
    }
  })  
  .table('todos')
  .column('*')
  .insert('Sla');
  
  _res.send(JSON.stringify({
    id: 1,
    name: 'Não sei',
    description: 'N sei tmb',
    status: 'pendente'
  }))
});
router.put("api/todos",(_req:Request, _res:Response) => {
  
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
