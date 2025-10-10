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

include_once 'utils.php';

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$namespace = 'vanilla-pp-animations';
$block_names = [
	'animation-wrapper-block',
	'animation-controller-block'
];

// Register our custom blocks.
function register_vanilla_pp_animations_blocks() {
	global $block_names;

	// Set up multi-block registration according to:
	// https://developer.wordpress.org/news/2024/05/setting-up-a-multi-block-using-inner-blocks-and-post-meta/#setting-up-a-multi-block-plugin
	foreach ($block_names as $block_name) {
		register_block_type(__DIR__ . '/build/blocks/' . $block_name);
	}
}
add_action( 'init', 'register_vanilla_pp_animations_blocks' );

// Register required Javascript libraries as they are required.
function register_vanilla_pp_gsap_script() {
	global $block_names;

	if (vanilla_pp_animations_has_blocks($block_names)) {
		wp_enqueue_script('vanilla-pp-animations-gsap', 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js', [], '3.13.0', true);
	}
}
add_action('wp_enqueue_scripts', 'register_vanilla_pp_gsap_script');
