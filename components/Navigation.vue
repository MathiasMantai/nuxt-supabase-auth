<template>
    <nav class="text-white ">
        <NuxtLink @click="handleLogout" class="cursor-pointer">
            Logout
        </NuxtLink>
        <NuxtLink to="/login">
            Login
        </NuxtLink>
        <NuxtLink to="/register">
            Sign Up
        </NuxtLink>
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

    const { userInfo } = storeToRefs(store)


    async function handleLogout() {
        const { error } = await client.auth.signOut()

        if(!error) {
            navigateTo('/')
        }
    }
</script>