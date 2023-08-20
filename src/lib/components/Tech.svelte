<script lang="ts">
	import type { TechType } from '$lib/models/Tech';
	import type { ComponentType } from 'svelte';
	import Hexagonal from './Icons/Hexagonal.svelte';
	import Kotlin from './Icons/Kotlin.svelte';
	import Python from './Icons/Python.svelte';
	import Typescript from './Icons/Typescript.svelte';
	import Golang from './Icons/Golang.svelte';
	import Java from './Icons/Java.svelte';
	import Rust from './Icons/Rust.svelte';
	import Html from './Icons/HTML.svelte';
	import Css3 from './Icons/CSS3.svelte';
	import PostgreSql from './Icons/PostgreSQL.svelte';
	import MySql from './Icons/MySQL.svelte';
	import Mongo from './Icons/Mongo.svelte';
	import Redis from './Icons/Redis.svelte';
	import Minio from './Icons/Minio.svelte';
	import Android from './Icons/Android.svelte';
	import Compose from './Icons/Compose.svelte';
	import Svelte from './Icons/Svelte.svelte';
	import React from './Icons/React.svelte';
	import TailwindCss from './Icons/TailwindCSS.svelte';
	import Figma from './Icons/Figma.svelte';
	import NextJs from './Icons/NextJS.svelte';
	import Docker from './Icons/Docker.svelte';
	import Jenkins from './Icons/Jenkins.svelte';
	import NodeJs from './Icons/NodeJS.svelte';
	import Gradle from './Icons/Gradle.svelte';
	import Git from './Icons/Git.svelte';
	import Vite from './Icons/Vite.svelte';
	import SqLite from './Icons/SQLite.svelte';
	import Javascript from './Icons/Javascript.svelte';

	export let tech: TechType;

	function getIcon(tech: TechType): ComponentType {
		switch (tech) {
			case 'KOTLIN':
				return Kotlin;
			case 'PYTHON':
				return Python;
			case 'TYPESCRIPT':
				return Typescript;
			case 'JAVASCRIPT':
				return Javascript;
			case 'GO':
				return Golang;
			case 'JAVA':
				return Java;
			case 'RUST':
				return Rust;
			case 'HTML5':
				return Html;
			case 'CSS3':
				return Css3;
			case 'SQLITE':
				return SqLite;
			case 'POSTGRESQL':
				return PostgreSql;
			case 'MYSQL':
				return MySql;
			case 'MONGO':
				return Mongo;
			case 'REDIS':
				return Redis;
			case 'MINIO':
				return Minio;
			case 'ANDROID':
				return Android;
			case 'COMPOSE':
				return Compose;
			case 'SVELTE':
				return Svelte;
			case 'REACT':
				return React;
			case 'TAILWIND':
				return TailwindCss;
			case 'FIGMA':
				return Figma;
			case 'NEXTJS':
				return NextJs;
			case 'DOCKER':
				return Docker;
			case 'JENKINS':
				return Jenkins;
			case 'NODEJS':
				return NodeJs;
			case 'GRADLE':
				return Gradle;
			case 'GIT':
				return Git;
			case 'VITE':
				return Vite;
		}
	}
</script>

<div
	class="tech flex h-[72px] w-16 items-center justify-center rounded-md fill-transparent stroke-secondary text-secondary transition-all duration-200 hover:scale-110 hover:fill-secondary hover:text-on-secondary"
>
	<span class="absolute -z-10 text-transparent"><Hexagonal /></span>
	<span class="h-8 w-8"><svelte:component this={getIcon(tech)} /></span>
</div>
