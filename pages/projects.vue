<script>
 export default {
	 data: function(){
		 return{
			 cat: 'sw',
		 }
	 }
 }
</script>
<template>
	<div>
		<ColorSwitch class="inline"/>
		<LangSwitch />
		<div class="section">
			<div class="multiselector">
				<div class="btn ">
				<button  @click="cat = 'sw'">Software</button>
				</div>
				<div class="btn ">
				<button @click="cat = 'hw'">Hardware</button>
				</div>
			</div>
			<HwProjects v-if="cat == 'hw'"/>
			<SwProjects v-else/>
		</div>

	</div>
</template>
