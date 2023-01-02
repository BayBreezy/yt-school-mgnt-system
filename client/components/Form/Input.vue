<template>
	<div class="w-full">
		<input v-model="value" @blur="handleBlur" @input="handleChange" :type="type" v-bind="$attrs" />
		<p class="text-xs mt-1">
			<span>&nbsp;</span>
			<TransitionScale appear group>
				<span class="text-gray-400 dark:text-gray-300" v-if="!errorMessage && hint">{{
					hint
				}}</span>
				<span class="text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
			</TransitionScale>
		</p>
	</div>
</template>

<script setup lang="ts">
	import { useField } from "vee-validate";

	const props = withDefaults(
		defineProps<{
			type?: string;
			name: string;
			rules?: string;
			modelValue?: string | number;
			label?: string;
			hint?: string;
		}>(),
		{
			type: "text",
		}
	);

	const { value, errorMessage, handleBlur, handleChange } = useField(ref(props.name), props.rules, {
		initialValue: props.modelValue,
		label: props.label || props.name,
	});
</script>

<script lang="ts">
	export default { inheritAttrs: false };
</script>
