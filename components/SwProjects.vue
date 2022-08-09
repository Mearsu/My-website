<template>
	<div>
		<h2>{{ $t('sw-projects')  }}</h2>
		<br />
		<!-- <div class="project">
			 <nuxt-img src="" alt="" loading="lazy"/>
			 <div>
			 <div class="description">
			 <div>
			 <NuxtLink to="projects/template">	<h3>My first project</h3></NuxtLink>
			 <p>
			 A, condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac! Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque, volutpat ac tincidunt vitae!
			 </p>
			 </div>
			 <div class="btns">
			 <div class="btn">
			 <a href="https://www.youtube.com/watch?v=3rwMjw77CVI">
			 <button>Source</button>
			 </a>
			 </div>
			 <div class="btn">
			 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
			 <button>Live</button>
			 </a>
			 </div>
			 </div>
			 </div>
			 </div>
			 </div> -->


		<div class="project">
			<img src="/my_website.png" loading="lazy"/>
			<div>
				<div class="description">
					<div>
						<NuxtLink to="projects/MyWebsite">	<h3>{{ $t('sw.p1.title')  }}</h3></NuxtLink>
						<p>
							{{ $t('sw.p1.desc') }}
						</p>
					</div>
					<div class="btns">
						<div class="btn">
							<a href="https://github.com/Mearsu/My-website">
								<button>Source</button>
							</a>
						</div>
						<div class="btn">
							<a href="https://matej-vrba.com">
								<button>Live</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
