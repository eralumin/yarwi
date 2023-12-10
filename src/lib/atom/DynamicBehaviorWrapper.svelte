<script lang="ts">
	import { onMount } from 'svelte';
	import type { DynamicBehaviorWrapperProps, CommonProps, ComponentProps } from '$lib/types';
	import type { SvelteComponent } from 'svelte';
	import type { ExtendedComponent } from '$lib/interfaces';

	export let component: typeof SvelteComponent;
	export let props: ComponentProps;
	export let commonProps: CommonProps = {};
	export let dynamicBehaviorProps: DynamicBehaviorWrapperProps = {};

	let componentInstance: ExtendedComponent;
	let element: HTMLElement;

	$: transitionProps = getTransitionProps();

	function applyActions() {
		if (dynamicBehaviorProps.actions) {
			dynamicBehaviorProps.actions.forEach(({ action, parameters }) => {
				action(element, parameters);
			});
		}
	}

	function applyEventListeners() {
		if (dynamicBehaviorProps.eventListeners) {
			dynamicBehaviorProps.eventListeners.forEach(({ eventType, handler }) => {
				element.addEventListener(eventType, handler);
			});
		}
		return () => {
			if (dynamicBehaviorProps.eventListeners) {
				dynamicBehaviorProps.eventListeners.forEach(({ eventType, handler }) => {
					element.removeEventListener(eventType, handler);
				});
			}
		};
	}
	function setupComponent() {
		if (componentInstance.getRootElement) {
			element = componentInstance.getRootElement();
			applyActions();
			return applyEventListeners();
		}
	}

	onMount(() => {
		if ('getRootElement' in componentInstance) {
			return setupComponent();
		}
	});

	function getTransitionProps() {
		const transitionProps: {
			in?: (node: HTMLElement) => void;
			out?: (node: HTMLElement) => void;
		} = {};

		if (dynamicBehaviorProps.transition?.in) {
			transitionProps.in = (node: HTMLElement) =>
				dynamicBehaviorProps.transition?.in?.transition?.(
					node,
					dynamicBehaviorProps.transition.in.params ?? {}
				);
		}

		if (dynamicBehaviorProps.transition?.out) {
			transitionProps.out = (node: HTMLElement) =>
				dynamicBehaviorProps.transition?.out?.transition?.(
					node,
					dynamicBehaviorProps.transition.out.params ?? {}
				);
		}

		return transitionProps;
	}
</script>

<svelte:component
	this={component}
	bind:this={componentInstance}
	{commonProps}
	{props}
	{...transitionProps}
/>
