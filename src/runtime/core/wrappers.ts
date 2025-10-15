import { gsap } from "gsap";

import { VanillaPPAnimations as Logger } from "./logger";
import { VanillaPPAnimations as Constants } from "./constants";

export namespace VanillaPPAnimations {
	export class WrapperBlocks {
		private readonly logger: Logger.ILogger;

		public constructor(logger: Logger.ILogger) {
			this.logger = logger;

			this.initialize();

			this.logger.info('Wrappers Initialized!');
		}

		private initialize(): void {
			const wrappers = document.querySelectorAll(`[${Constants.data_prefix}-trigger="onscreen"`);

			wrappers.forEach((wrapper) => {
				if (wrapper instanceof HTMLElement) {
					console.log(wrapper.dataset);
					if (wrapper.dataset.vppaAnimation === 'from') {
						const target = (wrapper.dataset.vppaTarget === 'self') ? wrapper : wrapper.children;
						const vars: gsap.TweenVars = {};

						if (wrapper.dataset.vppaTrigger === 'onscreen') {
							vars.scrollTrigger = target;
						}

						if (wrapper.dataset.vppaPropX) {
							vars.x = wrapper.dataset.vppaPropX;
						}

						vars.opacity = 0;
						vars.duration = "2";
						vars.repeat = -1;

						gsap.from(target, vars);
					}
				}
			});
		}
	}
}
