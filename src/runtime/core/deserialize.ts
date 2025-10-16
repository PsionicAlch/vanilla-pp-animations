import { gsap } from 'gsap';

import { VanillaPPAnimations as Constants } from './constants';
import { VanillaPPAnimations as Blocks } from './blocks';

export namespace VanillaPPAnimations {
	export function deserialize_wrapper(element: HTMLElement): Blocks.WrapperAttributes {
		const attribs: Record<string, any> = {};
		const toProps: Record<string, any> = {};
		const fromProps: Record<string, any> = {};

		const toAttribPrefix = `${Constants.data_prefix}-to-`;
		const fromAttribPrefix = `${Constants.data_prefix}-from-`;

		for (const { name, value } of Array.from(element.attributes)) {
			if (name.startsWith(toAttribPrefix)) {
				const key = name.replace(toAttribPrefix, '');
			}
		}

		attribs['toProperties'] = toProps as gsap.TweenVars;
		attribs['fromProperties'] = fromProps as gsap.TweenVars;

		return attribs as Blocks.WrapperAttributes;
	}
}
