<template>
    <nav class="text-white ">
        <NuxtLink @click="handleLogout">
            Logout
        </NuxtLink>
        <NuxtLink to="/login">
            Login
        </NuxtLink>
        <NuxtLink to="/register">
            Sign Up
        </NuxtLink>
    </nav>
</template> 

<script setup lang="ts">
    const client = useSupabaseAuthClient()
    
    async function handleLogout() {
        const { error } = await client.auth.signOut()

        if(!error) {
            navigateTo('/')
        }
    }
</script>