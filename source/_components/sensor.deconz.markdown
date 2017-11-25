---
layout: page
title: deCONZ Sensor
description: "Instructions how to integrate Zigbee sensors from deCONZ into Home Assistant."
date: 2017-11-12 16:30
sidebar: true
comments: false
sharing: true
footer: true
logo: deconz.jpeg
ha_category: Sensor
ha_release: "0.59"
ha_iot_class: "Local Push"
---

See the [deCONZ main component](/components/deconz/) for configuration instructions.

The following sensor types are supported:

 * Humidity sensor
 * Light level sensor
 * Pressure sensor
 * Switches
 * Temperature sensor

Entity ids will be sensor.device_name, where device_name is defined in deCONZ.

#### {% linkable_title Verified to be supported sensors %}

- Humidity Sensor
  - Xiaomi Humidity/Temperature Sensor
- Light Level Sensor
- Pressure Sensor
- Switches
  - IKEA Trådfri Wireless Dimmer
  - Philips Hue Motion Sensor
  - IKEA Trådfri Remote
  - Philips Hue Dimmer Switch
  - Xiaomi Cube
  - Xiaomi Aqara Smart Wireless Switch
- Temperature Sensor
  - Xiaomi Temperature/Humidity Sensor
