<script setup lang="ts">
import EditTodo from "./EditTodo.vue";
import axios from "axios"
import { reactive } from "vue";

interface TodoDto {
  id: number;
  title: string;
  description: string;
  status: "pendente" | "concluído"
}

const todos: TodoDto[] = await axios
  .get("/api/todos", {
    responseType: "json"
  })
  .then((res) => {
    return res.data;
  })
  .catch((e) => {
    console.error(e);
  });
const editingTodo = reactive({editing:false,id: 0});
</script>

<template>
  <ul :class="$style.todos">
    <TransitionGroup>
      <div :class="$style.todo" v-for="todo in todos" :key="todo.id" v-if="todos.length > 0">
        <EditTodo v-if="editingTodo.editing && editingTodo.id === todo.id " :todos="todos" :todo="todo" @close-edit-todo="editingTodo.editing = false" />
        <h2 :class="$style.todoTitle">{{ todo.title }}</h2>
        <div>
          <p :class="$style.todoDescription">{{ todo.description }}</p>
          <select :class="$style.todoAction">
            <option :value="todo.status" :selected="todo.status === 'pendente'">Pendente</option>
            <option :value="todo.status" :selected="todo.status === 'concluído'">Concluído</option>
          </select>
          <button @click="editingTodo.editing = !editingTodo.editing && editingTodo.id === todo.id">Editar</button>
        </div>
      </div>
      <div :class="$style.todo" v-else>
        <p>Nenhuma to-do foi criada ainda</p>
      </div>
    </TransitionGroup>
  </ul>
</template>

<style module lang="scss">
.todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  gap: 1rem 0;
  border-radius: 8px;
}

.todo {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1.6rem 2.3rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px -3px var(--c-secundary);
  font-size: var(--tp-n);
  z-index: 100;
  min-width: 300px;
  max-width: 70%;

  & div {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }

  & p{
    flex: 0 1 auto
  }

  & select, button {
    flex: 1 auto;
    min-height: max-content;
    min-width: max-content;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-image: var(--primary-gradient);
    border-radius: 4px;
    color: var(--c-primary-dark);
    transition: all 400ms ease;

    &:focus,
    &:focus-visible,
    &:hover {
      background: var(--c-secundary);
      color: #fff;
    }
  }
}
</style>
