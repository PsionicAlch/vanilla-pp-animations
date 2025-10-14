import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Animation Wrapper Block - hello from the saved content!' }
		</p>
	);
}
