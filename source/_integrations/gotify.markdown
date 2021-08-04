---
title: Gotify
description: Instructions on how to integrate a self-hosted Gotify service with your Home Assistant notifications.
ha_release: 2021.08
ha_category:
  - Notifications
ha_domain: gotify
ha_codeowners:
  - '@benjmarshall'
ha_iot_class: Cloud Polling
ha_platforms:
  - notify
ha_config_flow: true
---

## Description

The Gotify integration is a platform for the **notify** component.

This integration allows you to use [Gotify](https://gotify.net/), an open-source, self-hosted, and simple to set-up push-message server to receive notifications from Home Assistant.

## Setting up

To start getting notifications, you need to follow those simple steps:

1. Setup a Gotify server by following the instructions on their [documentation site](https://gotify.net/docs/install). You can run the server using Docker or a native Go binary. You must make sure your Gotify server is accessible from the open web for this component to be able to communicate with it.
2. When you first login to your Gotify server's WebUI setup a new user (unless you want to only use the default admin user), then logout and log back in as your new user.
3. Add a new application to your Gotify server on the **Apps** tab. Name the new application **Home Assistant**. You can upload the [Home Assistant logo](https://github.com/home-assistant/brands/raw/master/core_integrations/_homeassistant/icon.png) in order to add badges to your notifications.
4. When your application has been created Gotify will present you with a matching **token**. Copy this now as we will need it in the next step.
5. This integration uses a Config Flow. Visit the Integrations page of your Home Assistant and select **Add Integration**. Enter the host URL of your Gotify server, the API token generated in step 4, and then provide a name. The name provided will become the name of the generated notify service.
6. Install the [Gotify Android App](https://github.com/gotify/android) and configure it to connect to your Gotify server using your user's details. It's also a good idea to [follow the instructions](https://github.com/gotify/android#disable-battery-optimization) to disable battery optimisations.
7. Now you can use your new Gotify integration entry as a platform for your **notify** service. A new service will be available as notify.***name***, e.g. notify.gotify_push. The new service can be tested using the Developer Tools, or integrated straight into an automation/script.

### That's it!

Now you can use your new Gotify service inside your Home Assistant to send any notifications or alerts.

### Example service calls

```yaml
- service: notify.gotify_push
  data:
    message: "Home Assistant has started successfully."
```

```yaml
- service: notify.gotify_push
  data:
    message: "Backyard motion detected."
    title: "Alert!"
    data:
      priority: 9
      link: "lovelace/cameras"
```

### Message optional parameters

The following optional attributes can be added alongside the basic **message** field.

| Attribute  | Description
| ---------- | -----------
| `title`    | Message title.

The following attributes can be placed inside `data` for extended functionality.

| Attribute  | Description
| ---------- | -----------
| `priority` | int64 with higher values representing higher priority. By default this integration uses 4 if no priority is specified. The Gotify Android App uses the following values to configure it's notification types: Minimum(<1), Low(1-3), Normal(4-7), High(>7).
| `link`   | Home Assistant navigation link which will be opened in the app if the notification is clicked on an Android device. The Lovelace default page will be used if no link is specified.

To use notifications effectively, please see the [getting started with automation page](/getting-started/automation/).
