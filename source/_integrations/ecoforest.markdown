---
title: Ecoforest
description: Instructions on how to integrate Ecoforest fireplaces with Home Assistant.
ha_category:
  - Climate
ha_release: 2023.10
ha_iot_class: Local Polling
ha_config_flow: true
ha_codeowners:
  - '@pjanuario'
ha_domain: ecoforest
ha_platforms:
  - sensor
ha_integration_type: integration
---

The Ecoforest integration allows monitoring and control of local [Ecoforest](https://ecoforest.com) fireplaces in Home Assistant.

There is currently support for the following device platforms within Home Assistant:

- [Number](#number)
- [Sensor](#sensor)

## Prerequisites

To configure the Ecoforest integration you will need to enter your Ecoforest credentials which are the same ones you would use with the manufacturer app. The image below shows how to obtain the credentials:

- Username: use the serial number of the device as identified by 1.
- Password: use the first 8 characters of the wifi password as identified by 4.

![Ecoforest Credentials](/images/integrations/ecoforest/credentials.png)

{% include integrations/config_flow.md %}

## Supported models

Any Ecoforest device working with [Ecoforest Home](https://ecoforesthome.com/) should be supported, this integration is confirmed to support:

- Ecoforest Cordoba Glass (using firmware version `30Abr19_v2z`)

## Number

The Ecoforest integration exposes a number entity for the device power level.

## Sensor

The Ecoforest integration exposes a sensor for the current ambient temperature
