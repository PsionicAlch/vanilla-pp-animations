export namespace VanillaPPAnimations {
	export function kebab_to_camel(str: string): string {
		return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
	}
}
