/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";
import { Source } from "./Source";

export const Citation: core.serialization.ObjectSchema<serializers.Citation.Raw, Cohere.Citation> =
    core.serialization.object({
        start: core.serialization.string().optional(),
        end: core.serialization.string().optional(),
        text: core.serialization.string().optional(),
        sources: core.serialization.list(Source).optional(),
    });

export declare namespace Citation {
    interface Raw {
        start?: string | null;
        end?: string | null;
        text?: string | null;
        sources?: Source.Raw[] | null;
    }
}