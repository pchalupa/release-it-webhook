import { Plugin } from "release-it";
import { PluginError } from "./error.js";
import { isOptions } from "./options.js";
import { request } from "./webhook.js";

export default class Webhook extends Plugin {
	async afterRelease(): Promise<void> {
		if (!Webhook.isEnabled()) return;
		if (!isOptions(this.options)) {
			this.log.error(PluginError.InvalidPluginOptions);

			return;
		}

		const name = this.config.getContext("name");
		const version = this.config.getContext("version");
		const changelog = this.config.getContext("changelog");

		try {
			await request(this.options.webhook.url, { name, version, changelog });
		} catch (error) {
			if (error instanceof Error) this.log.error(error.message);
		}
	}
}
