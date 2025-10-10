<?php
/**
 * Plugin Name:       Vanilla++ Animations
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       vanilla-pp-animations
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_vanilla_pp_animations_block_init() {
	// Set up multi-block registration according to:
	// https://developer.wordpress.org/news/2024/05/setting-up-a-multi-block-using-inner-blocks-and-post-meta/#setting-up-a-multi-block-plugin
	register_block_type(__DIR__ . '/build/blocks/animation-wrapper-block');
	register_block_type(__DIR__ . '/build/blocks/animation-controller-block');
}

add_action( 'init', 'create_block_vanilla_pp_animations_block_init' );
