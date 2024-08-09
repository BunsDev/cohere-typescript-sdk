/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";

export const ChatContentDeltaEventDeltaMessageContent: core.serialization.ObjectSchema<
    serializers.ChatContentDeltaEventDeltaMessageContent.Raw,
    Cohere.ChatContentDeltaEventDeltaMessageContent
> = core.serialization.object({
    text: core.serialization.string().optional(),
});

export declare namespace ChatContentDeltaEventDeltaMessageContent {
    interface Raw {
        text?: string | null;
    }
}
