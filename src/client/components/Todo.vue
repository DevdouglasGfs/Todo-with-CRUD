<script setup lang="ts">
import axios from "axios";

// interface TodoDto {
  // id: number;
  // name: string;
  // description: string;
  // status: "pendente" | "concluído"
// }

const todos = axios.get("/api/todos",{
  responseType: 'json'
})
.then(res =>{
  alert(res)
  return res;
})
</script>

<template>
  <ul :class="$style.todos">
    <TransitionGroup>
      <div :class="$style.todo" v-for="todo in todos" :key="todo.id" v-if="true">
        <h2 :class="$style.todoTitle">{{ todo.name }}</h2>
        <div>
          <p :class="$style.todoDescription">{{ todo.description }}</p>
          <button :class="[$style.todoAction, {pending: todo.status === 'pendente'},{finished: todo.status === 'concluído'}]">
            {{ todo.status === "pendente" ? "pendente" : todo.status ? "concluído":"concluído" }}
          </button>
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
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 2rem 0;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1.6rem 2.3rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px -4px #272727;
  min-width: 500px;

  & div{
    display: flex;
    justify-content: space-between;
  }
  & button{
    display: block;
    padding: .5rem 1rem;
    cursor: pointer;
  }
}
</style>
