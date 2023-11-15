---
title: ROMY
description: Integrate your ROMY vacuum robot with Home Assistant.
ha_category:
  - Vacuum
ha_iot_class: Local Polling
ha_release: 2023.5
ha_config_flow: true
ha_codeowners:
  - '@xeniter'
ha_domain: romy
ha_platforms:
  - binary_sensor
  - sensor
  - vacuum
  - button
ha_integration_type: integration
---

The `romy` integration allows you to control your [ROMY](https://romyrobot.eu/) vacuum robot.

This integration currently supports the following models:

- ROMY C5
- ROMY L6 Performance
- ROMY L6 Animal

{% include integrations/config_flow.md %}

## Services

Currently supported services are:

- `start`
- `pause`
- `continue`
- `stop`
- `return_to_base`

## Sensors

Currently supported sensors are:

- battery level
- wifi rssi level
- dustbin level
- docked
- dustbin present
- watertank present
- watertank empty


## Troubleshooting

### local HTTP interface password

You have to enable the local interface first with a password, this is printed as QR Code on a label directly under the dustbin inside the robot.

### ROMY robot interface protocol

Is available as download under [romy-robot-interface-protocol](https://romyrobot.eu/pages/romy-robot-interface-protocol)
