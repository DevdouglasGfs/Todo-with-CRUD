<script setup lang="ts">
import Todo from "./components/Todo.vue";
</script>

<template>
  <h1 :class="$style.title">Todo</h1>
  <Suspense>
    <Todo />
  </Suspense>
</template>

<style module lang="scss">
.title {
  color: var(--c-primary);
  font-weight: bolder;
  font-size: var(--tp-bbx);
  text-align: center;
}
</style>
