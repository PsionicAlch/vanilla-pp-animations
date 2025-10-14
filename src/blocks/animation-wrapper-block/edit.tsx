import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Animation Wrapper Block - hello from the editor!', 'animation-wrapper-block' ) }
		</p>
	);
}
