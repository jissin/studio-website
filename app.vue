<template>
  <div>
    <main class="z-10 relative bg-primary">
      <gallery />

      <section class="py-40 px-10 bg-secondary">
        <h1 class="font-heading text-5xl text-center leading-loose">
          About us
        </h1>
        <div
          class="text-lg max-w-[40rem] m-auto [&>p]:mb-4 text-text-secondary text-center"
        >
          <p>
            Zelo. is a design & dev studio crafting superb website. we excel in
            both technical and design aspects of digital product development. I
            manage teams of all sizes and remain hands-on in crafting
            high-quality digital products.
          </p>
          <p>
            Our expertise bridges the gap between developers, designers, clients
            and other stakeholders, boosting productivity and ensuring project
            success.
          </p>
        </div>
      </section>

      <section class="py-40">
        <h1 class="font-heading text-5xl text-center leading-loose">
          PREVIOUS COLLABS
        </h1>

        <carousel />
      </section>

      <section class="bg-secondary py-40 px-10">
        <h1 class="font-heading text-5xl text-center leading-loose">
          features we deliver
        </h1>

        <ul class="flex flex-col items-center">
          <li>
            <h2 class="text-xl leading-loose text-inherit">
              design & development
            </h2>
            <p class="text-text-secondary">
              Beautiful design. Provide source code.
            </p>
          </li>
          <li>
            <h2 class="text-xl leading-loose text-inherit">affordable price</h2>
            <p class="text-text-secondary">Starting at $299.</p>
          </li>
          <li>
            <h2 class="text-xl leading-loose text-inherit">responsive</h2>
            <p class="text-text-secondary"></p>
          </li>
          <li>
            <h2 class="text-xl leading-loose text-inherit">performant</h2>
            <p class="text-text-secondary"></p>
          </li>
          <li>
            <h2 class="text-xl leading-loose text-inherit">a11y friendly</h2>
            <p class="text-text-secondary"></p>
          </li>
          <li>
            <h2 class="text-xl leading-loose text-inherit">free deploy</h2>
            <p class="text-text-secondary"></p>
          </li>
        </ul>
      </section>

      <section
        class="[&>p]:mb-2 max-w-[40rem] py-40 px-10 mx-auto flex flex-col gap-2"
      >
        <h1 class="font-heading leading-loose text-2xl">Why choose Zelo.</h1>
        <p class="text-lg text-text-secondary">
          Zelo. is independent and self-funded. We answer only to our community.
          We're committed to building a great platform for those who enjoy the
          art of photography, whether that's photographers themselves, curators,
          agencies, collectors, and anyone in-between.
        </p>
        <p class="text-lg text-text-secondary">
          The goal is to create a sustainable business that can support itself,
          but most importantly, one that can truly support photographers.
        </p>

        <h1 class="font-heading leading-loose text-xl">The Team</h1>
        <p class="text-md text-text-secondary">
          Zelo. is currently a one-person operation. Sam is doing engineering,
          design, support, and everything else in between! We would love to get
          to a point where we can hire a small team to help build and grow
          Zelo., but for now, we're staying small.
        </p>

        <h1 class="font-heading leading-loose text-xl">The Policy</h1>

        <p class="text-md text-text-secondary">
          Zelo. is currently a one-person operation. Sam is doing engineering,
          design, support, and everything else in between! We would love to get
          to a point where we can hire a small team to help build and grow
          Zelo., but for now, we're staying small.
        </p>

        <div
          class="w-20 border border-t border-dashed border-white/15 my-20 m-auto"
        ></div>

        <div
          class="bg-secondary w-full py-[2rem] rounded-sm text-center flex flex-col"
        >
          <h2 class="text-lg tracking-snug text-inherit">
            Contact us via <a class="underline font-bold">hi@Zelo.studio</a>
          </h2>

          <p class="text-text-secondary text-base mt-[0.5rem]">
            Describe your needs even a few words, and we'll handle the rest!
          </p>

          <p class="text-base mt-[0.5rem] text-inherit font-bold">
            Q1 2024 Available for work
          </p>
        </div>
      </section>
    </main>

    <footer class="flex flex-col p-10 bg-secondary sticky bottom-0 w-full z-0">
      <h1 class="font-heading"></h1>
      <p class="font-heading text-[30vw] opacity-10 leading-none">Zelo.</p>
    </footer>
  </div>
</template>

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
</style>
