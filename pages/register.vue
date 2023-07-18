<template>
    <main class="flex flex-col grow items-center justify-center">
        <GradientBorderCard>
            <div class="flex flex-col gap-4
            text-white">
                <h1 class="text-center text-xl">
                    Register
                </h1>
                <form class="flex flex-col gap-8" @submit.prevent="handleRegister">
                    <input type="text" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your E-Mail"  v-model="email" required>
                    <input type="password" class="w-full p-1 bg-transparent focus:outline-0 border-b-2 focus:placeholder-transparent focus:transition ease-linear delay-150" placeholder="Your Password"  v-model="password" required>
                    <input type="submit" class="w-full bg-green-500 p-2 cursor-pointer" value="Sign Up">
                </form>
            </div>
        </GradientBorderCard >
    </main>
</template>

<script setup>



const user = useSupabaseUser()


    onMounted(() => {
        watchEffect(async () => {
            if(user.value) {
                await navigateTo("/dashboard")
            }
        })
    })

    const email = ref('')
    const password = ref('')
    const supabase = useSupabaseClient()

    async function handleRegister() {
        try {
            console.log(email.value)
            console.log(password.value)
            const { data, error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value
            })

            if(error) {
                throw error
            }
            else {
                //create userprofile in database
                console.log(user)
                const { data, error } = await supabase.from('userdata').insert({
                    userId: '',
                })
                //redirect to confirmSignup page
                await navigateTo("/confirmSignup")
            }


        }
        catch(error) {
            console.log(error)
        }
    }
</script>