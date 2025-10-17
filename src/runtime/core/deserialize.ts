import { VanillaPPAnimations as Types } from "./types";
import { VanillaPPAnimations as Attributes } from "./attributes";

export namespace VanillaPPAnimations {
	export function deserialize_wrapper_attributes(element: HTMLElement): Types.WrapperVars {
		const vars: Types.WrapperVars = {};

	for (const { name, value } of Array.from(element.attributes)) {
		const varKey = Attributes.attrib_to_var_map[name as keyof typeof Attributes.attrib_to_var_map];
		if (varKey) {
			(vars as any)[varKey] = value;
		}
	}

	return vars;
	}
}
