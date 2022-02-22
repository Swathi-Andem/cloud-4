---
type: card
title: "Horizontal Stack Card"
sidebar_label: Horizontal Stack
description: "The Horizontal Stack card allows you to stack together multiple cards, so they always sit next to each other in the space of one column."
---

The Horizontal Stack card allows you to stack together multiple cards, so they always sit next to each other in the space of one column.

All options for this card can be configured via the user interface.

## YAML Configuration

The following YAML options are available when you use YAML mode or just prefer to use YAML in the Code Editor in the UI.

{% configuration %}
type:
  required: true
  description: "`horizontal-stack`"
  type: string
title:
  required: false
  description: Title of stack.
  type: string
cards:
  required: true
  description: List of cards.
  type: list
{% endconfiguration %}

### Example

```yaml
type: horizontal-stack
title: Lights
cards:
  - type: picture-entity
    image: /local/bed_1.png
    entity: light.ceiling_lights
  - type: picture-entity
    image: /local/bed_2.png
    entity: light.bed_light
```

<p class='img'>
  <img src='/images/lovelace/lovelace_horizontal_stack.PNG' alt='Two picture cards in a horizontal stack card'>
  Two Picture cards in a Horizontal Stack card.
</p>
