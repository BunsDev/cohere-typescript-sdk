/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const GenerateStreamEndResponse: core.serialization.ObjectSchema<
    serializers.GenerateStreamEndResponse.Raw,
    Cohere.GenerateStreamEndResponse
> = core.serialization.object({
    id: core.serialization.string(),
    prompt: core.serialization.string().optional(),
    generations: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).SingleGenerationInStream))
        .optional(),
});

export declare namespace GenerateStreamEndResponse {
    interface Raw {
        id: string;
        prompt?: string | null;
        generations?: serializers.SingleGenerationInStream.Raw[] | null;
    }
}