import { spring } from 'svelte/motion';

export const springMotionModes = {
	Soft: { stiffness: 0.1, damping: 0.2 }
};

function updateNodeScale(node: HTMLElement, value: number) {
	node.style.transform = `scale(${value})`;
}

export function springMotion(node: HTMLElement, mode = springMotionModes.Soft) {
	const scale = spring(1, mode);

	function handleMouseDown() {
		scale.set(0.95);
	}

	function handleMouseUp() {
		scale.set(1);
	}

	const unsubscribe = scale.subscribe((value) => {
		updateNodeScale(node, value);
	});

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);

	return {
		destroy() {
			unsubscribe();
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
