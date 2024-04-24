---
title: ElevenLabs text-to-speech
description: Instructions on how to setup ElevenLabs text-to-speech with Home Assistant.
ha_category:
  - Text-to-speech
ha_release: 2024.4.3
ha_iot_class: Cloud Push
ha_domain: elevenlabstts
ha_platforms:
  - tts
ha_config_flow: true
ha_integration_type: integration
---

The `elevenlabstts` text-to-speech platform uses the official [ElevenLabs SDK](https://github.com/elevenlabs/elevenlabs-python) to read a text with natural sounding voices.

{% include integrations/config_flow.md %}

Check the [complete list of supported languages](https://elevenlabs.io/languages) for an overview which languages can be used.

Check your VoiceLab voices for a description on which voices are available for use.

Check the [models documentation](https://elevenlabs.io/docs/speech-synthesis/models) for allowed models and their benefits.

## Service speak

The `tts.speak` service is the modern way to use TTS. Add the `speak` action, select the entity for your ElevenLabs TTS (it's named for the model and voice you created it with), select the media player entity or group to send the TTS audio to, and enter the message to speak.

For more options about `speak`, see the Speak section on the main [TTS](/integrations/tts/#service-speak) building block page.

In YAML, your action will look like this:

```yaml
service: tts.speak
target:
  entity_id: tts.elevenlabs_modelname_voicename
data:
  media_player_entity_id: media_player.giant_tv
  message: Hello, can you hear me now?
```

For more information about using text-to-speech with Home Assistant and more details on all the options it provides, see the [TTS documentation](/integrations/tts/).
