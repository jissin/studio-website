<template>
	<div
		class="px-4 md:px-10 py-20 md:py-40 grid grid-cols-4 grid-rows-3 items-center justify-items-center gap-x-4 md:gap-x-20 gap-y-4 md:gap-y-10 max-w-screen-lg m-auto"
	>
		<div class="text-center mb-6 order-4 col-span-4">
			<p class="text-5xl whitespace-nowrap leading-relaxed font-heading">
				Zelo.
			</p>
			<p class="text-lg text-text-secondary font-letter">
				{{ $t("slogan") }}
			</p>
		</div>

		<NuxtImg
			:src="item.src"
			:width="item.width"
			:height="item.height"
			class="photo bg-white/10 w-full will-change-transform cursor-pointer bg-black grid place-items-center"
			:alt="item.caption"
			v-for="(item, index) in sources"
			@click="throttleToggle(index)"
			:style="{ order: index }"
			:id="'figure-' + index"
		/>

		<Transition>
			<div
				v-if="bgVisible"
				class="bg-black z-10 fixed inset-0"
				@click="close"
			></div>
		</Transition>
	</div>
</template>

<script setup>
	import { gsap } from "gsap";

	const sources = [
		{
			src: "/showcases/0E6E89A0-D702-4A62-9BEE-34FC0785DC66_1_105_c.jpeg",
			width: 1098,
			height: 714,
			caption: "caption text",
		},
		{
			src: "/showcases/4B096E31-4E6A-4650-B99A-7B917BA945EC_1_102_o.jpeg",
			width: 564,
			height: 797,
			caption: "caption text",
		},
		{
			src: "/showcases/144DE3DA-14B9-4265-B278-4D41DF98FE9D_1_105_c.jpeg",
			width: 1178,
			height: 667,
			caption: "caption text",
		},
		{
			src: "/showcases/B43F3CD4-C29C-47AE-95AA-6D96CB407DF1_1_105_c.jpeg",
			width: 1078,
			height: 728,
			caption: "caption text",
		},

		{
			src: "/showcases/D73EBE81-46A2-49D9-8EE6-9C975BADAB03_1_105_c.jpeg",
			width: 886,
			height: 886,
			caption: "caption text",
		},
		{
			src: "/showcases/9615CBF3-6FA6-412F-9476-C315840B7593_1_105_c.jpeg",
			width: 768,
			height: 1024,
			caption: "caption text",
		},
		{
			src: "/showcases/DDA7E0AE-325C-4F83-97D1-7F438CC6054A_1_105_c.jpeg",
			width: 1182,
			height: 665,
			caption: "caption text",
		},
		{
			src: "/showcases/F8D03464-78B5-4466-AE29-4959682E1F86_1_105_c.jpeg",
			width: 886,
			height: 886,
			caption: "caption text",
		},
	];

	const bgVisible = ref(false);

	const throttleToggle = useThrottleFn(toggle, 520);

	function toggle(index) {
		const element = document.querySelector(`#figure-${index}`);
		const { top, left, width, height } = element.getBoundingClientRect();
		const radio = width / height;
		const { innerWidth, innerHeight } = window;

		let end = {};

		if (innerWidth >= innerHeight) {
			end.height = innerHeight;
			end.width = end.height * radio;
		} else {
			end.width = innerWidth;
			end.height = end.width / radio;
		}
		end.x = (innerWidth - end.width) / 2;
		end.y = (innerHeight - end.height) / 2;

		if (element.classList.contains("z-20")) {
			document.body.style.overflow = "auto";
			setTimeout(() => element.classList.remove("z-20"), 300);
		} else {
			element.classList.add("z-20");
			document.body.style.overflow = "hidden";
		}

		bgVisible.value = !bgVisible.value;

		gsap.to(element, {
			x: end.x - left,
			y: end.y - top,
			scale: end.width / width,
			duration: 0.5,
			ease: "power2.inOut",
			onComplete: (e) => {},
		});
	}

	function close() {
		const index = Array.from(document.querySelectorAll(".photo")).findIndex(
			(element) => element.classList.contains("z-20"),
		);
		if (index > -1) {
			toggle(index);
		}
	}

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
			onComplete: (e) =>
				items.forEach((item) => item.classList.add("origin-top-left")),
		});
	});
</script>

<style>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
