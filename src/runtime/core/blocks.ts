export namespace VanillaPPAnimations {
	export interface BlockAttributes {
		// General block information.
		id?: string;
		type?: string;

		// Wrapper block information.
		animation?: "to" | "from" | "fromto" | "set";
		target?: string | HTMLElement;
		trigger?: "onscreen";
		toProperties?: gsap.TweenVars;
		fromProperties?: gsap.TweenVars;
	}
}
