<template>
    <main class="flex flex-col grow text-white items-center justify-center">
        <GradientBorderCard>
        Dashboard 
        </GradientBorderCard>
    </main>
</template>

<script setup lang="ts">
    const user = useSupabaseUser()

    onMounted(() => {
        watchEffect(async () => {
            if(!user.value) {
                await navigateTo("/")
            }
        })
    })

    definePageMeta({
        middleware: ['auth']
    })
</script>