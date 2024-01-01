# Webhook plugin for release-it

This plugin call provided webhook url. Body if the request includes: **name**, **version** and **changelog**.

### Install

```
npm install --save-dev release-it-webhook
```

### Configuration

In [release-it](https://github.com/release-it/release-it) config:

```
"plugins": {
  "release-it-webhook": {
	"webhook": {
		"url": "https://hooks.slack.com/triggers/...."
	}
  }
}
```
