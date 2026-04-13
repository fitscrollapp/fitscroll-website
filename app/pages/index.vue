<script setup lang="ts">
const features = [
  {
    icon: 'lucide:hand',
    title: 'Stop doomscrolling',
    body: 'Lock Instagram, TikTok, YouTube, X — whatever keeps you stuck.',
  },
  {
    icon: 'lucide:camera',
    title: 'On-device pose detection',
    body: "Your camera counts every rep. No video leaves your phone.",
  },
  {
    icon: 'lucide:coins',
    title: 'Earn screen time',
    body: 'Every push-up or squat earns minutes back. Move to unlock.',
  },
  {
    icon: 'lucide:shield-check',
    title: '100% private',
    body: 'Everything happens locally. No tracking, no uploads, ever.',
  },
  {
    icon: 'lucide:bell',
    title: 'Smart unlock alerts',
    body: 'Get warned a minute before your apps lock again.',
  },
  {
    icon: 'lucide:line-chart',
    title: 'Streak analytics',
    body: 'Daily charts show reps, minutes earned, and consistency.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-dark-400 text-white overflow-x-hidden">
    <!-- Ambient glows -->
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-500 blur-[160px] opacity-25"></div>
      <div class="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500 blur-[180px] opacity-20"></div>
      <div class="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-navy-light blur-[200px] opacity-40"></div>
    </div>

    <!-- Nav -->
    <nav class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center font-black text-lg">F</div>
        <span class="font-bold text-lg">FitScroll</span>
      </div>
      <a
        href="https://apps.apple.com/app/fitscroll"
        class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold transition"
      >
        Download
        <Icon name="lucide:arrow-right" class="w-4 h-4" />
      </a>
    </nav>

    <!-- Hero -->
    <section class="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-500 uppercase tracking-wider mb-8">
        <Icon name="lucide:sparkles" class="w-4 h-4" />
        Now on iOS
      </div>

      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
        Move to
        <br />
        <span class="gradient-text">unlock.</span>
      </h1>

      <p class="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
        Lock the apps that steal your day. Earn them back with real push-ups and squats. Your camera counts every rep, on-device.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://apps.apple.com/app/fitscroll"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-amber-500 font-bold shadow-xl shadow-brand-500/40 hover:scale-105 transition"
        >
          <Icon name="lucide:download" class="w-5 h-5" />
          Download on iOS
        </a>
        <span class="text-sm text-white/50">Free for 7 days · Then from $4.99/mo</span>
      </div>
    </section>

    <!-- Features -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-black mb-4">Built to break the loop.</h2>
        <p class="text-white/60 max-w-xl mx-auto">Everything you need to turn doomscrolling into a habit you actually earn.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="f in features"
          :key="f.title"
          class="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-500/40 hover:bg-white/[0.07] transition"
        >
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/20 to-amber-500/20 border border-white/10 flex items-center justify-center mb-4">
            <Icon :name="f.icon" class="w-6 h-6 text-amber-500" />
          </div>
          <h3 class="text-xl font-bold mb-2">{{ f.title }}</h3>
          <p class="text-white/60 text-sm leading-relaxed">{{ f.body }}</p>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-black mb-4">Three steps. Every day.</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center text-2xl font-black mb-4">1</div>
          <h3 class="text-xl font-bold mb-2">Pick your distractions</h3>
          <p class="text-white/60 text-sm">Choose which apps get locked and set a daily limit.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center text-2xl font-black mb-4">2</div>
          <h3 class="text-xl font-bold mb-2">Hit the limit, get blocked</h3>
          <p class="text-white/60 text-sm">FitScroll shields those apps the moment you run out of time.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center text-2xl font-black mb-4">3</div>
          <h3 class="text-xl font-bold mb-2">Move to earn more</h3>
          <p class="text-white/60 text-sm">Drop into a quick workout. Each rep buys minutes back.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-4xl mx-auto px-6 py-24 text-center">
      <div class="p-12 rounded-3xl bg-gradient-to-br from-brand-500/20 to-amber-500/10 border border-brand-500/30">
        <h2 class="text-4xl sm:text-5xl font-black mb-4">Take your time back.</h2>
        <p class="text-white/70 mb-8 max-w-xl mx-auto">Stop trading minutes for scrolls. Start trading them for reps.</p>
        <a
          href="https://apps.apple.com/app/fitscroll"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-amber-500 font-bold shadow-xl shadow-brand-500/40 hover:scale-105 transition"
        >
          <Icon name="lucide:download" class="w-5 h-5" />
          Download on iOS
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="max-w-6xl mx-auto px-6 py-12 border-t border-white/5 text-sm text-white/40 flex flex-col sm:flex-row gap-4 justify-between items-center">
      <span>© {{ new Date().getFullYear() }} FitScroll. Move to unlock.</span>
      <div class="flex gap-6">
        <a href="/privacy" class="hover:text-white transition">Privacy</a>
        <a href="/terms" class="hover:text-white transition">Terms</a>
        <a href="mailto:hello@fit-scroll.app" class="hover:text-white transition">Contact</a>
      </div>
    </footer>
  </div>
</template>
