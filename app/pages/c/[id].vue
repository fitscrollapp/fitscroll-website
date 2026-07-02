<script setup lang="ts">
// Challenge landing page — the shareable https link behind in-app
// challenges. With the app installed, iOS Universal Links open the app
// directly (see /.well-known/apple-app-site-association); without it,
// this page shows the challenge + App Store button.
const route = useRoute()
const id = String(route.params.id || '').toUpperCase()

interface Challenge {
  id: string
  from_username: string
  exercise: string
  target_reps: number
}

// Server-side fetch (no CORS constraints; API is a sibling service).
const { data: challenge } = await useAsyncData<Challenge | null>(
  `challenge-${id}`,
  async () => {
    try {
      return await $fetch<Challenge>(`https://api.fit-scroll.app/v1/challenges/${id}`)
    } catch {
      return null
    }
  },
)

const exerciseNames: Record<string, string> = {
  squat: 'Squats',
  pushUp: 'Push-ups',
  jumpingJacks: 'Jumping Jacks',
  lunge: 'Lunges',
}
const exerciseEmoji: Record<string, string> = {
  squat: '🦵',
  pushUp: '💪',
  jumpingJacks: '🤸',
  lunge: '🚶',
}

const exerciseLabel = computed(() =>
  challenge.value ? (exerciseNames[challenge.value.exercise] ?? challenge.value.exercise) : '',
)
const emoji = computed(() =>
  challenge.value ? (exerciseEmoji[challenge.value.exercise] ?? '🔥') : '🔥',
)

// Custom-scheme fallback keeps working even when Universal Links haven't
// validated yet (e.g. freshly-installed app, AASA cache).
const appLink = computed(() => {
  if (!challenge.value) return 'fitscroll://challenge'
  const c = challenge.value
  return `fitscroll://challenge?id=${c.id}&ex=${c.exercise}&target=${c.target_reps}&from=${encodeURIComponent(c.from_username)}`
})

const appStoreURL = 'https://apps.apple.com/app/id6762100402'

useHead(() => ({
  title: challenge.value
    ? `${challenge.value.from_username} challenges you — ${challenge.value.target_reps} ${exerciseLabel.value} | FitScroll`
    : 'FitScroll Challenge',
  meta: challenge.value
    ? [
        {
          property: 'og:title',
          content: `🔥 ${challenge.value.from_username} challenges you to ${challenge.value.target_reps} ${exerciseLabel.value}!`,
        },
        {
          property: 'og:description',
          content: 'Accept the challenge in FitScroll — your camera counts every rep.',
        },
      ]
    : [],
}))
</script>

<template>
  <div class="min-h-screen bg-[#0D1117] text-white flex items-center justify-center px-6">
    <div class="max-w-md w-full text-center py-16">
      <template v-if="challenge">
        <div
          class="mx-auto w-24 h-24 rounded-full bg-gradient-to-b from-[#22F4A8] to-[#0fae77] flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(34,244,168,0.35)]"
        >
          {{ emoji }}
        </div>

        <h1 class="mt-8 text-3xl font-black">
          {{ challenge.from_username }} challenges you!
        </h1>
        <p class="mt-3 text-5xl font-black text-[#22F4A8]">
          {{ challenge.target_reps }}
          <span class="text-2xl align-middle text-white/80">{{ exerciseLabel }}</span>
        </p>
        <p class="mt-4 text-white/60">
          Open FitScroll, point the camera at yourself and beat the target —
          every rep is counted automatically.
        </p>

        <a
          :href="appLink"
          class="mt-8 block w-full rounded-2xl bg-[#22F4A8] py-4 text-lg font-extrabold text-[#0D1117] shadow-[0_5px_0_#16a874] active:translate-y-[3px] active:shadow-[0_2px_0_#16a874] transition-all"
        >
          ⚡ Accept in FitScroll
        </a>

        <p class="mt-6 text-sm text-white/50">Don't have the app yet?</p>
        <a :href="appStoreURL" class="mt-3 inline-block">
          <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-12" >
        </a>
      </template>

      <template v-else>
        <div class="text-6xl">🤔</div>
        <h1 class="mt-6 text-2xl font-black">Challenge not found</h1>
        <p class="mt-3 text-white/60">
          This challenge link is invalid or has expired. Ask your friend to
          send a new one — or start your own!
        </p>
        <a :href="appStoreURL" class="mt-8 inline-block">
          <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-12" >
        </a>
      </template>
    </div>
  </div>
</template>
