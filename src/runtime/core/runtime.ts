import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { VanillaPPAnimations as Logger } from "./logger";
import { VanillaPPAnimations as Orchestrator } from "./orchestrator";

export namespace VanillaPPAnimations {
	export class Runtime {
		private readonly logger: Logger.ILogger;

		public constructor(debug: boolean = false) {
			this.initialize_gsap();
			this.logger = debug ? new Logger.ConsoleLogger() : new Logger.VoidLogger();

			new Orchestrator.Orchestrator(this.logger);

			this.logger.info("Loaded!");
		}

		private initialize_gsap(): void {
			gsap.registerPlugin(ScrollTrigger);
		}
	}
}
