/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";
import { ChatStreamEventType } from "./ChatStreamEventType";

export const ChatContentEndEvent: core.serialization.ObjectSchema<
    serializers.ChatContentEndEvent.Raw,
    Cohere.ChatContentEndEvent
> = core.serialization
    .object({
        index: core.serialization.number().optional(),
    })
    .extend(ChatStreamEventType);

export declare namespace ChatContentEndEvent {
    interface Raw extends ChatStreamEventType.Raw {
        index?: number | null;
    }
}
