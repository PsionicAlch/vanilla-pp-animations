import { VanillaPPAnimations as Logger } from "./logger";

export namespace VanillaPPAnimations {
	export class Orchestrator {
		private readonly logger: Logger.ILogger;

		public constructor(logger: Logger.ILogger) {
			this.logger = logger;

			this.logger.info('Wrappers Initialized!');
		}
	}
}
