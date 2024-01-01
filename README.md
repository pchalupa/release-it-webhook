# Webhook plugin for release-it

This plugin makes a request against provided webhook url.

### Install

```bash
npm install --save-dev release-it-webhook
```

### Configuration

In [release-it](https://github.com/release-it/release-it/blob/main/docs/plugins.md#using-a-plugin) plugins config:

```json
"plugins": {
  "release-it-webhook": {
	"webhook": {
		"url": "https://hooks.slack.com/triggers/...."
	}
  }
}
```

### Webhook

The request body contain this payload:

```json
{
	"name": "..."
	"version": "..."
	"changelog": "..."
}
```
