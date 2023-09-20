---
title: Bang & Olufsen
description: Instructions on how to integrate Bang & Olufsen devices into Home Assistant.
ha_category:
  - Media Player
  - Multimedia
ha_release: 2023.11
ha_iot_class: Local Push
ha_domain: bangolufsen
ha_platforms:
  - media_player
ha_codeowners:
  - "@mj23000"
ha_config_flow: true
ha_zeroconf: true
ha_integration_type: integration
---

The `bangolufsen` integration enables control of some of the features of certain [Bang & Olufsen](https://www.bang-olufsen.com/) devices through Home Assistant.

## Compatible devices

Devices that have been tested and _should_ work without any trouble are:

- [Beolab 8](https://www.bang-olufsen.com/en/dk/speakers/beolab-8)
- [Beolab 28](https://www.bang-olufsen.com/en/dk/speakers/beolab-28)
- [Beosound 2 3rd gen](https://www.bang-olufsen.com/en/dk/speakers/beosound-2)
- [Beosound A5](https://www.bang-olufsen.com/en/dk/speakers/beosound-a5)
- [Beosound A9 5th gen](https://www.bang-olufsen.com/en/dk/speakers/beosound-a9)
- [Beosound Balance](https://www.bang-olufsen.com/en/dk/speakers/beosound-balance)
- [Beosound Emerge](https://www.bang-olufsen.com/en/dk/speakers/beosound-emerge)
- [Beosound Level](https://www.bang-olufsen.com/en/dk/speakers/beosound-level)
- [Beosound Theatre](https://www.bang-olufsen.com/en/dk/soundbars/beosound-theatre)

and any other Mozart based products.

{% include integrations/config_flow.md %}

{% configuration_basic %}
IP Address:
  description: The IP address of your device. Can be found by navigating to the device on the [Bang & Olufsen app](https://www.bang-olufsen.com/en/dk/story/apps) and selecting `⋯` → `Product settings` → `About` → `IP address`.
  required: true
  type: string
Device model:
  description: The model name of your Bang & Olufsen device. This is used to determine some capabilities of the device. If the device is not in the list yet, choose a product similar to yours.
  required: true
  type: string
{% endconfiguration_basic %}

## Entities

This integration currently adds a media_player entity.

## Services

### play_media services

The Bang & Olufsen integration supports different playback types in the `media_player.play_media` service: playback from URL, activating a favourite, playback from a local file, playing a radio station, activating a Deezer flow and Deezer playlists, albums, and tracks.

#### play_media examples

Playing [DR P1](https://www.dr.dk/lyd/p1) from a URL:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: url
  media_content_id: http://live-icy.dr.dk/A/A03H.mp3
```

Activating the first favourite:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: favourite
  media_content_id: 1
```

Playing a local file:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_id: media-source://media_source/local/example.mp3
  media_content_type: music
```

Playing a radio station:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_id: 1234567890123456
  media_content_type: radio
```

Playing a Deezer flow. Optionally define a Deezer user ID:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: deezer
  media_content_id: flow
  extra:
    id: 1234567890
```

Playing a Deezer playlist. Optionally define starting position for the playlist:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: deezer
  media_content_id: playlist:1234567890
  extra:
    start_from: 123
```

Playing a Deezer album. Optionally define starting position for the album:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: deezer
  media_content_id: album:1234567890
  extra:
    start_from: 123
```

Playing a Deezer track:

```yaml
service: media_player.play_media
target:
  entity_id: media_player.beosound_balance_12345678
data:
  media_content_type: deezer
  media_content_id: 1234567890
```

## Automations

WebSocket notifications received from the device are fired as events in Home Assistant. These can be received by listening to `bangolufsen_websocket_event` event types where `device_id` or `serial_number` can be used to differentiate devices.

### Getting Deezer URIs

In order to find Deezer playlist, album URIs and user IDs for Deezer flows, the Deezer website has to be accessed. When navigating to an album, the URL will look something like: <https://www.deezer.com/en/album/ALBUM_ID>, and this simply needs to be converted to: `album:ALBUM_ID` and the same applies to playlist, which have the format: `playlist:PLAYLIST_ID`.

Additionally a Deezer user ID can be found at <https://www.deezer.com/en/profile/USER_ID> by selecting the active user in a web browser.

Deezer track IDs can currently only easily be found by playing the track on the device and looking at the extra state attributes, where it is shown with the key "deezer_track_id". Tracks do not have a prefix so the ID needs to be used directly.
