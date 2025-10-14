import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { VanillaPPAnimations as Logger } from "./logger";

export namespace VanillaPPAnimations {
	export class Runtime {
		private readonly logger: Logger.ILogger;

		public constructor(debug: boolean = false) {
			gsap.registerPlugin(ScrollTrigger);

			this.logger = debug ? new Logger.ConsoleLogger() : new Logger.VoidLogger();

			this.logger.info("Loaded!");
		}
	}
}
