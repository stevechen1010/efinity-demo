<template>
  <q-item
    clickable
    tag="span"
    @click="goRouter()"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    linkPath: {
      type: String,
      default: '/'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const goRouter = () => {
      debugger
      router.push({ path: props.linkPath })
    }

    return {
      goRouter,
      router,
      route
    }
  }
});
</script>
