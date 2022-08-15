<template>
		<div>
				<div class="embed-controls">

				<button class="col-start-2"  @click="toggle()">
						<p>Toggle</p>
				</button>

				<a :href="[src]" class="ml-auto mr-1 hover:no-underline" target=”_blank”>
						<p>⧉</p>
				</a>
				</div>
		<embed v-if="show" class="min-w-full min-h-screen" :src="[src]"/>
		</div>
</template>

<script setup lang="ts">
 defineProps(['src']);
</script>
<script lang="ts">
 export default{
		 head() {
				 return {
						 title: "Projects",
				 }
		 },
		 data(){
				 return{
						 show: true,
				 }
		 },
		 methods:{
				 toggle(cat) {
						 this.show = !this.show;
				 }

		 }
 }
</script>
