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
  - vacuum
ha_integration_type: integration
---

The `ecovacs` integration is the main integration to integrate all [Ecovacs](https://www.ecovacs.com) (Deebot) vacuums. You will need your Ecovacs account information (username, password) to discover and control vacuums in your account.

There is currently support for the following device types within Home Assistant:

- [Vacuum](#vacuum)

{% include integrations/config_flow.md %}

Note: For some countries, you will need to set `continent` to `ww` (meaning worldwide). There is unfortunately no way to know the correct settings other than guessing and checking.

Additional note: There are some issues during the password encoding. Using some special characters (e.g., `-`) in your password does not work.


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
