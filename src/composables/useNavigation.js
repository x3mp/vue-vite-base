import { useRouter } from "vue-router";

export function useNavigation() {
	const router = useRouter();

	function navigateTo(name) {
		if (!hasRoute(name)) {
			console.warn(`Route "${name}" does not exist.`);
			return;
		}

		doNavigation(name);
	}

	function hasRoute(name) {
		return router.hasRoute(name);
	}

	function doNavigation(name) {
		router.push({ name });
	}

	return { navigateTo };
}
