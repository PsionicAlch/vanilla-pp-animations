import { VanillaPPAnimations as Types } from "./types";
import { VanillaPPAnimations as Attributes } from "./attributes";

export namespace VanillaPPAnimations {
	export function serialize_wrapper_attributes(vars: Types.WrapperVars): Record<string, unknown> {
		const attribs: Record<string, unknown> = {};

		(Object.keys(vars) as (keyof Types.WrapperVars)[]).forEach((name) => {
			const attrKey = Attributes.var_to_attrib_map[name];
			const value = vars[name];
			if (value !== undefined) attribs[attrKey] = value;
		});

		return attribs;
	}
}
