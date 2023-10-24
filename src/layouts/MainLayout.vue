<template>
  <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="首頁" icon="home" />
            <q-breadcrumbs-el v-if="(route as any).meta.title !== '首頁'" :label="(route as any).meta.title" icon="widgets" />
          </q-breadcrumbs>
        </q-toolbar-title>
        <q-btn class="logout-style" outline label="登出" @click="dialog = true" />
        <!-- <div class="logout-style" @click="logout()"></div> -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          <p class="logo" @click="goHome()">Efinity</p>
        </q-item-label>
        <EssentialLink
          v-for="item in essentialLinks"
          :key="item.title"
          :title="item.title"
          :icon="item.icon"
          :linkPath="item.link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">是否確認登出?</div>
      </q-card-section>
      <q-card-section class="row items-center q-gutter-sm">
        <q-btn label="確認" color="primary" @click="dialog = false" />
        <q-btn v-close-popup label="取消" color="primary" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useRoute, useRouter } from 'vue-router'

const linksList = [
  {
    title: '代理盈虧報表',
    caption: '',
    icon: 'school',
    link: '/income'
  },
  {
    title: '產品統計報表',
    caption: '',
    icon: 'code',
    link: '/provider-report'
  },
  {
    title: '代理點位差報表',
    caption: '',
    icon: 'chat',
    link: '/commission-report'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const route = useRoute()
    const router = useRouter()
    const leftDrawerOpen = ref(false)
    const dialog = ref(false)

    console.log(route)
    const goHome = () => {
      debugger
      router.push({ path: '/' })
    }

    const logout = () => {
      console.log('logout')
    }

    return {
      dialog,
      logout,
      goHome,
      route,
      router,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
<style lang="sass">
.logo
  cursor: pointer
.logout-style
  color: #fff
</style>
