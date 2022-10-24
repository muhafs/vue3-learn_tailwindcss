<template>
	<h1 class="my-10 text-6xl font-bold text-center mx-auto max-w-3xl">
		<span class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Pseudo Classes & Dark Mode</span>
	</h1>

	<section class="mb-5">
		<button
			class="bg-sky-500 text-white px-5 py-2 font-semibold font-inter mx-auto block rounded-full hover:bg-sky-600 active:bg-sky-700 focus:ring focus:ring-sky-300 focus:border focus:border-sky-400 outline-none dark:bg-slate-300 dark:hover:bg-slate-200 dark:text-slate-800 dark:hover:text-slate-900"
		>
			Button
		</button>
	</section>

	<section class="mb-5">
		<div class="max-w-lg border border-slate-200 rounded-xl mx-auto p-5 shadow-md font-inter hover:bg-sky-400 group">
			<h4 class="font-bold text-slate-700 text-lg mb-3 group-hover:text-white selection:bg-sky-200 selection:text-slate-700 dark:text-slate-200">My Blogg</h4>
			<p class="text-slate-600 group-hover:text-white selection:bg-sky-200 selection:text-slate-700 dark:text-slate-200">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia exercitationem! A alias facere suscipit at, dolor nisi non, eius quod ipsum delectus vitae ipsam temporibus praesentium enim fugit? Voluptatum.
			</p>
		</div>
	</section>

	<section class="mb-5">
		<div class="max-w-lg border border-slate-200 rounded-xl p-5 mx-auto shadow-md font-inter">
			<form class="">
				<label for="email">
					<span class="block font-semibold mb-2 text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 dark:text-slate-200">Email</span>
					<input id="email" type="email" placeholder="Enter Your Email.." class="px-3 py-2 border rounded w-full outline-none focus:ring-1 focus:ring-sky-300 block text-sm invalid:focus:ring-1 invalid:focus:ring-red-500 peer" />
					<p class="text-red-500 mt-2 text-sm invisible peer-invalid:visible">Email is Invalid</p>
				</label>
			</form>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style></style>
