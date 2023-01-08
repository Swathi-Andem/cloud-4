---
title: Reolink NVR/camera
description: Instructions on how to integrate Reolink devices (NVR/cameras) into Home Assistant.
ha_category:
  - Camera
ha_iot_class: Local Polling
ha_release: 2023.1
ha_domain: reolink
ha_codeowners:
  - '@starkillerOG'
ha_config_flow: true
ha_platforms:
  - Camera
ha_integration_type: integration
---

The integration allows you to control [Reolink](https://reolink.com/) NVRs or cameras.

{% include integrations/config_flow.md %}

{% include integrations/option_flow.md %}
{% configuration_basic %}
Protocol:
  description: Switch between RTSP or RTMP streaming protocol. 
{% endconfiguration_basic %}

## Camera streams

This integration creates a few camera entities, one for each stream type with different resolutions: Main, Sub, Ext, and Snapshots.
The Sub stream camera entity is enabled by default; the other streams are disabled by default.
The snapshots stream provides a sequence of image snapshots giving very low latency at the cost of a very low frame rate; this can be used when the hi-res RTMP/RTSP video stream has too much lag.

## Tested models

The following models have been tested and confirmed to work:

- E1 Zoom
- E1 Outdoor
- RLC-410W
- RLC-420-5MP
- RLC-511W
- RLC-520
- RLC-522
- RLC-810A
- RLC-811A
- RLC-820A
- RLC-823A
- RLC-420-5MP
- RLN8-410 NVR
- Reolink Video Doorbell (PoE and Wi-Fi)

Battery-powered cameras are not yet supported.

The following models are lacking the HTTP webserver API and can therfore not work with this integration:

- E1 Pro

## Reolink firmware limitations

- The Reolink NVR only sends event-notifications if motion happens on the camera connected to the first (index "0") channel, therefore the binary sensors of all channels will only be updated when the first channel sees motion.
- Reolink doorbell presses only generate ONVIF event notifications when the doorbell is directly connected to your network. The doorbell visitor binary sensor will not work when connecting the Reolink doorbell to an NVR.
