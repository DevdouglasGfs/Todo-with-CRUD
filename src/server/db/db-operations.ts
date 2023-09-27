import knex from "knex";
import config from "../../../knexfile";
import { TodosDto } from "../../@types/DTOs";

const db = knex(config.development);

function find(){
    return db('todos')
}
function findById(id:number){
    return db('todos').where('id', id);
}
function findByStatus(status:string){
    return db('todos').where('status', status);
}
function insert(id:number, todo:TodosDto){
    return db('todos').insert(todo);
}
function update(id:number, todo:TodosDto){
    return db('todos').where('id', id).update(todo);
}
function remove(id:number){
    return db('todos').where('id', id).del();
}

export {find, findById, findByStatus, insert, update, remove}