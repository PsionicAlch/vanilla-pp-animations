import { useEffect } from 'react';

import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

export default function Edit({ attributes, setAttributes }: BlockEditProps<any>) {
	const { id } = attributes;
	const domain = 'animation-wrapper-block';

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
							label={__('Type', domain)}
							value={attributes.animation || 'to'}
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
							value={attributes.target || 'self'}
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
							value={attributes.trigger || 'onscreen'}
							options={[
								{ label: __('On Screen', domain), value: 'onscreen' },
							]}
							onChange={(value) => setAttributes({ trigger: value})}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</PanelBody>

					<PanelBody title={__('Properties', domain)}>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__('Starting X', domain)}
							value={attributes.propX || ''}
							onChange={(value) => setAttributes({ propX: value })}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks />
			</div>
		</>
	);
}
