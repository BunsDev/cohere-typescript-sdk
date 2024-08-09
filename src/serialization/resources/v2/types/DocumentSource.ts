/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";

export const DocumentSource: core.serialization.ObjectSchema<serializers.DocumentSource.Raw, Cohere.DocumentSource> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        document: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace DocumentSource {
    interface Raw {
        id?: string | null;
        document?: Record<string, unknown> | null;
    }
}
