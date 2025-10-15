import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

export default function Save({ attributes }: BlockSaveProps<any>) {
	const {id, animation, target, trigger, propX} = attributes;

	const dataAttribs: Record<string, string> = {};

	if (id) {
		dataAttribs['data-vppa-id'] = id;
	}

	dataAttribs['data-vppa-type'] = 'wrapper';

	if (animation) {
		dataAttribs['data-vppa-animation'] = animation;
	}

	if (target) {
		dataAttribs['data-vppa-target'] = target;
	}

	if (trigger) {
		dataAttribs['data-vppa-trigger'] = trigger;
	}

	if (propX) {
		dataAttribs['data-vppa-prop-x'] = propX;
	}

	return (
		<div { ...useBlockProps.save(dataAttribs) }>
			<InnerBlocks.Content />
		</div>
	);
}
