import { VanillaPPAnimations as Constants } from "../constants";
import { VanillaPPAnimations as Types } from "../types";
import { VanillaPPAnimations as StringUtils } from "../utils/string";

export namespace VanillaPPAnimations {
	export class WrapperBlock {
		public readonly id: string;
		public readonly controller_id: string;
		public readonly animation: Types.AnimationType;
		public readonly target: Types.TargetType;
		public readonly trigger: Types.TriggerType;
		public readonly to_properties: gsap.TweenVars;
		public readonly from_properties: gsap.TweenVars;

		private constructor(id: string, controller_id: string, animation: Types.AnimationType, target: Types.TargetType, trigger: Types.TriggerType, to: gsap.TweenVars, from: gsap.TweenVars) {
			if (!id) {
				throw new Error(`Missing required 'id'`);
			} else {
				this.id = id;
			}

			this.animation = animation;
			this.target = target;
			this.trigger = trigger;

			if (this.trigger === 'controller' && !controller_id) {
				throw new Error(`Missing required 'controller_id'`);
			} else {
				this.controller_id = controller_id;
			}

			this.to_properties = to;
			this.from_properties = from;
		}

		public static from_html(element: HTMLElement): WrapperBlock {
			let id: string = '';
			let controller_id: string = '';
			let animation: Types.AnimationType = 'to';
			let target: Types.TargetType = 'self';
			let trigger: Types.TriggerType = 'onscreen';
			let to_props: gsap.TweenVars = {};
			let from_props: gsap.TweenVars = {};

			for (const { name, value } of element.attributes) {
				if (name === Constants.data_block_id_name) {
					id = value;
				} else if (name === Constants.data_block_controller_id_name) {
					controller_id = value;
				} else if (name === Constants.data_block_animation_type_name) {
					animation = Constants.valid_animations.includes(value as any) ? (value as Types.AnimationType) : 'to';
				} else if (name === Constants.data_block_animation_target_name) {
					target = Constants.valid_targets.includes(value as any) ? (value as Types.TargetType) : 'self';
				} else if (name === Constants.data_block_animation_trigger_name) {
					trigger = Constants.valid_triggers.includes(value as any) ? (value as Types.TriggerType) : 'onscreen';
				} else if (name.startsWith(`${Constants.data_animation_to_vars_prefix}-`)) {
					const key = StringUtils.kebab_to_camel(name.replace(`${Constants.data_animation_to_vars_prefix}-`, ''));
					to_props[key] = value;
				} else if (name.startsWith(`${Constants.data_animation_from_vars_prefix}-`)) {
					const key = StringUtils.kebab_to_camel(name.replace(`${Constants.data_animation_from_vars_prefix}-`, ''));
					from_props[key] = value;
				}
			}

			if (!id) {
				throw new Error(`Missing attribute required '${Constants.data_block_id_name}'`, {cause: element});
			}

			if (trigger === 'controller' && !controller_id) {
				throw new Error(`Missing attribute required '${Constants.data_block_controller_id_name}'`, {cause: element});
			}

			return new WrapperBlock(id, controller_id, animation, target, trigger, to_props, from_props);
		}

		public static from_data(id: string, controllerId: string, animation: "to" | "from" | "fromto" | "set", target: "self" | "children", trigger: "onscreen" | "controller", to: gsap.TweenVars, from: gsap.TweenVars): WrapperBlock {
			return new WrapperBlock(id, controllerId, animation, target, trigger, to, from);
		}

		public run_animation(): void {
			if (this.trigger !== 'controller') {
				const animation_target = (this.target === 'self') ? `[${Constants.data_block_id_name}="${this.id}]` : `[${Constants.data_block_id_name}="${this.id}] > *`;

				if (this.animation === 'from') {
					const from_vars = this.from_properties;

					if (this.trigger === 'onscreen') {
						from_vars.scrollTrigger = animation_target;
					}

					gsap.from(animation_target, from_vars);
				} else if (this.animation === 'to') {
					const to_vars = this.to_properties;

					if (this.trigger === 'onscreen') {
						to_vars.scrollTrigger = animation_target;
					}

					gsap.to(animation_target, to_vars);
				} else if (this.animation === 'fromto') {
					const to_vars = this.to_properties;

					if (this.trigger === 'onscreen') {
						to_vars.scrollTrigger = animation_target;
					}

					gsap.fromTo(animation_target, this.from_properties, to_vars);
				} else if (this.animation === 'set') {
					const to_vars = this.to_properties;

					if (this.trigger === 'onscreen') {
						to_vars.scrollTrigger = animation_target;
					}

					gsap.set(animation_target, to_vars);
				}
			}
		}
	}
}
