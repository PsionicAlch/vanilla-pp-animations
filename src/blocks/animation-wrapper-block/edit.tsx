import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Panel, PanelBody, SelectControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

export default function Edit({ attributes, setAttributes }: BlockEditProps<any>) {
	const domain = 'animation-wrapper-block';

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
						/>
					</PanelBody>

					<PanelBody title={__('Properties', domain)}>
						Testing 2
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks />
			</div>
		</>
	);
}
