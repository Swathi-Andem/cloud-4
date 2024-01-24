---
title: Ecovacs
description: Instructions on how to integrate Ecovacs vacuums within Home Assistant.
ha_category:
  - Hub
  - Vacuum
ha_iot_class: Cloud Push
ha_release: 0.77
ha_codeowners:
  - '@OverloadUT'
  - '@mib1185'
  - '@edenhaus'
ha_domain: ecovacs
ha_platforms:
  - binary_sensor
  - select
  - sensor
  - vacuum
ha_integration_type: integration
---

The `ecovacs` {% term integration %} is the main integration to integrate all [Ecovacs](https://www.ecovacs.com) (Deebot) vacuums. You will need your Ecovacs account information (username, password) to discover and control vacuums in your account.

{% include integrations/config_flow.md %}

Additional note: There are some issues during the password encoding. Using some special characters (e.g., `-`) in your password does not work.

## Provided entities

The Ecovacs integration provides a vacuum {% term entity %} for each device that is connected to your Ecovacs account.

Using the vacuum entity, you can monitor and control your Ecovacs Deebot vacuum.

Additionally, **depending on your model**, the integration provides the following entities:

- **Binary sensor**: 
  - `Mop attached`: On if the mop is attached. Note: If you do not see the state change to `Mop attached` in Home Assistant, you may need to wake up the robot in order to push the state change. Some models report an entity state change only if the overall status of the vacuum has changed. For example, if the overall state changes from `docked` to `cleaning`.
- **Select**:
  - `Water amount`: Specify the water amount used during cleaning with the mop.
  - `Work mode`: Specify the mode, how the bot should clean.
- **Sensor**:
  - `Error`: The error code and a description of the error. `0` means no error. Disabled by default
  - `Lifespan`: For each component an entity with the remaining lifespan will be created
  - `Network`: The following network related entities will be created. All disabled by default
    - `Ip address`
    - `Wi-Fi RSSI`
    - `Wi-Fi SSID`
  - `Cleaning cycle`:
    - `Area`: The cleaned area
    - `Time`: The cleaned time
  -  `Total statistics`: Updated after each cleaning cycle:
    - `Area`: Total cleaned area
    - `Cleanings`: The number of cleanings
    - `Time`: The total cleaning time

## Vacuum

The `ecovacs` vacuum platform allows you to monitor and control your Ecovacs Deebot vacuums.

### Integration lifespan

The remaining lifespan of components on your Deebot vacuum will be reported as attributes on the vacuum entity. The value will be a whole number representing the percentage of life remaining.

Here's an example of how to extract the filter's lifespan to its own sensor using a [template sensor](/integrations/template):

{% raw %}

```yaml
# Example configuration.yaml entry
template:
  - sensor:
    - name: "Vacuum Filter Remaining Lifespan"
      unit_of_measurement: "%"
      state: "{{ state_attr('vacuum.my_vacuum_id', 'component_filter') }}"
```

{% endraw %}

Or, if you want a simple binary sensor that becomes `On` when the filter needs to be replaced (5% or less):

{% raw %}

```yaml
# Example configuration.yaml entry
template:
  - binary_sensor:
    - name: "Vacuum Filter"
      device_class: problem
      state: "{{ state_attr('vacuum.my_vacuum_id', 'component_filter') <= 5 }}"
```

{% endraw %}

### Handling errors

The vacuum entity has an `error` attribute that will contain the _most recent_ error message that came from the vacuum. There is not a comprehensive list of all error messages, so you may need to do some experimentation to determine the error messages that your vacuum can send.

If the vacuum fires a "no error" event, the `error` attribute will change back to `None`. Note, however, that this does not happen for all types of errors.

Alternatively, you can use the `ecovacs_error` event to watch for errors. This event will contain a data payload that looks like:

```json
{
  "entity_id": "vacuum.deebot_m80",
  "error": "an_error_name"
}
```

Finally, if a vacuum becomes unavailable (usually due to being idle and off its charger long enough for it to completely power off,) the vacuum's `status` attribute will change to `offline` until it is turned back on.
