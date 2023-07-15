<template>
    <main class="flex flex-col grow items-center justify-center">
    
    <div class="">
        <br>
        <GradientBorderCard>
            <div class="flex flex-col gap-4
            text-white">
                <h1 class="text-center text-xl">
                    Register
                </h1>
                <form class="flex flex-col gap-8" @submit.prevent="handleRegister">
                    <input type="text" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your E-Mail"  v-model="email" required>
                    <input type="password" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your Password"  v-model="password" required>
                    <input type="submit" class="w-full bg-green-500 p-2" value="Sign Up">
                </form>
            </div>
        </GradientBorderCard >
        <!-- <AlertModal :hidden="loading" /> -->
    </div>

    </main>
</template>

<script setup lang="ts">

    const email = ref('')
    const password = ref('')
    const supabase = useSupabaseClient()

    async function handleRegister() {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value
            })

            if(error) {
                throw error
            }
            else {
                //redirect to confirmSignup page
                navigateTo("/confirmSignup")
            }

            console.log(data)
        }
        catch(error) {
            console.log(error)
        }
    }
</script>