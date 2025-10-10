<?php

function vanilla_pp_animations_has_blocks(array $block_names = []): bool {
	foreach ($block_names as $block_name) {
		if (has_block($block_name)) {
			return true;
		}
	}

	return false;
}
