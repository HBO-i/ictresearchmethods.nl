/**
 * Will toggle the 'no-scroll' class on the body
 * Being used for modals
 * Because of this there is no 'background scroll'
 *
 * setTimeout is because of the event loop/mounting
 */
export function toggleNoScroll() {
	setTimeout(() => {
		const body = document.body;
		body.classList.toggle('no-scroll');
	}, 1);
}

export function removeNoScroll() {
	setTimeout(() => {
		const body = document.body;
		body.classList.remove('no-scroll');
	}, 1);
}
