/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";

export const ChatToolCallStartEventDeltaToolCallFunction: core.serialization.ObjectSchema<
    serializers.ChatToolCallStartEventDeltaToolCallFunction.Raw,
    Cohere.ChatToolCallStartEventDeltaToolCallFunction
> = core.serialization.object({
    name: core.serialization.string().optional(),
    arguments: core.serialization.string().optional(),
});

export declare namespace ChatToolCallStartEventDeltaToolCallFunction {
    interface Raw {
        name?: string | null;
        arguments?: string | null;
    }
}