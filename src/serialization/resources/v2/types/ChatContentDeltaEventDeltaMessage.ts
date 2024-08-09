/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";
import { ChatContentDeltaEventDeltaMessageContent } from "./ChatContentDeltaEventDeltaMessageContent";

export const ChatContentDeltaEventDeltaMessage: core.serialization.ObjectSchema<
    serializers.ChatContentDeltaEventDeltaMessage.Raw,
    Cohere.ChatContentDeltaEventDeltaMessage
> = core.serialization.object({
    content: ChatContentDeltaEventDeltaMessageContent.optional(),
});

export declare namespace ChatContentDeltaEventDeltaMessage {
    interface Raw {
        content?: ChatContentDeltaEventDeltaMessageContent.Raw | null;
    }
}
