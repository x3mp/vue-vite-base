# Vue Project Boilerplate

This boilerplate contains a proper Vue.js + Vite set-up using Vue Router.
It's using the latest stable version of Vue 3 and Vite.

If you don't want to use this repo but create your own instaed here's how to create a proper base using Vue, Vue Router and Vite.

## Set-up Vue project (with Router):

### Creating new project:

`npm create vite@latest project-name`

### Delete useless files:

- `src/components/HelloWorld.vue`
- `src/assets/vue.svg`
- `public/` folder

### Create folder structure:

- `src/layouts`
- `src/views`

### Create files:

- `src/views/HomeView.vue` This is your homepage.
- `src/layouts/DefaultLayout.vue` the default layout.

#### HomeView.Vue

```
<script setup></script>

<template></template>
```

#### DefaultLayout.vue:

```
<script setup></script>

<template>
	<main>
		<RouterView />
	</main>
</template>
```

### Install Vue Router:

`npm install vue-router`

## Create Vue Router index.js file

1. Create router folder in `src/`
2. Inside router folder create `index.js` file.

#### index.js file

```
import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";

import HomeView from "@/views/HomeView.vue";

const routes = [
	{
		path: "/",
		component: DefaultLayout,
		children: [
			{
				path: "",
				name: "home",
				component: HomeView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
```
