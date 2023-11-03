/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const DetokenizeResponse: core.serialization.ObjectSchema<
    serializers.DetokenizeResponse.Raw,
    Cohere.DetokenizeResponse
> = core.serialization.object({
    text: core.serialization.string(),
    meta: core.serialization.lazyObject(async () => (await import("..")).ApiMeta).optional(),
});

export declare namespace DetokenizeResponse {
    interface Raw {
        text: string;
        meta?: serializers.ApiMeta.Raw | null;
    }
}