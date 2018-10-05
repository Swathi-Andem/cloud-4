---
layout: page
title: "OctoPrint"
description: "Instructions on how to setup the OctoPrint in Home Assistant."
date: 2015-01-20 22:36
sidebar: true
comments: false
sharing: true
footer: true
logo: octoprint.png
ha_category: Hub
featured: false
ha_release: 0.19
ha_iot_class: "Local Polling"
---

[OctoPrint](http://octoprint.org/) is a web interface for your 3D printer. This is the main component to integrate OctoPrint sensors, you will have to setup sensors and binary sensors separately.

To get started with the OctoPrint API, please follow the directions on their [site](http://docs.octoprint.org/en/master/api/general.html). Once OctoPrint is configured you will need to add your API key and host to your `configuration.yaml`. 


```yaml
octoprint:
  - name: YOUR_OCTOPRINT_NAME
     host: YOUR_OCTOPRINT_HOST
     api_key: YOUR_API_KEY
     bed: false
     number_of_tools: 1
```

{% configuration %}
name:
  description: Name to use in the frontend.
  required: true
  type: string
  default: Octoprint
host:
  description: IP Address or host name.
  required: true
  type: string
api_key:
  description: API key for Octoprint host.
  required: true
  type: string
port:
  description: Port to use for the Octoprint host.
  required: false
  type: string
ssl:
  description: Use SSL when communication to Octoprint host.
  required: false
  type: bool
  default: false
bed:
  description: Does this printer have a heated bed
  required: false
  type: bool
number_of_tools:
  description: Number of temperature adjustable tools. i.e. nozzle.
  required: false
  type: int
{% endconfiguration %}