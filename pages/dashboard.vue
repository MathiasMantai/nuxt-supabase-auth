<template>
    <main class="flex flex-col grow">
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