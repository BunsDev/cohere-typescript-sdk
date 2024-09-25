/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Cohere from "../../api/index";
import * as core from "../../core";
import { ToolV2Function } from "./ToolV2Function";

export const ToolV2: core.serialization.ObjectSchema<serializers.ToolV2.Raw, Cohere.ToolV2> = core.serialization.object(
    {
        type: core.serialization.stringLiteral("function").optional(),
        function: ToolV2Function.optional(),
    }
);

export declare namespace ToolV2 {
    interface Raw {
        type?: "function" | null;
        function?: ToolV2Function.Raw | null;
    }
}