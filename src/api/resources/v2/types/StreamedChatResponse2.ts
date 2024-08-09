/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../index";

/**
 * StreamedChatResponse is returned in streaming mode (specified with `stream=True` in the request).
 */
export type StreamedChatResponse2 =
    | Cohere.StreamedChatResponse2.MessageStart
    | Cohere.StreamedChatResponse2.ContentStart
    | Cohere.StreamedChatResponse2.ContentDelta
    | Cohere.StreamedChatResponse2.ContentEnd
    | Cohere.StreamedChatResponse2.ToolPlanDelta
    | Cohere.StreamedChatResponse2.ToolCallStart
    | Cohere.StreamedChatResponse2.ToolCallDelta
    | Cohere.StreamedChatResponse2.ToolCallEnd
    | Cohere.StreamedChatResponse2.MessageEnd;

export declare namespace StreamedChatResponse2 {
    interface MessageStart extends Cohere.ChatMessageStartEvent {
        type: "message-start";
    }

    interface ContentStart extends Cohere.ChatContentStartEvent {
        type: "content-start";
    }

    interface ContentDelta extends Cohere.ChatContentDeltaEvent {
        type: "content-delta";
    }

    interface ContentEnd extends Cohere.ChatContentEndEvent {
        type: "content-end";
    }

    interface ToolPlanDelta extends Cohere.ChatToolPlanDeltaEvent {
        type: "tool-plan-delta";
    }

    interface ToolCallStart extends Cohere.ChatToolCallStartEvent {
        type: "tool-call-start";
    }

    interface ToolCallDelta extends Cohere.ChatToolCallDeltaEvent {
        type: "tool-call-delta";
    }

    interface ToolCallEnd extends Cohere.ChatToolCallEndEvent {
        type: "tool-call-end";
    }

    interface MessageEnd extends Cohere.ChatMessageEndEvent {
        type: "message-end";
    }
}
