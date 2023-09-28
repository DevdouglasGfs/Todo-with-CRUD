<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import { TodosDto } from "../@types/DTOs";

</script>

<template>
  <h1 :class="$style.title">Todo</h1>
  <Suspense>
    <TodoList />
  </Suspense>
</template>

<style module lang="scss">
.title {
  font-weight: bolder;
  font-size: var(--tp-bbx);
  text-align: center;
}
</style>
