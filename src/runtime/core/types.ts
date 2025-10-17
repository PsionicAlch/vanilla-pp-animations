import { VanillaPPAnimations as Constants } from "./constants";

export namespace VanillaPPAnimations {
	export type AnimationType = typeof Constants.valid_animations[number];
	export type TargetType = typeof Constants.valid_targets[number];
	export type TriggerType = typeof Constants.valid_triggers[number];
	export type BlockType = typeof Constants.valid_blocks[number];
	export type EaseType = typeof Constants.valid_easing_functions[number];

	export interface WrapperVars {
		id?: string;
		type?: BlockType;
		controllerId?: string;
		animation?: AnimationType;
		target?: TargetType;
		trigger?: TriggerType;
		duration?: string | number;
		repeat?: number;
		delay?: string | number;
		yoyo?: boolean;
		ease?: EaseType;
		stagger?: number;
		fromX?: string | number;
		fromY?: string | number;
		fromScaleX?: string | number;
		fromScaleY?: string | number;
		fromRotation?: string | number;
		fromSkewX?: string | number;
		fromSkewY?: string | number;
		fromTransformOrigin?: string | number;
		fromOpacity?: string | number;
		fromAutoAlpha?: string | number;
		toX?: string | number;
		toY?: string | number;
		toScaleX?: string | number;
		toScaleY?: string | number;
		toRotation?: string | number;
		toSkewX?: string | number;
		toSkewY?: string | number;
		toTransformOrigin?: string | number;
		toOpacity?: string | number;
		toAutoAlpha?: string | number;
	}

	export type WrapperVarsToAttributes = { [K in keyof WrapperVars]-?: string };
}
