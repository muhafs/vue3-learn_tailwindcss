<template>
	<NavBar />

	<router-view />
</template>

<script>
	import NavBar from '@/components/NavBar.vue';

	export default {
		components: {
			NavBar,
		},
	};
</script>

<style>
	body {
		@apply dark:bg-slate-800 dark:text-slate-200;
	}
</style>
