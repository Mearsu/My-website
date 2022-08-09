<template>
		<nav class="flex lg:flex-row max-w-4xl mx-auto justify-end py-3 navbar items-center ">
			<span class="hidden md:inline-block">
				<a class="mx-3" href="#about">{{ $t('about') }}</a>
				<a class="mx-3" href="#experience">{{ $t('experience')  }}</a>
				<a class="mx-3" href="#offer">{{ $t('offer')  }}</a>
				<a class="mx-3" href="#projects">{{ $t('my-projects.title')  }}</a>
				<a class="mx-3" href="#contact">{{ $t('contact')  }}</a>
			</span>
				<ColorSwitch class="inline"/>
				<LangSwitch />
		</nav>
</template>
