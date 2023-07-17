<template>
    <main class="flex flex-col grow text-white">
        Dashboard 
    </main>
</template>

<script setup lang="ts">
    const user = useSupabaseUser()

    onMounted(() => {
        watchEffect(() => {
            if(!user.value) {
                navigateTo("/")
            }
        })
    })

    definePageMeta({
        middleware: ['auth']
    })
</script>