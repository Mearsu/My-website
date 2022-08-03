<script setup lang="ts">
 import navbar from "~/components/layout/navbar.vue"
 import footr from "~/components/layout/footr.vue"
 import socials from "~/components/elements/Socials.vue"
 import dev from "~/components/elements/svgs/dev.vue"
 import server from "~/components/elements/svgs/server.vue"
 const layout = "default";
 const count = ref(0);
 const increment = () => count.value++;
 let data = ["idk"];
const config = {};

config.head = {
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/favicon.png' }
  ],
};

</script>


<script lang="ts">
 export default {
		 head() {
				 return {
						 title: "Matěj Vrba",
				 }
		 },
}
</script>

<template>
		<!-- <div class="dark:bg-slate-700 h-full bg-img"> -->
		<!-- <div class="dark:bg-slate-700 h-auto bg-gradient-to-tl from-pink-500 to-blue-500 dark:from-green-900 dark:to-teal-900"> -->
		<div class="dark:bg-neutral-900 bg-neutral-50">

				<div class="bg-neutral-100 dark:bg-neutral-800">
						<navbar class="px-5"/>
				</div>
						<svg viewBox="0 0 160 200" class="bg-svg5" xmlns="http://www.w3.org/2000/svg">
								<path
       d="M 21.678979,0 V 21.678979 H 67.672314 V 178.31889 H 89.351292 V 21.678979 A 21.67863,21.67863 0 0 0 83.001657,6.3501669 21.67863,21.67863 0 0 0 67.672314,5.3061811e-4 V 0 Z m 0,21.678979 h -5.3e-4 V 5.3061811e-4 A 21.67863,21.67863 0 0 0 6.349636,6.349636 21.67863,21.67863 0 0 0 0,21.678979 V 178.32102 h 21.678979 z m 113.665641,0 V 178.32102 h 5.3e-4 v 21.67845 a 21.67863,21.67863 0 0 0 15.32882,-6.34911 21.67863,21.67863 0 0 0 6.34963,-15.32934 V 21.678979 Z m 0,156.642041 H 89.351292 v 5.3e-4 H 67.672844 A 21.67863,21.67863 0 0 0 74.02248,193.65036 21.67863,21.67863 0 0 0 89.351292,200 h 45.993328 z" />								/>
						</svg>
						<svg viewBox="0 0 142 142" class="bg-svg1" xmlns="http://www.w3.org/2000/svg">
								<path
         d="m 85.615662,71.445999 a 33.833023,33.833023 0 0 1 -16.916512,29.300261 33.833023,33.833023 0 0 1 -33.833024,0 33.833023,33.833023 0 0 1 -16.916511,-29.300261 h 33.833024 z" />						</svg>
						<svg viewBox="0 0 142 94" class="bg-svg2" xmlns="http://www.w3.org/2000/svg">
								<path
           d="m -51.798569,-71.546204 a 33.833023,33.833023 0 0 1 -16.916512,29.300258 33.833023,33.833023 0 0 1 -33.833019,-10e-7 33.833023,33.833023 0 0 1 -16.91651,-29.300257 h 33.833018 z"
           transform="scale(-1)" />
						</svg>

						<svg viewBox="0 0 142 142" class="bg-svg3" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M 21.21369,0 C 9.4618792,0 0,9.4588831 0,21.210717 V 121.43207 c 0,11.75182 9.4618792,21.21369 21.21369,21.21369 h 100.21838 c 11.75181,0 21.21369,-9.46187 21.21369,-21.21369 V 21.210717 C 142.64576,9.4588831 133.18388,0 121.43207,0 Z m 24.979345,35.555265 h 50.256744 c 5.893141,0 10.637761,4.744592 10.637761,10.637753 v 50.256738 c 0,5.893164 -4.74462,10.637754 -10.637761,10.637754 H 46.193035 c -5.893137,0 -10.637759,-4.74459 -10.637759,-10.637754 V 46.193018 c 0,-5.893161 4.744622,-10.637753 10.637759,-10.637753 z"
								/>
						</svg>
						<svg viewBox="0 0 142 142" class="bg-svg4" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M 71.322994,0 0,101.44994 71.322994,143.85715 142.646,101.44994 Z"
								/>
						</svg>

				<div class="flex">
						<div class="w-14 md:flex-1 ">
						</div>
						<div class="md:max-w-4xl container w-fit mx-auto px-2 py-12 my-12 md:flex-1 grid">
								<h1 class="w-fit">{{ $t('title-1') }}<span class="text-orange-500">.</span></h1>
								<h1 class="w-fit">{{ $t('title-2') }}</h1>
								<h1 class="w-fit">{{ $t('title-3') }}</h1>
						</div>
				</div>

				<div class="darker">
						<div class="section">
								<h2 id="about">{{ $t('about')  }}</h2>
								<hr class="w-14 my-3 border-orange-500"/>
								<p>{{ $t('index-1') }}</p>
								<p>{{ $t('index-2') }}</p>
								<p>{{ $t('index-3') }} <a href="#contact">{{$t('here')}}</a></p>
						</div>
				</div>

				<div class="lighter">
						<div class="section">
								<h2 id="experience">{{$t('experience')}}</h2>
								<hr class="w-14 my-3 border-orange-500"/>
								<p>{{ $t('exp-1') }}</p>
								<p>{{ $t('exp-2') }}</p>
								<div class="grid grid-rows-4 grid-cols-2 md:grid-rows-2 md:grid-cols-4 justify-items-center">
											<span class="lang">
															C
											</span>
											<span class="lang">
															C++
											</span>
											<span class="lang">
															Rust
											</span>
											<span class="lang">
															HTML
											</span>
											<span class="lang">
															CSS
											</span>
											<span class="lang">
															JS
											</span>
											<span class="lang">
															Vue.js
											</span>
											<span class="lang">
															Nuxt.js
											</span>
								</div>
						</div>
				</div>
				<div class="darker">
						<div class="section">
								<h2 id="offer">{{$t('offer')}}</h2>
								<hr class="w-14 my-3 border-orange-500"/>
								<div class="grid grid-cols-2 gap-4">
										<div class="offer">
												<h3>{{ $t('offer-1-title')  }}</h3>
												<p class="text-base m-2">{{ $t('offer-1')  }}</p>
										</div>
										<div class="border-4 border-blue-500">
												<h3>{{ $t('offer-2-title')  }}</h3>
												<p class="text-base mx-2 my-2">{{ $t('offer-2')  }}</p>
										</div>
								</div>
				</div>
				</div>
				<div class="lighter">
						<div class="section">
								<h2 id="contact">{{$t('contact')}}</h2>
								<hr class="w-14 my-3 border-orange-500"/>
								<div class="socials">
										<socials></socials>
								</div>
					</div>
				</div>
				<footr/>
		</div>
</template>

