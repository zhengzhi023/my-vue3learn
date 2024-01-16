<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFied from './components/LayoutFied.vue'

//触发获取导航数据的action
import {useCategoryStore} from '@/stores/category' 
import { onMounted} from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.GetLayout()
})
</script>

<template>
  <LayoutFied />
  <LayoutHeader />
  <LayoutNav />
  <RouterView />
  <LayoutFooter />
</template>