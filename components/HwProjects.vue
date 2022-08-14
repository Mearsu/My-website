<template>
	<div>
		<h2>{{ $t('hw-projects')  }}</h2>
		<br />

		<div class="project">
			<img src="/hw/p1/avr_hello_world.jpg" loading="lazy"/>
			<div>
				<div class="description">
					<div>
						<NuxtLink :to="localePath('/projects/firstAvr')">	<h3>{{ $t('hw.p1.title')  }}</h3></NuxtLink>
						<p>
							{{ $t('hw.p1.desc') }}
						</p>
					</div>
					<div class="btns">
						<div class="btn">
							<a href="/hw/p1/avr.pdf">
								<button>{{ $t('my-projects.schematic')  }}</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
