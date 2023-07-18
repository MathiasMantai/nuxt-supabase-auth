<template>
    <div class="h-[100dvh] flex flex-col bg-zinc-900 text-white ">
        <div class="flex  gap-4">
        <NuxtLink to="/login">Login</NuxtLink>
        <NuxtLink to="/register">Register</NuxtLink>
        </div>
        <slot />
    </div>
</template>