export namespace VanillaPPAnimations {
	export const data_prefix = 'data-vppa';
	export const data_animation_to_vars_prefix = `${data_prefix}-to`;
	export const data_animation_from_vars_prefix = `${data_prefix}-from`;

	export const data_block_type_name = `${data_prefix}-block-type`;
	export const data_block_id_name = `${data_prefix}-id`;
	export const data_block_controller_id_name = `${data_prefix}-controller-id`;

	export const data_block_animation_type_name = `${data_prefix}-animation-type`;
	export const data_block_animation_target_name = `${data_prefix}-target`;
	export const data_block_animation_trigger_name = `${data_prefix}-trigger`;

	export const wrapper_block_identifier = `[${data_block_type_name}="wrapper"][${data_block_animation_trigger_name}="onscreen"]`;
	export const controller_block_identifier = `[${data_block_type_name}="controller"]`;
	export const controller_child_block_identifier = `[${data_block_type_name}="wrapper"][${data_block_animation_trigger_name}="controller"]`;

	export const valid_animations = ['to', 'from', 'fromto', 'set'] as const;
	export const valid_targets = ['self', 'children'] as const;
	export const valid_triggers = ['onscreen', 'controller'] as const;
	export const valid_blocks = ['wrapper', 'controller'] as const;
	export const valid_easing_functions = [
		"none",
		"power1.in",
		"power1.inOut",
		"power1.out",
		"power2.in",
		"power2.inOut",
		"power2.out",
		"power3.in",
		"power3.inOut",
		"power3.out",
		"power4.in",
		"power4.inOut",
		"power4.out",
		"back.in",
		"back.inOut",
		"back.out",
		"bounce.in",
		"bounce.inOut",
		"bounce.out",
		"circ.in",
		"circ.inOut",
		"circ.out",
		"elastic.in",
		"elastic.inOut",
		"elastic.out",
		"expo.in",
		"expo.inOut",
		"expo.out",
		"sine.in",
		"sine.inOut",
		"sine.out",
		"steps.in",
		"steps.inOut",
		"steps.out"
	] as const;
}
