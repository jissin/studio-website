<template>
  <div>
    <main class="z-10 relative bg-primary">
      <section>
        <transition name="fade">
          <gallery v-if="galleryVisible" />
        </transition>
      </section>

      <section class="py-40 bg-secondary">
        <div class="max-w-[40rem] m-auto px-10">
          <h1 class="font-heading text-5xl text-center truncate mb-10">
            WHAT WE DO
          </h1>
          <p class="text-xl text-inherit font-letter">
            {{ $t("biz_scope") }}
          </p>
        </div>
      </section>

      <section class="py-40">
        <div class="m-auto">
          <div class="px-10">
            <h1 class="font-heading text-5xl text-center truncate mb-10">
              COLLABS
            </h1>
          </div>

          <carousel />
        </div>
      </section>

      <section class="py-40 px-10 bg-secondary">
        <div class="max-w-[40rem] m-auto">
          <h1 class="font-heading text-5xl text-center truncate mb-10">
            FEATURES
          </h1>

          <features />
        </div>
      </section>

      <section class="[&>p]:mb-2 py-40 px-10 mx-auto flex flex-col gap-2">
        <div class="max-w-[40rem] m-auto font-letter">
          <h2 class="font-heading mb-2 text-2xl">About Zelo.</h2>
          <p class="text-lg text-text-secondary">
            {{ $t("about_p1") }}
          </p>
          <p class="text-lg text-text-secondary mt-1">
            {{ $t("about_p2") }}
          </p>

          <h2 class="font-heading mb-2 text-xl mt-4">The Team</h2>
          <p class="text-md text-text-secondary">
            {{ $t("team_intro") }}
          </p>

          <h2 class="font-heading mb-2 text-xl mt-4">The Policy</h2>

          <p class="text-md text-text-secondary">
            {{ $t("policy_p1") }}
          </p>

          <p class="text-md text-text-secondary mt-1">
            {{ $t("policy_p1") }}
          </p>

          <div
            class="w-20 border border-t border-dashed border-white/15 my-20 m-auto"
          ></div>

          <div
            class="text-letter bg-secondary w-full p-[2rem] rounded-sm text-center flex flex-col"
          >
            <h2 class="text-lg tracking-snug text-inherit">
              {{ $t("contact_via") }}
              <a class="underline font-bold" href="mailto:hi@Zelo.studio"
                >hi@Zelo.studio</a
              >
            </h2>

            <p class="text-text-secondary text-base mt-[0.5rem]">
              {{ $t("contact_msg_1") }}
            </p>

            <p class="text-base mt-[0.5rem] text-inherit font-bold">
              {{ $t("contact_msg_2") }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="flex flex-col p-10 sticky bottom-0 w-full z-0 bg-secondary">
      <p class="font-heading text-[30vw] opacity-10 leading-none">Zelo.</p>
    </footer>
  </div>
</template>

<script setup>
  const galleryVisible = ref(true);
  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
  const handleResize = useDebounceFn(() => {
    galleryVisible.value = false;
    setTimeout(() => {
      galleryVisible.value = true;
    }, 300);
  }, 100);
</script>

<style>
  html,
  body {
    background: #000;
    color: #fff;
  }

  @font-face {
    font-family: heading;
    src: url("~/assets/fonts/heading.woff2") format("woff2");
  }

  @font-face {
    font-family: letter;
    src: url("~/assets/fonts/letter.woff2") format("woff2");
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
