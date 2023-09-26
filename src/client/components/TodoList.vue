<script setup lang="ts">
import axios from "axios";

interface TodoDto {
id: number;
name: string;
description: string;
status: "pendente" | "concluído"
}

const todos:TodoDto[] = await axios
  .get("/api/todos", {
    responseType: "json"
  })
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((e) => {
    console.error(e);
  });

</script>

<template>
  <ul :class="$style.todos">
    <TransitionGroup>
      <div
        :class="$style.todo"
        v-for="todo in todos"
        :key="todo.id"
        v-if="true"
      >
        <h2 :class="$style.todoTitle">{{ todo.name }}</h2>
        <div>
          <p :class="$style.todoDescription">{{ todo.description }}</p>
          <select :class="$style.todoAction">
            <option :value="todo.status" :selected="todo.status === 'pendente'">Pendente</option>
            <option :value="todo.status" :selected="todo.status === 'concluído'">Concluído</option>
          </select>
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
  gap: 2rem 0;
  width: 60%;
  border-radius: 8px;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1.6rem 2.3rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px -3px var(--c-secundary);
  font-size: var(--tp-n);

  & div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
  }
  & select {
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-image: var(--primary-gradient);
    border-radius: 4px;
    color: var(--c-primary-dark);
    transition: all 400ms ease;

    &:focus, &:focus-visible, &:hover{
      background: var(--c-secundary);
      color: #fff;
    }
  }
}
</style>
