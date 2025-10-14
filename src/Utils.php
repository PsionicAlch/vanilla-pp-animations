<?php

namespace VanillaPP\Animations;

class Utils {
	/**
 * Determines whether a $post or a string contains any of the specified block types.
 *
 * @param string $namespace A string stating the namespace of the blocks.
 * @param string[] $block_names An array of full block types to look for.
 * @param int|string|WP_Post|null $post Optional. Post content, post ID, or post object. Defaults to global $post.
 *
 * @return bool Whether the post content contains any of the specified blocks.
 */
	public static function has_blocks( string $namespace, array $block_names = [], $post = null ): bool {
		foreach ( $block_names as $block_name ) {
			if ( has_block( "{$namespace}/{$block_name}", $post ) ) {
				return true;
			}
		}

		return false;
	}
}
