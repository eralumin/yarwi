export function flipAction(
	node: HTMLElement,
	duration: number = 300,
	targetSelector: string | null = null
) {
	let flipped = false;

	node.style.transition = `transform ${duration}ms`;

	function toggle() {
		flipped = !flipped;
		node.style.transform = flipped ? 'rotateX(180deg)' : '';
	}

	function handleClick(event: MouseEvent) {
		if (!targetSelector || ((event.target as Element)?.matches(targetSelector) ?? false)) {
			toggle();
		}
	}

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}
