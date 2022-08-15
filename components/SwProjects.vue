<template>
	<div>
		<h2>{{ $t('sw-projects')  }}</h2>
		<br />
    <ContentList :path="localePath('/projects/sw')" v-slot="{ list }">
        <div v-for="project in list" class="project" :key="project._path">
						<img :src="project.img" loading="lazy"/>
								<div class="description">
										<div>
												<NuxtLink :to="project._path">	<h3>{{ project.title  }}</h3></NuxtLink>
												<p>
														{{ project.description }}
												</p>
										</div>
										<div class="btns">
												<div class="btn" v-if="project.btn1">
														<a :href="project.btn1_href" v-if="project.btn1_nuxtlink.length === 0">
																<button>{{ project.btn1 }}</button>
														</a>
														<NuxtLink to="project.btn1_nuxtlink" v-else>
																<button>{{ project.btn1 }}</button>
														</NuxtLink>
												</div>
												<div class="btn" v-if="project.btn2">
														<a :href="project.btn2_href" v-if="project.btn2_nuxtlink.length === 0">
																<button>{{ project.btn2 }}</button>
														</a>
														<NuxtLink to="project.btn2_nuxtlink" v-else>
																<button>{{ project.btn2 }}</button>
														</NuxtLink>
												</div>
											</div>
								</div>
        </div>
    </ContentList>

	</div>
</template>
