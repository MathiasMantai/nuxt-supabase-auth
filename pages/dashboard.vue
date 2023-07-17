<template>
    <main class="flex flex-col grow text-white">
        Dashboard 
        {{ data }}
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

    const {data, error } = await useFetch('/api/user', {
        headers: useRequestHeaders(['cookie'])
    })

    // const { data, error } = await useFetch('/api/test')

    console.log(error)
</script>