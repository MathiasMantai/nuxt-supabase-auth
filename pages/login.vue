<template>
    <main class="flex flex-col grow items-center justify-center">
    
    <div class="">
        <br>
        <GradientBorderCard>
            <div class="flex flex-col gap-4
            text-white">
                <h1 class="text-center text-xl">
                    Login
                </h1>
                <form class="flex flex-col gap-8" @submit.prevent="handleLogin">
                    <input type="text" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your E-Mail"  v-model="email" required>
                    <input type="password" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your Password"  v-model="password" required>
                    <input type="submit" class="w-full bg-green-500 p-2" :value="submitButton">
                </form>
            </div>
        </GradientBorderCard >

    </div>

    </main>
</template>

<script setup lang="ts">

    const email = ref('')
    const password = ref('')
    const client = useSupabaseClient()
    const loading = ref(true)
    const submitButton = ref('Send')
    let error = false

    const user = useSupabaseUser()

    onMounted(() => {
        watchEffect(async () => {
            if(user.value) {
                await navigateTo("/dashboard")
            }
        })
    })

    async function handleLogin()
    {
        console.log(email.value)
        try {
            submitButton.value = 'Loading...'
            const { error } = await client.auth.signInWithPassword({ 
                email: email.value,
                password: password.value 
            })
            if (error) throw error

        } catch (error: any) {
            alert(error.error_description || error.message)
            error = true
        } finally {
            loading.value = false

            setTimeout(() => {
                loading.value = true
            }, 2000)
            
            if(!error) {
                submitButton.value = 'Submission Send'
            }
        }
    }
</script>