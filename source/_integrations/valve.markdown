---
title: Valve
description: Instructions on how to integrate valves into Home Assistant.
ha_category:
  - Valve
ha_release: 2023.12.0
ha_quality_scale: internal
ha_codeowners:
  - '@home-assistant/core'
ha_domain: valve
ha_integration_type: entity
---

Home Assistant can give you an interface to control valves like water, gas or air valves.

{% include integrations/building_block_integration.md %}

## Device Class

You can change the kind of valve you are representing in the [customize section](/docs/configuration/customizing-devices/). The following device classes are supported for valves:

- **None**: Generic valve. This is the default and doesn't need to be set.
- **water**: Valve that controls the flow of water through a system.
- **gas**: Valve that controls the flow of gas through a system.

## Services

### Cover control services

All valves respond to `valve.open`, `valve.close` and `valve.toggle`.
Valves that allow intermediate position may be controlled also with `valve.set_position` and `valve.stop`.

| Service data attribute | Optional | Description |
| ---------------------- | -------- | ----------- |
| `entity_id` | yes | String or list of strings that point at `entity_id`'s of valves. Use `entity_id: all` to target all.

#### Automation example

```yaml
automation:
  trigger:
    platform: time
    at: "07:15:00"
  action:
    - service: valve.close
      target:
        entity_id: valve.demo
```

### Service `valve.set_position`

Set valve position of one or multiple valves, if they support intermediate positions.

| Service data attribute | Optional | Description |
| ---------------------- | -------- | ----------- |
| `entity_id` | yes | String or list of strings that point at `entity_id`'s of valves. Use `entity_id: all` to target all.
| `position` | no | Integer between 0 and 100.

#### Automation example

```yaml
automation:
  trigger:
    platform: time
    at: "07:15:00"
  action:
    - service: valve.set_position
      target:
        entity_id: valve.demo
      data:
        position: 50
```
