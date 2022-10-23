---
title: Shark IQ
description: Integrate your Shark IQ robot vacuum with Home Assistant.
ha_category:
- Vacuum
ha_iot_class: Cloud Polling
ha_release: 0.115
ha_config_flow: true
ha_codeowners:
  - '@JeffResc'
  - '@funkybunch'
ha_domain: sharkiq
ha_platforms:
  - vacuum
ha_integration_type: integration
---

The `sharkiq` integration allows you to control your [Shark IQ](https://www.sharkclean.com/vacuums/robot-vacuums/) vacuum.

<p class='img'>
<img src='/images/screenshots/more-info-dialog-sharkiq.png' />
</p>
<div class='note'>
This integration uses your device's cloud API to communicate with the device.  It has been tested with the R101AE and
AV2001 robots, but should be compatible with all smart SharkIQ robot vacuums.  If you are having issues with your device not
responding as expected, please <a href="https://github.com/home-assistant/core/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+sharkiq%22" target="_blank" rel="noreferrer">open an issue on Github</a>.
</div>

{% include integrations/config_flow.md %}

## Entities
A new device & entity will be created for each robot vacuum you have linked to your SharkIQ account.

The state of your robot entities will be the current status of the robot (i.e `docked`, `cleaning`, `paused`, `returning`, etc).

Each robot entity also has a series of attributes to help provide you with more details about your robot's state and specific sensors.

| Attribute              | Type        | Description                                            |
|------------------------|-------------|--------------------------------------------------------|
| `fan_speed_list`       | `list`      | A list of fan speeds supported by the device.          |
| `battery_level`        | `int`       | Battery charge percentage as an `integer` from 0-100.  |
| `battery_icon`         | `string`    | Icon associated with the `battery_level` attribute.    |
| `fan_speed`            | `string`    | Fan speed currently set on the device.                 |
| `last_error_code`      | `int`       | Most recent error code returned by the device.         |
| `last_error_message`   | `string`    | Most recent error message returned by the device.      |
| `rssi`                 | `int`       | Wifi Received Signal Strength Indicator (RSSI) value.  |
| `recharge_and_resume`  | `bool`      | Boolean value of the Recharge and Resume feature flag. |
| `rooms`                | `list[Str]` | A list of rooms configured for your robot vacuum.      |

## Services
### Native `vacuum` Services
The following native `vacuum` services are supported:
- `start`
- `pause`
- `stop`
- `return_to_base`
- `locate`

For usage and required fields, refer to the [vacuum component services](https://www.home-assistant.io/integrations/vacuum/#component-services).

<div class='note'>
Support for <code>pause</code> may vary depending on the model of your vacuum.  If you notice the `pause` service does not seem
to be working, use the <code>stop</code> service instead.  In this case the robot should pause, and can be resumed by
calling the <code>start</code> service again.  To completely cancel the clean job, use `return_to_base`.
</div>

### SharkIQ-Specific Services
#### `clean_room`
If your robot vacuum supports cleaning specific rooms, you can call this service to target a room or multiple rooms,
without starting a full cleaning job.


<div class='note'>
To provide a more native experience within Home Assistant, the service UI editor will prompt you to select one or more
rooms which have been configured in Home Assistant.  Unless you have configured the SharkClean app to have the exact
same room names, you may get unexpected errors or behavior.

If you are having trouble getting the desired behavior with the UI editor or have rooms that are configured in
SharkClean but not Home Assistant, configure `clean_room` service calls using YAML and ensure that the list of rooms
you want to clean, matches an item in the <code>rooms</code> entity attribute <i>exactly</i>.  It is case-sensitive, and you must use a YAML list even if you only
want to clean a single room.
</div>

Example Service call:
```yaml
service: sharkiq.clean_room
data:
  rooms:
    - Kitchen
    - Entry
target:
  entity_id: vacuum.<my_shark>
```

## Troubleshooting

### Integration Disconnecting

If the integration frequently disconnects and you have an ad blocker runner like [Pi-hole](https://pi-hole.net/) or [AdGuard](https://adguard.com) add `ads-field.aylanetworks.com` to the Allow list . This domain is needed for the connection and can be part of the automatic blocking because of `ads` being part of the subdomain.
