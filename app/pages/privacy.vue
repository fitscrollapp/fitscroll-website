<script setup lang="ts">
useHead({
  title: 'Privacy Policy — FitScroll',
  meta: [
    { name: 'description', content: 'FitScroll privacy policy. Everything runs on-device. No video is recorded, no data leaves your phone.' },
  ],
})
</script>

<template>
  <LegalLayout title="Privacy Policy" updated="April 13, 2026">
    <p>
      FitScroll is built around a simple promise: <strong>nothing leaves your phone unless you explicitly send it</strong>.
      This page explains what that means in practice and what data, if any, FitScroll handles.
    </p>

    <h2>Data we collect</h2>
    <p>
      FitScroll collects no personally identifiable information. We do not ask for your name, email, address, age, gender,
      or any other identifier to use the app. There is no account, no login, no cloud sync.
    </p>

    <h2>Camera and pose detection</h2>
    <p>
      FitScroll requests access to your camera to count exercise repetitions. Pose detection uses Apple's Vision framework,
      which runs entirely on-device. <strong>No video frames are recorded, stored, or transmitted</strong>. The camera
      feed exists only in memory while a workout is active and is discarded the moment you leave the workout screen.
    </p>

    <h2>Screen Time and app restrictions</h2>
    <p>
      FitScroll uses Apple's Family Controls, Managed Settings, and Device Activity frameworks to lock and unlock the apps
      you choose. The identifiers for these apps are opaque tokens managed by iOS — FitScroll cannot see the names, icons,
      or any usage metrics of the apps you restrict. The list of apps you select is stored locally on your device and
      never leaves it.
    </p>

    <h2>Analytics and crash reports</h2>
    <p>
      FitScroll uses Firebase Analytics and Firebase Crashlytics to understand aggregate product usage and to diagnose
      crashes. These collect anonymous, device-level event data (e.g. "workout started", "rep counted", "crash occurred")
      but never personal content, exercise videos, or app-restriction selections. If you would like to opt out of this
      telemetry entirely, disable "Allow Apps to Request to Track" in iOS Settings and deny App Tracking Transparency when
      prompted.
    </p>

    <h2>Subscriptions</h2>
    <p>
      Purchases are processed by Apple's App Store and managed by RevenueCat, which receives the anonymized subscription
      receipt from Apple. RevenueCat uses this to verify your subscription status. No payment details pass through
      FitScroll's own servers — we don't have any.
    </p>

    <h2>Children's privacy</h2>
    <p>
      FitScroll is not directed at children under 13 and does not knowingly collect data from them. If you believe a
      minor is using the app in a way you'd like to discuss, please contact us.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      We may update this policy from time to time. Material changes will be announced inside the app and on this page.
      Your continued use of FitScroll after an update constitutes acceptance of the revised policy.
    </p>

    <h2>Contact</h2>
    <p>
      Questions about this policy? Reach us at <a href="mailto:hello@fitscroll.app">hello@fitscroll.app</a>.
    </p>
  </LegalLayout>
</template>
