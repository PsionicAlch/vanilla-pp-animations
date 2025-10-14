import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Animation Controller Block - hello from the saved content!' }
		</p>
	);
}
