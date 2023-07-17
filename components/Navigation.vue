<template>
    <nav class="text-white flex flex-row gap-4">
        <NuxtLink @click="handleLogout" class="cursor-pointer">
            Logout
        </NuxtLink>
        <div v-if="!user">
        <NuxtLink to="/login">
            Login
        </NuxtLink>
        <NuxtLink to="/register">
            Sign Up
        </NuxtLink>
        </div>
        <Suspense>
        <div v-if="userInfo">
            {{ userInfo.username }}
        </div>
        </Suspense>
    </nav>
</template> 

<script setup lang="ts">
    import { useAuthStore } from '../stores/AuthStore'
    import { storeToRefs } from 'pinia'
    const client = useSupabaseAuthClient()
    const store = useAuthStore()
    const user = useSupabaseUser()
    const { userInfo } = storeToRefs(store)



    async function handleLogout() {
        const { error } = await client.auth.signOut()
        store.updateUserData()
    }
</script>