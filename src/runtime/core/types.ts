import { VanillaPPAnimations as Constants } from "./constants";

export namespace VanillaPPAnimations {
	export type AnimationType = typeof Constants.valid_animations[number];
	export type TargetType = typeof Constants.valid_targets[number];
	export type TriggerType = typeof Constants.valid_triggers[number];
	export type BlockType = typeof Constants.valid_blocks[number];
}
