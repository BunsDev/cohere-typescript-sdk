/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../index";

/**
 * A streamed event delta which signifies a delta in tool call arguments.
 */
export interface ChatToolCallDeltaEvent extends Cohere.ChatStreamEventType {
    index?: number;
    delta?: Cohere.ChatToolCallDeltaEventDelta;
}
