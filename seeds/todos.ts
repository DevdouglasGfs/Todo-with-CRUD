import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // Deletes ALL existing entries
    await knex("todos").del();

    // Inserts seed entries
    await knex("todos").insert([
        { id: 1, title: "Fazer o CRUD ser funcional", description: "O CRUD ainda não funciona", status: "pendente" },
        { id: 2, title: "Criar o Banco de Dados", description: "Usar o SQLite3 como Banco de dados", status: "concluído" },
        { id: 3, title "Fazer os testes do Banco de dados", description: "Criar um seed para isso", status: "pendente" }
    ]);
};
