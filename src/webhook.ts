import { PluginError } from "./error.js";

export async function request(
	webhookURL: string,
	data: Record<string, string>,
) {
	const headers = new Headers({ "content-type": "application/json" });
	const body = JSON.stringify(data);
	const response = await fetch(webhookURL, {
		method: "POST",
		headers,
		body,
	});

	if (!response.ok) throw new Error(PluginError.WebhookCallFailed);

	return response;
}
