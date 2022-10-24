<template>
	<h1 class="my-10 text-6xl font-bold text-center mx-auto max-w-3xl">
		<span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Transform, Transition and Animation</span>
	</h1>

	<section class="w-40 h-40 group mx-auto my-10">
		<div class="w-40 h-40 bg-sky-500 rounded-lg shadow-lg transition group-hover:rotate-45 group-hover:scale-50 group-hover:translate-x-32 group-hover:bg-sky-900"></div>
	</section>

	<section class="w-40 h-40 group mx-auto my-10">
		<div class="w-40 h-40 bg-sky-500 rounded-lg shadow-lg group-hover:origin-top-left group-hover:rotate-90 group-hover:bg-sky-900 transition"></div>
	</section>

	<section class="px-64 pt-10 mx-auto my-10 flex items-center justify-between">
		<div class="w-20 h-20 bg-sky-500 rounded-lg shadow-lg animate-spin-slow grid place-items-center">🚀</div>
		<div class="w-20 h-20 bg-sky-800 rounded-full shadow-lg animate-ping-slow grid place-items-center">🚀</div>
		<div class="w-20 h-20 bg-sky-500 rounded-lg shadow-lg animate-pulse-slow grid place-items-center">🚀</div>
		<div class="w-20 h-20 bg-sky-800 rounded-full shadow-lg animate-bounce-slow grid place-items-center">🚀</div>
	</section>
</template>

<script>
	export default {};
</script>

<style></style>
