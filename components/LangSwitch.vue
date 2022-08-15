<script stetup lang="ts">
 export default{
		 head() {
				 return {
						 title: "Projects",
				 }
		 },
		 methods:{
				 checkPath(new_path):string {
					 let path = new_path;
					 const rExp : RegExp = /^\/(cz|en)\/(cz|en)\//;
						 // check if path begins with two language prefixes
					 if(rExp.test(path)){
						 return path.slice(0,3) + path.slice(6);
					 }
					 return path;
				 }

		 }
 }
</script>
<template>
		<nuxt-link class="mx-2 more-info" :to="checkPath(switchLocalePath('en'))">English
				<div class="popup">
						Uses cookies
						</div>
		</nuxt-link>
		<nuxt-link class="mx-2 more-info" :to="checkPath(switchLocalePath('cz'))">Česky
				<div class="popup">
						Používá cookies
						</div>
		</nuxt-link>
</template>
