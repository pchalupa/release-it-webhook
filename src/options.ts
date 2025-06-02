export type Options = {
	webhook: { url: string };
};

export function isOptions(options: unknown): options is Options {
	return (
		isObject(options) &&
		"webhook" in options &&
		isObject(options.webhook) &&
		"url" in options.webhook
	);
}

function isObject(object: unknown): object is Record<string, unknown> {
	return typeof object === "object" && object !== null;
}
