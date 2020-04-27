import {onMount, onDestroy} from 'svelte'
import { animateHeader } from '../../stores'

const animateHeaderFn = (value) => {
	animateHeader.set(value);
}

const handleIntersection = entries => {
	if (entries[0].intersectionRatio === 0) {
		animateHeaderFn(true)
	} else {
		animateHeaderFn(false)
	}
}

export const handleHeader = (item) => {
	const observer = new IntersectionObserver(handleIntersection, { threshold: [0,1] })

	onMount(() => {
		observer.observe(item)
	});

	onDestroy(() => {
		observer.unobserve(item)
	})
}
