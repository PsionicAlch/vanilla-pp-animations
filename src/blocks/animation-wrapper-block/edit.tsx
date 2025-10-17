import { useEffect } from 'react';

import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

export default function Edit({ attributes, setAttributes }: BlockEditProps<any>) {
	const { id } = attributes;
	const domain = 'animation-wrapper-block';
	const showFromControls = attributes.animation === 'from' || attributes.animation === 'fromto' || attributes.animation === 'set';
	const showToControls = attributes.animation === 'to' || attributes.animation === 'fromto';

	useEffect(() => {
		if (!id) {
			setAttributes({ id: crypto.randomUUID() });
		}
	}, [id]);

	return (
		<>
			<InspectorControls>
				<Panel header={__('Animation Controls', domain)}>
					<PanelBody title={__('Basics', domain)}>
						<SelectControl
							label={__('Animation Type', domain)}
							value={attributes.animation}
							options={[
								{ label: __('To', domain), value: 'to' },
								{ label: __('From', domain), value: 'from' },
								{ label: __('FromTo', domain), value: 'fromto' },
								{ label: __('Set', domain), value: 'set' },
							]}
							onChange={(value) => setAttributes({ animation: value})}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>

						<SelectControl
							label={__('Target', domain)}
							value={attributes.target}
							options={[
								{ label: __('Self', domain), value: 'self' },
								{ label: __('Children', domain), value: 'children' },
							]}
							onChange={(value) => setAttributes({ target: value})}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>

						<SelectControl
							label={__('Trigger', domain)}
							value={attributes.trigger}
							options={[
								{ label: __('On Screen', domain), value: 'onscreen' },
							]}
							onChange={(value) => setAttributes({ trigger: value})}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>

						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('Duration', domain)}
							value={attributes.duration || ''}
							onChange={(value) => setAttributes({ duration: value })}
						/>

						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('Repeat', domain)}
							value={attributes.repeat || ''}
							onChange={(value) => setAttributes({ repeat: value })}
						/>

						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('Delay', domain)}
							value={attributes.delay || ''}
							onChange={(value) => setAttributes({ delay: value })}
						/>

						<ToggleControl
							__nextHasNoMarginBottom
							label={__('YoYo', domain)}
							help={attributes.yoyo ? __('Alternate animation direction', domain) : __("Don't alternate animation direction", domain)}
							checked={attributes.yoyo}
							onChange={(value) => setAttributes({ yoyo: value })}
						/>

						<SelectControl
							label={__('Ease', domain)}
							value={attributes.ease}
							options={[
								{ label: __('None', domain), value: 'none' },
								{ label: __('Power 1 In', domain), value: 'power1.in' },
								{ label: __('Power 1 In Out', domain), value: 'power1.inOut' },
								{ label: __('Power 1 Out', domain), value: 'power1.out' },
								{ label: __('Power 2 In', domain), value: 'power2.in' },
								{ label: __('Power 2 In Out', domain), value: 'power2.inOut' },
								{ label: __('Power 2 Out', domain), value: 'power2.out' },
								{ label: __('Power 3 In', domain), value: 'power3.in' },
								{ label: __('Power 3 In Out', domain), value: 'power3.inOut' },
								{ label: __('Power 3 Out', domain), value: 'power3.out' },
								{ label: __('Power 4 In', domain), value: 'power4.in' },
								{ label: __('Power 4 In Out', domain), value: 'power4.inOut' },
								{ label: __('Power 4 Out', domain), value: 'power4.out' },
								{ label: __('Back In', domain), value: 'back.in' },
								{ label: __('Back In Out', domain), value: 'back.inOut' },
								{ label: __('Back Out', domain), value: 'back.out' },
								{ label: __('Bounce In', domain), value: 'bounce.in' },
								{ label: __('Bounce In Out', domain), value: 'bounce.inOut' },
								{ label: __('Bounce Out', domain), value: 'bounce.out' },
								{ label: __('Circ In', domain), value: 'circ.in' },
								{ label: __('Circ In Out', domain), value: 'circ.inOut' },
								{ label: __('Circ Out', domain), value: 'circ.out' },
								{ label: __('Elastic In', domain), value: 'elastic.in' },
								{ label: __('Elastic In Out', domain), value: 'elastic.inOut' },
								{ label: __('Elastic Out', domain), value: 'elastic.out' },
								{ label: __('Expo In', domain), value: 'expo.in' },
								{ label: __('Expo In Out', domain), value: 'expo.inOut' },
								{ label: __('Expo Out', domain), value: 'expo.out' },
								{ label: __('Sine In', domain), value: 'sine.in' },
								{ label: __('Sine In Out', domain), value: 'sine.inOut' },
								{ label: __('Sine Out', domain), value: 'sine.out' },
								{ label: __('Steps In', domain), value: 'steps.in' },
								{ label: __('Steps In Out', domain), value: 'steps.inOut' },
								{ label: __('Steps Out', domain), value: 'steps.out' },
							]}
							onChange={(value) => setAttributes({ ease: value})}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>

						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('Stagger', domain)}
							value={attributes.stagger || ''}
							onChange={(value) => setAttributes({ stagger: value })}
						/>
					</PanelBody>

					<PanelBody title={__('Transforms', domain)}>
						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From X', domain)}
							value={attributes.fromX || ''}
							onChange={(value) => setAttributes({ fromX: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To X', domain)}
							value={attributes.toX || ''}
							onChange={(value) => setAttributes({ toX: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Y', domain)}
							value={attributes.fromY || ''}
							onChange={(value) => setAttributes({ fromY: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Y', domain)}
							value={attributes.toY || ''}
							onChange={(value) => setAttributes({ toY: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Scale X', domain)}
							value={attributes.fromScaleX || ''}
							onChange={(value) => setAttributes({ fromScaleX: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Scale X', domain)}
							value={attributes.toScaleX || ''}
							onChange={(value) => setAttributes({ toScaleX: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Scale Y', domain)}
							value={attributes.fromScaleY || ''}
							onChange={(value) => setAttributes({ fromScaleY: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Scale Y', domain)}
							value={attributes.toScaleY || ''}
							onChange={(value) => setAttributes({ toScaleY: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Rotation', domain)}
							value={attributes.fromRotation || ''}
							onChange={(value) => setAttributes({ fromRotation: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Rotation', domain)}
							value={attributes.toRotation || ''}
							onChange={(value) => setAttributes({ toRotation: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Skew X', domain)}
							value={attributes.fromSkewX || ''}
							onChange={(value) => setAttributes({ fromSkewX: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Y', domain)}
							value={attributes.toSkewX || ''}
							onChange={(value) => setAttributes({ toSkewX: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Skew Y', domain)}
							value={attributes.fromSkewY || ''}
							onChange={(value) => setAttributes({ fromSkewY: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Skew Y', domain)}
							value={attributes.toSkewY || ''}
							onChange={(value) => setAttributes({ toSkewY: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Transform Origin', domain)}
							value={attributes.fromTransformOrigin || ''}
							onChange={(value) => setAttributes({ fromTransformOrigin: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Transform Origin', domain)}
							value={attributes.toTransformOrigin || ''}
							onChange={(value) => setAttributes({ toTransformOrigin: value })}
						/> }
					</PanelBody>

					<PanelBody title={__('Visuals', domain)}>
						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Opacity', domain)}
							value={attributes.fromOpacity || ''}
							onChange={(value) => setAttributes({ fromOpacity: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Opacity', domain)}
							value={attributes.toOpacity || ''}
							onChange={(value) => setAttributes({ toOpacity: value })}
						/> }

						{ showFromControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('From Opacity and Visibility', domain)}
							value={attributes.fromAutoAlpha || ''}
							onChange={(value) => setAttributes({ fromAutoAlpha: value })}
						/> }

						{ showToControls && <TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('To Opacity and Visibility', domain)}
							value={attributes.toAutoAlpha || ''}
							onChange={(value) => setAttributes({ toAutoAlpha: value })}
						/> }
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks />
			</div>
		</>
	);
}
