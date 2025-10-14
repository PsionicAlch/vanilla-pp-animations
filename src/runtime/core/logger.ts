export namespace VanillaPPAnimations {
	export interface ILogger {
		info(message?: any, ...optionalParams: any[]): void;
		warning(message?: any, ...optionalParams: any[]): void;
		error(message?: any, ...optionalParams: any[]): void;
	}

	export class VoidLogger implements ILogger {
		public info(message?: any, ...optionalParams: any[]): void {}
		public warning(message?: any, ...optionalParams: any[]): void {}
		public error(message?: any, ...optionalParams: any[]): void {}
	}

	export class ConsoleLogger implements ILogger {
		private readonly prefix: string;

		public constructor(prefix: string = "Vanilla++ - Animations Runtime: ") {
			this.prefix = prefix;
		}

		public info(message?: any, ...optionalParams: any[]): void {
			console.log(this.prefix + message, ...optionalParams);
		}

		public warning(message?: any, ...optionalParams: any[]): void {
			console.warn(this.prefix + message, ...optionalParams);
		}

		public error(message?: any, ...optionalParams: any[]): void {
			console.error(this.prefix + message, ...optionalParams);
		}
	}
}
