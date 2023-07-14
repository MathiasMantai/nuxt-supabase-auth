<template>
    <main class="flex flex-col grow items-center justify-center">
    
    <div class="">
    <br>
    <GradientBorderCard>
        <div class="flex flex-col gap-4
        text-white">
            <h1 class="text-center text-xl">Signup</h1>
            <p>Sign up with your E-Mail below</p>
            <form class="flex flex-col gap-8" @submit.prevent="handleLogin">
                <input type="text" class="w-full p-1 bg-transparent focus:outline-0 border-b-2" placeholder="Your E-Mail"  v-model="email">
                <input type="submit" class="w-full bg-green-500 p-2" :value="submitButton">
            </form>
        </div>
    </GradientBorderCard >
    <AlertModal :hidden="loading" />
    </div>

    </main>
</template>

<script setup lang="ts">

    const email = ref('')
    const client = useSupabaseClient()
    const loading = ref(true)
    const submitButton = ref('Send')
    let error = false
    async function handleLogin()
    {
        console.log(email.value)
        try {
            loading.value = true
            submitButton.value = 'Loading...'
            const { error } = await client.auth.signInWithOtp({ email: email.value })
            if (error) throw error
        } catch (error: any) {
            alert(error.error_description || error.message)
            error = true
        } finally {
            loading.value = false
            if(!error) {
                submitButton.value = 'Submission Send'
            }
        }
    }
</script>