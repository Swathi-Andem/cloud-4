---
layout: page
title: "IHC Sensor"
description: "Instructions how to integrate IHC Sensors within Home Assistant."
date: 2017-11-27 13:35
sidebar: true
comments: false
sharing: true
footer: true
logo: ihc.png
ha_category: Sensor
ha_release: 0.59
ha_iot_class: "Local Push"
---

Before you can use the IHC Sensor platform, you must setup the [IHC Component](../ihc/)

To configure IHC sensors insert this section:

```yaml
sensor:
  - platform: ihc
    autosetup: True
```
When autosetup is not the following products will be found in the ihc project:

* Dataline temperature sensor - Will insert 2 temperature sensors
* Dataline Humidity - Will insert 1 humidity and 2 temperature sensors (calculated dewpoint)
* Dataline Lux - will insert 1 light and 1 temperature sensor

If you want to add something manually do it like this:

```yaml
sensor:
  - platform: ihc
    autosetup: True
    sensors:
      - id: 12345
        name: 'mysensor'
        type: 'Temperature'
        unit_of_measurement: '°C'
      - id: 12346
        ...
```
Configuration variables:
- **autosetup** (*Optional*): True to have IHC products auto setup.
- **id** (*Required*): The IHC resource id.
- **name** (*Optional*): The name of the component.
- **sensors** (*Optional*): List of sensors to setup manually
- **type** (*Optional*): The sensor type
- **unit_of_measurement** (*Optional*): Defines the unit of measurement of the sensor, if any.

The resource id should be a float resource. For more information about ihc resource ids see [Manual Setup](../ihc#manualy-setup)


