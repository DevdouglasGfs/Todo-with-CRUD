<script setup lang="ts">
import { TodosDto } from '../../@types/DTOs';
import { ref } from 'vue';

const props = defineProps<{
    todos: TodosDto[],
    todo: TodosDto
}>()

const emits = defineEmits(['close-edit-todo']);
// const editTodo = ref<HTMLElement>()

// window.addEventListener('focus', e => {
    // if(editTodo !== undefined && e.target !== editTodo.value){
        // emits('close-edit-todo')
    // }
// })
</script>
<template>
    <div :class="$style.editTodoCard" ref="editTodo">
        <h2 :class="$style.editTodoCardTitle">Editar</h2>
        <form :class="$style.editTodoCardForm">
            <input v-model="todo.title" type="text">
            <textarea cols="30" rows="10" v-model="todo.description">
            </textarea>
            <select>
                <option value="Pendente" :selected="todo.status === 'Pendente'">Pendente</option>
                <option value="Concluído" :selected="todo.status === 'Concluído'">Concluído</option>
            </select>
        </form>
    </div>
</template>
<style module lang="scss">
.edit-todo-card {
    position: absolute;
    z-index: 200;
    top: -2rem;
    left: 1rem;
    min-width: 130px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem 1.75rem;
    background: #fff;
    box-shadow: 0 4px 12px -2px var(--c-secundary);

    &__title {
        font-size: var(--tp-bx);
        text-align: center;
        margin: 0;
    }

    &__form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;

        & input,
        & select,
        & textarea {
            padding: .5rem .75rem;
            border-radius: 4px;
            color: var(--c-secundary);

            &::placeholder {
                color: opacify(#27B4F5, .8);
            }
        }
    }
}
</style>