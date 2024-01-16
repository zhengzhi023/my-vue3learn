import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/Layout'


export const useCategoryStore = defineStore('category', () => {
    //导航列表数据
    const categoryList = ref([])

    const GetLayout = async() => {
        const res = await getCategoryAPI()
        categoryList.value = res.data.result
    }
    return {
        categoryList,
        GetLayout
    }
})