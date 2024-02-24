<template>
	<section class="relative flex flex-col justify-center gap-10 px-10 py-40">
		<div class="flex items-center justify-evenly h-1/2">
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/7f39445c-3e7a-4dbd-d6c9-a2f9db4e0c01/grid"
				width="1024"
				height="732"
				id="photo-1"
				class="photo origin-center bg-white/10 w-[16vw]"
			/>
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/99fbf4a5-17e5-434b-7014-0f0aaf8fb101/grid"
				width="531"
				height="664"
				id="photo-2"
				class="photo origin-center bg-white/10 w-[14vw]"
			/>
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/b4cace28-2828-4742-a6f7-cfa81a991c01/grid"
				width="1024"
				height="768"
				id="photo-3"
				class="photo origin-center bg-white/10 w-[18vw]"
			/>
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/e7838029-7af1-46fe-fd40-b5903684f001/grid"
				width="1024"
				height="819"
				id="photo-4"
				class="photo origin-center bg-white/10 w-[16vw]"
			/>
		</div>

		<div class="text-center mb-6">
			<p class="text-5xl whitespace-nowrap leading-loose font-heading">Zelo.</p>
			<p class="text-xl text-text-secondary">{{ $t("slogan") }}</p>
		</div>

		<div class="flex items-center justify-evenly h-1/2">
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/730c4bd9-9397-4e44-d1bc-684a4089a501/grid"
				width="819"
				height="1024"
				id="photo-5"
				class="photo origin-center bg-white/10 w-[12vw]"
			/>

			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/eecb60db-50a2-4b45-0b0a-9bae635f0b01/grid"
				width="819"
				height="1024"
				id="photo-6"
				class="photo origin-center bg-white/10 w-[14vw]"
			/>
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/b5982a7c-663b-4141-ce90-f42823e21f01/grid"
				width="1024"
				height="683"
				id="photo-7"
				class="photo origin-center bg-white/10 w-[18vw]"
			/>
			<NuxtImg
				src="https://images.refrakt-media.com/v1/variant/defb4f84-be94-45e9-a739-0030b24cfc01/grid"
				width="1024"
				height="819"
				id="photo-8"
				class="photo origin-center bg-white/10 w-[14vw]"
			/>
		</div>
	</section>
</template>

<script setup>
	import { gsap } from "gsap";

	onMounted(() => {
		const items = document.querySelectorAll(".photo");
		gsap.from(items, {
			ease: "power2.inOut",
			duration: 0.6,
			opacity: 0,
			scale: 0.8,
			stagger: {
				each: 0.1,
				from: "random",
			},
		});
	});
</script>
