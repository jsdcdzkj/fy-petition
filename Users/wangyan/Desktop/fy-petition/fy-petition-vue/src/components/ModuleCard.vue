<template>
	<div class="bg-card" :id="id">
		<div class="title">{{ title }}</div>
		<slot></slot>
	</div>
</template>

<script setup>
	import { string } from "vue-types";

	defineProps({
		id: string().def(""),
		title: string().def("标题")
	});
</script>
