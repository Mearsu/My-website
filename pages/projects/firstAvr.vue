<script>
// This will also work in `<script setup>`
definePageMeta({
  layout: "project",
});
export default {
		 async asyncData ({ $content }) {
				 const page = await $content('home').fetch()
				 return {
						 page
				 }
 }}
</script>

<template>
		<div>
				<h1>{{ $t('hw.p1.title')  }}</h1>
				<p> {{ $t('hw.p1.p1')  }}</p>
				<p> {{ $t('hw.p1.p2')  }}</p>
				<br />
				<p> {{ $t('hw.p1.p3')  }}</p>
				<p> {{ $t('hw.p1.p4')  }}</p>
				<p> {{ $t('hw.p1.p5')  }}</p>
				<p> {{ $t('hw.p1.p6')  }}</p>
				<p> {{ $t('hw.p1.p7')  }}</p>
				<p> {{ $t('hw.p1.p8')  }} <a href="/hw/p1/avr.pdf">{{ $t('my-projects.schematic') }}</a>.</p>

		</div>
</template>
