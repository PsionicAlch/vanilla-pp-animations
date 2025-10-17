import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

import { VanillaPPAnimations as Constants } from '../../runtime/core/constants';

export default function Save({ attributes }: BlockSaveProps<any>) {
	const {id, animation, target, trigger, propX} = attributes;

	const dataAttribs: Record<string, string> = {};

	if (id) {
		dataAttribs[Constants.data_block_id_name] = id;
	}

	dataAttribs[Constants.data_block_type_name] = 'wrapper';

	if (animation) {
		dataAttribs[Constants.data_block_animation_type_name] = animation;
	}

	if (target) {
		dataAttribs[Constants.data_block_animation_target_name] = target;
	}

	if (trigger) {
		dataAttribs[Constants.data_block_animation_trigger_name] = trigger;
	}

	if (propX) {
		dataAttribs[`${Constants.data_animation_from_vars_prefix}-x`] = propX;
	}

	dataAttribs[`${Constants.data_animation_from_vars_prefix}-repeat`] = '-1';
	dataAttribs[`${Constants.data_animation_from_vars_prefix}-duration`] = '2';

	return (
		<div { ...useBlockProps.save(dataAttribs) }>
			<InnerBlocks.Content />
		</div>
	);
}
