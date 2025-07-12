export const openAiFunctionMock = {
  id: "chatcmpl-Bqb12S5Z6m2UOq7g6NOoGIOxnoqdU",
  object: "chat.completion",
  created: 1751875044,
  model: "gpt-4o-2024-08-06",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: null,
        function_call: {
          name: "plan_trip",
          arguments:
            '{"start_date":"2025-07-13","end_date":"2025-07-15","location":"台北板橋","travel_theme":"自然","budget_range":{"min":0,"max":4000},"room_type":"豪華雙人房","transport_mode":"car"}',
        },
        refusal: null,
        annotations: [],
      },
      logprobs: null,
      finish_reason: "function_call",
    },
  ],
  usage: {
    prompt_tokens: 435,
    completion_tokens: 66,
    total_tokens: 501,
    prompt_tokens_details: {
      cached_tokens: 0,
      audio_tokens: 0,
    },
    completion_tokens_details: {
      reasoning_tokens: 0,
      audio_tokens: 0,
      accepted_prediction_tokens: 0,
      rejected_prediction_tokens: 0,
    },
  },
  service_tier: "default",
  system_fingerprint: "fp_07871e2ad8",
};

export const openAiLostFieldMock = {
  id: "chatcmpl-BqwohxAU4w4dRAgIZXVKzjX9q50So",
  object: "chat.completion",
  created: 1751958847,
  model: "gpt-4o-2024-08-06",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        function_call: null,
        content: "好的，請問你有偏好的旅遊地點嗎？例如哪個城市的動物園？",
        refusal: null,
        annotations: [],
      },
      function_call: undefined,
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 391,
    completion_tokens: 24,
    total_tokens: 415,
    prompt_tokens_details: {
      cached_tokens: 0,
      audio_tokens: 0,
    },
    completion_tokens_details: {
      reasoning_tokens: 0,
      audio_tokens: 0,
      accepted_prediction_tokens: 0,
      rejected_prediction_tokens: 0,
    },
  },
  service_tier: "default",
  system_fingerprint: "fp_07871e2ad8",
};
