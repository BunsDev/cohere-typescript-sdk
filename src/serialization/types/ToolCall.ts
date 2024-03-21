/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ToolCall: core.serialization.ObjectSchema<serializers.ToolCall.Raw, Cohere.ToolCall> =
    core.serialization.object({
        name: core.serialization.string(),
        parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    });

export declare namespace ToolCall {
    interface Raw {
        name: string;
        parameters: Record<string, unknown>;
    }
}
