---
title: Goal Zero Yeti
description: Instructions on how to integrate Goal Zero Yeti with Home Assistant
ha_category:
  - Energy
ha_iot_class: Local Polling
ha_release: 0.116
ha_config_flow: true
ha_domain: goalzero
ha_dhcp: true
ha_platforms:
  - binary_sensor
  - sensor
  - switch
ha_codeowners:
  - '@tkdrob'
---

This `goalzero` integration pulls data from a Wifi enabled Goal Zero Yeti.

## Configuration

Go to the integrations page in your configuration and click on new integration -> Goal Zero Yeti.

## Integration Entities

Each added configuration entry will create the following binary sensors:

- `backlight`
- `app_online`
- `charging`
- `input_detected`

The following switches will also be created:

- `12v_port_status`
- `usb_port_status`
- `ac_port_status`

The following sensors will also be created:

- `state_of_charge_percent`
- `temperature`
- `time_to_empty_full`
- `wh_stored`
- `watts_in`
- `watts_out`
- `wifi_strength`
- `amps_in` (disabled by default)
- `amps_out` (disabled by default)
- `up_time` (disabled by default)
- `volts` (disabled by default)
- `wh_out` (disabled by default)
