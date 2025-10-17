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

	export const valid_animations = ['to', 'from', 'fromto', 'set'] as const;
	export const valid_targets = ['self', 'children'] as const;
	export const valid_triggers = ['onscreen', 'controller'] as const;
	export const valid_blocks = ['wrapper', 'controller'] as const;
}
