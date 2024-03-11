<template>
	<div
		class="px-4 md:px-10 py-20 md:py-40 grid grid-cols-4 grid-rows-3 items-center justify-items-center gap-x-4 md:gap-x-20 gap-y-4 md:gap-y-10 max-w-screen-lg m-auto opacity-0 box"
	>
		<div class="text-center mb-6 order-4 col-span-4 logo">
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
			class="photo bg-white/10 cursor-pointer object-contain"
			:alt="item.caption"
			v-for="(item, index) in sources"
			@click="throttleOpen(index)"
			:style="{ order: index }"
			:id="'figure-' + index"
		/>

		<div
			v-if="activeIndex > -1"
			class="fixed inset-0 bg-transparent cursor-pointer z-10 grid place-items-center"
			style="color-mix: multiply"
			id="mask"
			@click="close"
		>
			<NuxtImg
				:src="sources[activeIndex].src"
				:width="sources[activeIndex].width"
				:height="sources[activeIndex].height"
				id="active-image"
				class="m-auto will-change-transform"
			/>
		</div>
	</div>
</template>

<script setup>
	import { gsap } from "gsap";

	const sources = [
		{
			src: "/showcases/2.webp",
			width: 1400,
			height: 942,
			caption: "caption text",
		},
		{
			src: "/showcases/1.webp",
			width: 1400,
			height: 1917,
			caption: "caption text",
		},
		{
			src: "/showcases/7.webp",
			width: 1400,
			height: 1038,
			caption: "caption text",
		},

		{
			src: "/showcases/4.webp",
			width: 1400,
			height: 1212,
			caption: "caption text",
		},
		{
			src: "/showcases/5.webp",
			width: 1400,
			height: 1796,
			caption: "caption text",
		},
		{
			src: "/showcases/6.webp",
			width: 1400,
			height: 988,
			caption: "caption text",
		},
		{
			src: "/showcases/3.webp",
			width: 1400,
			height: 1672,
			caption: "caption text",
		},
		{
			src: "/showcases/8.webp",
			width: 1400,
			height: 1142,
			caption: "caption text",
		},
	];

	const throttleOpen = useThrottleFn(open, 520);

	const activeIndex = ref(-1);

	function open(index) {
		activeIndex.value = index;
		document.body.style.overflow = "hidden";
		nextTick(() => {
			const activeImage = document.querySelector("#active-image");
			const activeImageRect = activeImage.getBoundingClientRect();

			const originalImage = document.querySelector(`#figure-${index}`);
			const originalImageRect = originalImage.getBoundingClientRect();

			const scaleRadio = originalImageRect.width / activeImageRect.width;

			originalImage.classList.toggle("invisible");

			const { x, y } = getScaledClientRect(activeImage, scaleRadio);

			gsap.from(activeImage, {
				x: originalImageRect.x - x,
				y: originalImageRect.y - y,
				scale: scaleRadio,
				duration: 0.5,
				ease: "power2.inOut",
				onComplete: (e) => {},
			});

			const mask = document.querySelector("#mask");
			gsap.to(mask, {
				backgroundColor: "rgba(0,0,0)",
				duration: 0.5,
				ease: "power2.inOut",
			});
		});
	}

	function close() {
		const index = activeIndex.value;
		const activeImage = document.querySelector("#active-image");
		const activeImageRect = activeImage.getBoundingClientRect();

		const originalImage = document.querySelector(`#figure-${index}`);
		const originalImageRect = originalImage.getBoundingClientRect();

		const scaleRadio = originalImageRect.width / activeImageRect.width;

		const { x, y } = getScaledClientRect(activeImage, scaleRadio);
		gsap.to(activeImage, {
			x: originalImageRect.x - x,
			y: originalImageRect.y - y,
			scale: scaleRadio,
			duration: 0.5,
			ease: "power2.inOut",
			onComplete: (e) => {
				originalImage.classList.toggle("invisible");
				activeIndex.value = -1;
				document.body.style.overflow = "auto";
			},
		});

		const mask = document.querySelector("#mask");
		gsap.to(mask, {
			backgroundColor: "rgba(0,0,0,0)",
			duration: 0.5,
			ease: "power2.inOut",
		});
	}

	function getScaledClientRect(element, radio) {
		// 获取元素原始的位置信息
		const rect1 = element.getBoundingClientRect();

		// 计算缩放后的元素大小
		const width = rect1.width * radio;
		const height = rect1.height * radio;

		// 计算缩放后的元素中心点
		const { innerWidth, innerHeight } = window;
		const centerX = innerWidth / 2;
		const centerY = innerHeight / 2;

		// 计算缩放后的元素位置
		const rect2 = {
			x: centerX - width / 2,
			y: centerY - height / 2,
			width,
			height,
		};

		return rect2;
	}

	onMounted(() => {
		const box = document.querySelector(".box");
		box && box.classList.remove("opacity-0");

		const items = document.querySelectorAll(".photo");
		gsap.from(items, {
			ease: "power2.inOut",
			duration: 0.5,
			opacity: 0,
			scale: 0.8,
			stagger: {
				each: 0.1,
				from: "random",
			},
		});
	});
</script>
