<template>
	<nav class="flex items-center justify-center lg:justify-between lg:px-32 py-3 bg-slate-800 dark:bg-slate-700">
		<div class="flex justify-center lg:justify-start items-center lg:gap-3">
			<h2 class="text-3xl font-bold lg:mr-6 uppercase bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Logo</h2>

			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/">Home</router-link>
			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/utility-one">Utility 1</router-link>
			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/utility-two">Utility 2</router-link>
			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/pseudo-class">Pseudo Classes</router-link>
			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/animation">Animations</router-link>
			<router-link class="hidden lg:block text-slate-300 font-semibold" to="/responsive">Responsive</router-link>
		</div>

		<div class="hidden lg:flex lg:items-center lg:justify-center">
			<span class="text-sm text-slate-300 font-semibold">☀</span>
			<input type="checkbox" id="toggle" class="hidden" v-model="isDark" @click="toggleDark()" />
			<label for="toggle" class="w-9 h-5 bg-slate-500 dark:bg-slate-800 mx-1 rounded-full flex items-center p-[2px] cursor-pointer">
				<div class="w-4 h-4 rounded-full bg-white toggle-circle transition" :class="{ 'translate-x-4': isDark }"></div>
			</label>
			<span class="text-sm text-slate-300 font-semibold">🌙</span>
		</div>
	</nav>
</template>

<script setup>
	import { useDark, useToggle } from '@vueuse/core';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<style></style>
