import { gsap } from "gsap";
import type { TweenVars } from "gsap";

import { VanillaPPAnimations as Constants } from "./constants";
import { VanillaPPAnimations as Types } from "./types";
import { VanillaPPAnimations as StringUtils } from "./string";
import { VanillaPPAnimations as Deserializer } from "./deserialize";

export namespace VanillaPPAnimations {
	export class WrapperBlock {
		public readonly vars: Types.WrapperVars;

		private constructor(vars: Types.WrapperVars) {
			if (!vars.id) {
				throw new Error(`Missing required 'id'`);
			}

			if (vars.trigger === 'controller' && !vars.controllerId) {
				throw new Error(`Missing required 'controllerId'`);
			}

			this.vars = vars;
		}

		public static from_html(element: HTMLElement): WrapperBlock {
			const vars = Deserializer.deserialize_wrapper_attributes(element);
			return new WrapperBlock(vars);
		}

		public static from_data(vars: Types.WrapperVars): WrapperBlock {
			return new WrapperBlock(vars);
		}

		public run_animation(): void {
			if (this.vars.trigger !== 'controller') {
				const animation_target = (this.vars.target === 'self') ? `[${Constants.data_block_id_name}="${this.vars.id}"]` : `[${Constants.data_block_id_name}="${this.vars.id}"] > *`;

				if (this.vars.animation === 'from') {
					const from_vars: gsap.TweenVars = {
						scrollTrigger: {
							trigger: animation_target
						},
						duration: this.vars.duration,
						repeat: this.vars.repeat,
						delay: this.vars.delay,
						yoyo: this.vars.yoyo,
						ease: this.vars.ease,
						stagger: this.vars.stagger,
						x: this.vars.fromX,
						y: this.vars.fromY,
						scaleX: this.vars.fromScaleX,
						scaleY: this.vars.fromScaleY,
						rotation: this.vars.fromRotation,
						skewX: this.vars.fromSkewX,
						skewY: this.vars.fromSkewY,
						transformOrigin: this.vars.fromTransformOrigin,
						opacity: this.vars.fromOpacity,
						autoAlpha: this.vars.fromAutoAlpha
					};

					gsap.from(animation_target, from_vars);
				} else if (this.vars.animation === 'to') {
					const to_vars: gsap.TweenVars = {
						scrollTrigger: {
							trigger: animation_target
						},
						duration: this.vars.duration,
						repeat: this.vars.repeat,
						delay: this.vars.delay,
						yoyo: this.vars.yoyo,
						ease: this.vars.ease,
						stagger: this.vars.stagger,
						x: this.vars.toX,
						y: this.vars.toY,
						scaleX: this.vars.toScaleX,
						scaleY: this.vars.toScaleY,
						rotation: this.vars.toRotation,
						skewX: this.vars.toSkewX,
						skewY: this.vars.toSkewY,
						transformOrigin: this.vars.toTransformOrigin,
						opacity: this.vars.toOpacity,
						autoAlpha: this.vars.toAutoAlpha
					};

					gsap.to(animation_target, to_vars);
				} else if (this.vars.animation === 'fromto') {
					const from_vars: gsap.TweenVars = {
						x: this.vars.fromX,
						y: this.vars.fromY,
						scaleX: this.vars.fromScaleX,
						scaleY: this.vars.fromScaleY,
						rotation: this.vars.fromRotation,
						skewX: this.vars.fromSkewX,
						skewY: this.vars.fromSkewY,
						transformOrigin: this.vars.fromTransformOrigin,
						opacity: this.vars.fromOpacity,
						autoAlpha: this.vars.fromAutoAlpha
					};

					const to_vars: gsap.TweenVars = {
						scrollTrigger: {
							trigger: animation_target
						},
						duration: this.vars.duration,
						repeat: this.vars.repeat,
						delay: this.vars.delay,
						yoyo: this.vars.yoyo,
						ease: this.vars.ease,
						stagger: this.vars.stagger,
						x: this.vars.toX,
						y: this.vars.toY,
						scaleX: this.vars.toScaleX,
						scaleY: this.vars.toScaleY,
						rotation: this.vars.toRotation,
						skewX: this.vars.toSkewX,
						skewY: this.vars.toSkewY,
						transformOrigin: this.vars.toTransformOrigin,
						opacity: this.vars.toOpacity,
						autoAlpha: this.vars.toAutoAlpha
					};

					gsap.fromTo(animation_target, from_vars, to_vars);
				} else if (this.vars.animation === 'set') {
					const to_vars: gsap.TweenVars = {
						scrollTrigger: {
							trigger: animation_target
						},
						duration: this.vars.duration,
						repeat: this.vars.repeat,
						delay: this.vars.delay,
						yoyo: this.vars.yoyo,
						ease: this.vars.ease,
						stagger: this.vars.stagger,
						x: this.vars.toX,
						y: this.vars.toY,
						scaleX: this.vars.toScaleX,
						scaleY: this.vars.toScaleY,
						rotation: this.vars.toRotation,
						skewX: this.vars.toSkewX,
						skewY: this.vars.toSkewY,
						transformOrigin: this.vars.toTransformOrigin,
						opacity: this.vars.toOpacity,
						autoAlpha: this.vars.toAutoAlpha
					};

					gsap.set(animation_target, to_vars);
				}
			}
		}
	}
}
