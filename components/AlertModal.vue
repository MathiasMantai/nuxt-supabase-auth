<template>
    <ClientOnly>
        <Teleport to="#application">
            <div class="hidden transition ease-in-out delay-150 fixed top-0 text-white bg-green-500 w-full p-2" ref="alertModal">
                Submission has been Send. Check your E-Mails!
            </div>
        </Teleport>
    </ClientOnly>
</template>

<script setup lang="ts">

    const alertModal = ref(null)

    const props = defineProps<{
        hidden: boolean
    }>()
    const modalHidden = toRef(props, 'hidden')  

    watch(modalHidden, () => {
        alertModal.value.classList.toggle('hidden')
    })
</script>