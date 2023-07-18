<template>
    <div  class="">
        <NuxtLayout :name="(user ? 'auth' : 'non-auth')">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
    const user = useSupabaseUser()
</script>