import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks';

import { VanillaPPAnimations as Serializer } from '../../runtime/core/serialize';

export default function Save({ attributes }: BlockSaveProps<any>) {
	const dataAttribs = Serializer.serialize_wrapper_attributes({
		id: attributes.id,
		type: 'wrapper',
		animation: attributes.animation,
		target: attributes.target,
		trigger: attributes.trigger,
		duration: attributes.duration,
		repeat: attributes.repeat,
		delay: attributes.delay,
		yoyo: attributes.yoyo,
		ease: attributes.ease,
		stagger: attributes.stagger,
		fromX: attributes.fromX,
		fromY: attributes.fromY,
		fromScaleX: attributes.fromScaleX,
		fromScaleY: attributes.fromScaleY,
		fromRotation: attributes.fromRotation,
		fromSkewX: attributes.fromSkewX,
		fromSkewY: attributes.fromSkewY,
		fromTransformOrigin: attributes.fromTransformOrigin,
		fromOpacity: attributes.fromOpacity,
		fromAutoAlpha: attributes.fromAutoAlpha,
		toX: attributes.toX,
		toY: attributes.toY,
		toScaleX: attributes.toScaleX,
		toScaleY: attributes.toScaleY,
		toRotation: attributes.toRotation,
		toSkewX: attributes.toSkewX,
		toSkewY: attributes.toSkewY,
		toTransformOrigin: attributes.toTransformOrigin,
		toOpacity: attributes.toOpacity,
		toAutoAlpha: attributes.toAutoAlpha
	});

	return (
		<div { ...useBlockProps.save(dataAttribs) }>
			<InnerBlocks.Content />
		</div>
	);
}
