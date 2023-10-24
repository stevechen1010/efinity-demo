<template>
  <div class="home q-pa-md row items-start q-gutter-md">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">新增代理</div>
        <div class="text-subtitle2">23</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">新增玩家</div>
        <div class="text-subtitle2">5</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">活躍人數</div>
        <div class="text-subtitle2">6</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup (props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  },
});
</script>
<style lang="sass">
.home
  display: flex
  justify-content: center
  width: 100vw
  .my-card
    margin: 2vw
    width: 100%
    max-width: 250px
</style>
