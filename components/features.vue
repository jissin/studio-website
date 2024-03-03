<template>
  <ul class="font-letter grid grid-cols-1 md:grid-cols-2 gap-y-5 w-fit mx-auto">
    <li v-for="feature in features" :key="feature.title">
      <h2 class="text-xl leading-loose text-inherit">
        {{ $t(feature.title) }}
      </h2>
      <p class="text-text-secondary">{{ $t(feature.desc) }}</p>
    </li>
  </ul>
</template>

<script setup>
  const features = Array(8)
    .fill(null)
    .map((_, index) => ({
      title: `features_${index + 1}_title`,
      desc: `features_${index + 1}_desc`,
    }));
</script>
