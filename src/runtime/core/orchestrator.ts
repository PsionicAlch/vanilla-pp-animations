import { VanillaPPAnimations as Logger } from "./logger";
import { VanillaPPAnimations as Constants } from "./constants";
import { VanillaPPAnimations as Wrapper } from "./blocks/wrapper";

export namespace VanillaPPAnimations {
	export class Orchestrator {
		private readonly logger: Logger.ILogger;

		public constructor(logger: Logger.ILogger) {
			this.logger = logger;

			this.setup_wrappers();
			this.logger.info('Wrappers Initialized!');
		}

		private setup_wrappers(): void {
			const wrappers = document.querySelectorAll(`[${Constants.data_block_type_name}="wrapper"][${Constants.data_block_animation_trigger_name}="onscreen"]`);
			wrappers.forEach((element) => {
				if (element instanceof HTMLElement) {
					const wrapper = Wrapper.WrapperBlock.from_html(element);
					wrapper.run_animation();
				}
			});
		}
	}
}
