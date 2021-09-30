<template>
  <div id="app" data-v-app="">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todosRef.length > 0">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDoneRef" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: item.completed,
              editing: item === editingTodoRef,
            }"
            @dblclick="editTodo(item)"
            @keyup.enter="doneTodo(item)"
            @blur="doneTodo(item)"
            @keyup.esc="cancelEdit(item)"
            v-for="item in filteredTodosRef"
            :key="item.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label>{{ item.title }}</label>
              <button class="destroy" @click="deleteTodo(item)"></button>
            </div>
            <input class="edit" type="text" v-model="item.title" />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{ reFinishRef }}</strong>
          <span
            >item{{
              reFinishRef === 1 || reFinishRef === 0 ? "" : "s"
            }}
            left</span
          >
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef === 'all' }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" v-show="completedRef > 0" @click="clearCompleted">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilter from "./composition/useFilter";
import useEditTodo from "./composition/useEditTodo";
import useDeleteTodo from "./composition/useDeleteTodo";
export default {
  setup() {
    const { todosRef } = useTodoList(); //解构
    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEditTodo(todosRef),
      ...useDeleteTodo(todosRef),
    };
  },
};
</script>
