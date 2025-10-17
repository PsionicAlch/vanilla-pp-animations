import { VanillaPPAnimations as Types } from "./types";
import { VanillaPPAnimations as Constants } from "./constants";

export namespace VanillaPPAnimations {
	export const var_to_attrib_map: Types.WrapperVarsToAttributes = {
		id: Constants.data_block_id_name,
		type: Constants.data_block_type_name,
		controllerId: Constants.data_block_controller_id_name,
		animation: Constants.data_block_animation_type_name,
		target: Constants.data_block_animation_target_name,
		trigger: Constants.data_block_animation_trigger_name,
		duration: `${Constants.data_prefix}-duration`,
		repeat: `${Constants.data_prefix}-repeat`,
		delay: `${Constants.data_prefix}-delay`,
		yoyo: `${Constants.data_prefix}-yoyo`,
		ease: `${Constants.data_prefix}-ease`,
		stagger: `${Constants.data_prefix}-stagger`,
		fromX: `${Constants.data_animation_from_vars_prefix}-x`,
		fromY: `${Constants.data_animation_from_vars_prefix}-y`,
		fromScaleX: `${Constants.data_animation_from_vars_prefix}-scale-x`,
		fromScaleY: `${Constants.data_animation_from_vars_prefix}-scale-y`,
		fromRotation: `${Constants.data_animation_from_vars_prefix}-rotation`,
		fromSkewX: `${Constants.data_animation_from_vars_prefix}-skew-x`,
		fromSkewY: `${Constants.data_animation_from_vars_prefix}-skew-y`,
		fromTransformOrigin: `${Constants.data_animation_from_vars_prefix}-transform-origin`,
		fromOpacity: `${Constants.data_animation_from_vars_prefix}-opacity`,
		fromAutoAlpha: `${Constants.data_animation_from_vars_prefix}-auto-alpha`,
		toX: `${Constants.data_animation_to_vars_prefix}-x`,
		toY: `${Constants.data_animation_to_vars_prefix}-y`,
		toScaleX: `${Constants.data_animation_to_vars_prefix}-scale-x`,
		toScaleY: `${Constants.data_animation_to_vars_prefix}-scale-y`,
		toRotation: `${Constants.data_animation_to_vars_prefix}-rotation`,
		toSkewX: `${Constants.data_animation_to_vars_prefix}-skew-x`,
		toSkewY: `${Constants.data_animation_to_vars_prefix}-skew-y`,
		toTransformOrigin: `${Constants.data_animation_to_vars_prefix}-transform-origin`,
		toOpacity: `${Constants.data_animation_to_vars_prefix}-opacity`,
		toAutoAlpha: `${Constants.data_animation_to_vars_prefix}-auto-alpha`,
	} as const;

	export const attrib_to_var_map = Object.fromEntries(
  	Object.entries(var_to_attrib_map).map(([var_name, attrib_name]) => [attrib_name, var_name])
	) as Record<(typeof var_to_attrib_map)[keyof typeof var_to_attrib_map], keyof typeof var_to_attrib_map>;
}
