<template>
		<nav class="flex place-content-between max-w-4xl mx-auto navbar py-3 mb-5 items-center items-baseline mt-2 ">
				<div>
						<button class="p-1 ml-1 md:ml-5" @click="$router.back()">

						<svg viewBox="30 130 70 68" height="15px" xmlns="http://www.w3.org/2000/svg" class="stroke-neutral-900 dark:stroke-neutral-100" >
      <path
         style="fill:none;stroke-width:12;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 96.630867,166.92221 H 36.295308"
         id="path842" />
      <path
         id="path844"
         style="fill:none;stroke-width:45.3543;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 137.5332,630.5332 234.04102,534.02539 137.5332,630.88672 234.04102,727.75 137.5332,631.24023"
         transform="scale(0.26458333)"
         sodipodi:nodetypes="ccccc" />
						</svg>

						</button>
						<NuxtLink class="mx-6" :to="localePath('/')">{{ $t('Home') }}</NuxtLInk>
						<NuxtLink class="mx-6" :to="localePath('/projects')">{{ $t('Projects')  }}</NuxtLink>
				</div>
				<div>
						<ColorSwitch class="inline"/>
						<LangSwitch />
				</div>
		</nav>
</template>
