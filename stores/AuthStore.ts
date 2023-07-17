import { userData } from '../types/userData'


export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref()
    const getUserData = computed(() => userInfo)
    const user = ref(useSupabaseUser())

    async function updateUserData() {

        const { data, error, refresh } = await useFetch<userData>('/api/user', {
            headers: useRequestHeaders(['cookie'])
        })

        userInfo.value = {
            username: data.value.username
        }

    }

    watch(user, () => {
        updateUserData()
    })

    return { userInfo, updateUserData,  getUserData }
})