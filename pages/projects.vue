<script>
 export default{
		 head() {
				 return {
						 title: "Projects",
				 }
		 },
		 data: function(){
				 return{
						 cat: 'sw',
				 }
		 }
 }
</script>
<template>
		<div>
				<nav class="flex lg:flex-row max-w-4xl mx-auto justify-end py-3 navbar">
				<ColorSwitch class="inline"/>
				<LangSwitch />
				</nav>
				<div class="section">
						<div class="multiselector">
								<div v-if="cat == 'hw'" class="border-4 min-w-full border-orange-500 text-center py-3">
										<button @click="cat = 'sw'" class="text-xl">Software</button>
								</div>
								<div v-else class="border-4 min-w-full border-orange-500 text-center py-3  border-b-0 border-r-0">
										<button @click="cat = 'sw'" class="text-xl">Software</button>
								</div>
								<div v-if="cat == 'hw'" class="border-4 min-w-full border-blue-500 text-center py-3 border-b-0 border-l-0">
										<button @click="cat = 'hw'" class="text-xl">Hardware</button>
								</div>
								<div v-else class="border-4 min-w-full border-blue-500 text-center py-3">
										<button @click="cat = 'hw'" class="text-xl">Hardware</button>
								</div>
						</div>
						<HwProjects class="no-anim border-4 px-5 py-2 m-0 border-blue-500 border-t-0" v-if="cat == 'hw'"/>
						<SwProjects class="no-anim border-4 px-5 py-2 m-0 border-orange-500 border-t-0" v-else/>
				</div>

		</div>
</template>
