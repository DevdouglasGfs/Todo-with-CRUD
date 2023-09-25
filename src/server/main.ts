import express, { Response, Request } from "express";
import { knex } from "knex";
import ViteExpress from "vite-express";
import { ref } from "vue";

const app = express();
const counterId = ref(0);

app.use(express.json());

// app.get("/", (_, _res:Response)=>{
//   _res.send(JSON.stringify({
//     id: 1,
//     name: 'Não sei',
//     description: 'N sei tmb',
//     status: 'pendente'
//   }))
// })
app.get("/api/todos", (_, res:Response) => {
  // knex({
  //   client: "sqlite3",
  //   connection:{
  //     filename: "./db/todo.sqlite",
  //     flags: ["OPEN_URL"]
  //   }
  // })  
  // .table('todos')
  // .column('*')
  // .insert('Sla');
  
  res.send([{
    id: 1,
    name: 'Não sei',
    description: 'N sei tmb',
    status: 'pendente'
  }])
});
app.put("api/todos",(_req:Request, _res:Response) => {
  
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
