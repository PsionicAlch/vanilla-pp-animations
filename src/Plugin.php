<?php

namespace VanillaPP\Animations;

require_once __DIR__ . '/Utils.php';

class Plugin {
	private static $namespace = 'vanilla-pp-animations';
	private static $block_names = [
		'animation-wrapper-block',
		'animation-controller-block',
	];

	public static function init() {
		add_action( 'init', [ self::class, 'register_blocks' ] );
		add_action( 'wp_enqueue_scripts', [ self::class, 'enqueue_runtime' ] );
	}

	public static function register_blocks() {
		foreach ( self::$block_names as $block_name ) {
			register_block_type( __DIR__ . '/../build/blocks/' . $block_name );
		}
	}

	public static function enqueue_runtime() {
		if ( Utils::has_blocks( self::$namespace, self::$block_names ) ) {
			wp_enqueue_script('vanilla-pp-animations-runtime', plugins_url( '../build-runtime/runtime.js', __FILE__ ), [], '0.1.0', true);
		}
	}
}
