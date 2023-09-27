import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todos", table =>{
        table.increments('id').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('status').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('todos');
}

