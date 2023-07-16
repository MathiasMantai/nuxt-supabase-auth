<template>
    <NuxtLink @click="handleLogout">
        Logout
    </NuxtLink>
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