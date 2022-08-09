<script lang="ts">
 export default{
  mounted() {
    this.init();
  },
		 head() {
				 return {
						 title: "Projects",
				 }
		 },
		 data(){
				 return{
						 cat: 'sw',
				 }
		 },
		 methods:{
				 init(){
						 console.log("init");
						 this.cat = localStorage.getItem('projectCategory');
						 if(this.cat == null){
								 this.cat = 'sw';
						 }
				 },
				 switchCat(cat) {
						 this.cat = cat;
						 localStorage.setItem('projectCategory', cat);
				 }

		 }
 }
</script>

<template>
		<div class="flex flex-col min-h-screen">
				<navbar class="anim"/>
				<div class="section anim grow">
						<div class="multiselector anim">
								<div v-if="cat == 'hw'" class="btn-2 border-4 border-orange-500">
										<button @click="switchCat('sw')" class="text-xl">Software</button>
								</div>
								<div v-else class="btn-2 border-orange-500 border-4 border-b-0 border-r-0">
										<button @click="switchCat('sw')" class="text-xl">Software</button>
								</div>
								<div v-if="cat == 'hw'" class="btn-2 border-4 border-blue-500 border-b-0 border-l-0">
										<button @click="switchCat('hw')" class="text-xl">Hardware</button>
								</div>
								<div v-else class="btn-2 border-4 border-blue-500 ">
										<button @click="switchCat('hw')" class="text-xl">Hardware</button>
								</div>
						</div>
						<HwProjects class="no-anim dark:bg-neutral-800 bg-neutral-100 border-4 px-5 py-2 m-0 border-blue-500 border-t-0" v-if="cat == 'hw'"/>
						<SwProjects class="no-anim dark:bg-neutral-800 bg-neutral-100 border-4 px-5 py-2 m-0 border-orange-500 border-t-0" v-else/>
				</div>
				<footr/>
		</div>
</template>
