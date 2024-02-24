<template>
  <div class="carousel-wrapper my-20">
    <div class="carousel-animator">
      <div class="carousel-slides-container">
        <div v-for="item in images" class="carousel-slide">
          <NuxtImg
            alt=""
            width="400"
            height="300"
            class="poster"
            src="https://picsum.photos/400/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    images: {
      type: Array,
      required: true,
      default: () => {
        return [
          { src: "https://picsum.photos/400/300" },
          { src: "https://picsum.photos/400/300" },
        ];
      },
    },
    direction: {
      type: String,
      default: "left",
    },
  });

  const images = ref([]);

  onMounted(() => {
    if (process.client) {
      const imageWidth = 400;
      const screanWidth = window.innerWidth;

      images.value = repeatArray(
        props.images,
        ~~(((screanWidth / imageWidth) * 3) / props.images.length),
      );

      window.addEventListener("resize", () => {
        requestAnimationFrame(() => {
          const screanWidth = window.innerWidth;
          images.value = repeatArray(
            props.images,
            ~~(((screanWidth / imageWidth) * 3) / props.images.length),
          );
        });
      });
    } else {
      images.value = props.images;
    }
  });

  function repeatArray(array, times) {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(array);
    }
    return result;
  }
</script>

<style scoped>
  @keyframes slideCarousel {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .carousel-wrapper {
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 300px;
  }
  .carousel-animator {
    position: absolute;
    left: 50%;
    width: 100%;
    margin-left: -50%;
    animation: slideCarousel 20000ms linear infinite;
  }
  .carousel-slides-container {
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .carousel-slide {
    width: 400px;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    vertical-align: top;
    padding: 1px;
  }
</style>
