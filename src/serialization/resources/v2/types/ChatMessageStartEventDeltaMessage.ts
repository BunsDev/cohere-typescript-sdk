/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";

export const ChatMessageStartEventDeltaMessage: core.serialization.ObjectSchema<
    serializers.ChatMessageStartEventDeltaMessage.Raw,
    Cohere.ChatMessageStartEventDeltaMessage
> = core.serialization.object({
    role: core.serialization.stringLiteral("assistant").optional(),
});

export declare namespace ChatMessageStartEventDeltaMessage {
    interface Raw {
        role?: "assistant" | null;
    }
}
