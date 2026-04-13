<script setup lang="ts">
defineProps<{
  title: string
  updated?: string
}>()
</script>

<template>
  <div class="min-h-screen bg-dark-400 text-white">
    <!-- Ambient glows -->
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-500 blur-[160px] opacity-15"></div>
      <div class="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500 blur-[180px] opacity-12"></div>
    </div>

    <!-- Nav -->
    <nav class="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center font-black text-lg">F</div>
        <span class="font-bold text-lg">FitScroll</span>
      </NuxtLink>
      <NuxtLink to="/" class="text-sm text-white/60 hover:text-white transition">← Back</NuxtLink>
    </nav>

    <main class="max-w-3xl mx-auto px-6 py-12">
      <h1 class="text-4xl sm:text-5xl font-black mb-3">{{ title }}</h1>
      <p v-if="updated" class="text-sm text-white/50 mb-12">Last updated: {{ updated }}</p>

      <article class="prose-content">
        <slot />
      </article>
    </main>

    <footer class="max-w-4xl mx-auto px-6 py-12 mt-12 border-t border-white/5 text-sm text-white/40 flex flex-col sm:flex-row gap-4 justify-between items-center">
      <span>© {{ new Date().getFullYear() }} FitScroll. Move to unlock.</span>
      <div class="flex gap-6">
        <NuxtLink to="/privacy" class="hover:text-white transition">Privacy</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-white transition">Terms</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-white transition">Contact</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.prose-content :deep(h2) {
  @apply text-2xl font-bold mt-12 mb-4 text-white;
}
.prose-content :deep(h3) {
  @apply text-lg font-semibold mt-8 mb-3 text-white;
}
.prose-content :deep(p) {
  @apply text-white/75 leading-relaxed mb-4;
}
.prose-content :deep(ul) {
  @apply text-white/75 leading-relaxed mb-4 pl-6 list-disc space-y-2;
}
.prose-content :deep(a) {
  @apply text-amber-500 hover:text-amber-400 transition underline;
}
.prose-content :deep(strong) {
  @apply text-white font-semibold;
}
</style>
