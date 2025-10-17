import { VanillaPPAnimations as Logger } from "./logger";
import { VanillaPPAnimations as Constants } from "./constants";
import { VanillaPPAnimations as Wrapper } from "./wrapper";

export namespace VanillaPPAnimations {
	export class Orchestrator {
		private readonly logger: Logger.ILogger;

		public constructor(logger: Logger.ILogger) {
			this.logger = logger;

			this.setup_wrappers();
			this.logger.info('Wrappers Initialized!');
		}

		private setup_wrappers(): void {
			const wrappers = document.querySelectorAll(Constants.wrapper_block_identifier);
			wrappers.forEach((element) => {
				if (element instanceof HTMLElement) {
					const wrapper = Wrapper.WrapperBlock.from_html(element);
					this.logger.info("Registered ", wrapper.vars.id, "!");
					wrapper.run_animation();
				}
			});
		}
	}
}
