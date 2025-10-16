export namespace VanillaPPAnimations {
	export interface WrapperAttributes {
		id?: string;
		animation?: "to" | "from" | "fromto" | "set";
		target?: string | HTMLElement;
		trigger?: "onscreen";
		toProperties?: gsap.TweenVars;
		fromProperties?: gsap.TweenVars;
	}
}
