<template>
    <main class="flex flex-col grow items-center justify-center text-white">
        <GradientBorderCard>
            Homepage
        </GradientBorderCard >
    </main>
</template>

<script setup lang="ts">
    import { useAuthStore } from '@/stores/AuthStore';
    const store = useAuthStore()
    const user = useSupabaseUser()

    onMounted(() => {
        watchEffect(async () => {
            if(user.value) {
                await navigateTo("/dashboard")
                store.updateUserData()
            }
        })
    })
</script>