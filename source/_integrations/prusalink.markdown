---
title: PrusaLink
description: Instructions on monitoring Prusa 3D printers using PrusaLink.
ha_category:
  - 3D Printing
ha_iot_class: Local Polling
ha_release: '2022.9'
ha_config_flow: true
ha_codeowners:
  - '@balloob'
ha_domain: prusalink
ha_integration_type: integration
ha_platforms:
  - button
  - camera
  - sensor
ha_dhcp: true
---

The PrusaLink integration allows you to monitor your [Prusa 3D printer](https://www.prusa3d.com) and its progress with your Home Assistant installation. This integration works with Prusa MINI, Prusa MK3.9/MK4 and Prusa XL. It does not work with the older Raspberry Pi Prusa Link printers.

This integration requires PrusaLink v2 which is available in firmware 4.4.0 or later.

To obtain the username and password:
 - On your printer, navigate to **Settings** > **Network** > **PrusaLink**. 
 - The username and password is shown at the bottom of the screen.

{% include integrations/config_flow.md %}
