export function clickOutsideAction(node: HTMLElement, ignoredSelector?: string) {
	function handleOutsideClick(event: Event) {
		const clickedElement = event.target as HTMLElement;

		const isIgnored = ignoredSelector && clickedElement.closest(ignoredSelector);
		const isInsideNode = node.contains(clickedElement);

		if (!isInsideNode && !isIgnored && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	}

	document.addEventListener('click', handleOutsideClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleOutsideClick, true);
		}
	};
}
