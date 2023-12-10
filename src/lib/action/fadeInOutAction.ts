export function fadeInOutAction(
	node: HTMLElement,
	duration: number = 300,
	easing: string = 'ease-out',
	targetSelector: string | null = null
) {
	node.style.opacity = '1';
	node.style.transition = `opacity ${duration}ms ${easing}`;

	function toggle() {
		node.style.opacity = '0';

		setTimeout(() => {
			node.style.opacity = '1';
		}, duration);
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
