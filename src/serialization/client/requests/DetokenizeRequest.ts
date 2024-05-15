/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Cohere from "../../../api/index";
import * as core from "../../../core";

export const DetokenizeRequest: core.serialization.Schema<serializers.DetokenizeRequest.Raw, Cohere.DetokenizeRequest> =
    core.serialization.object({
        tokens: core.serialization.list(core.serialization.number()),
        model: core.serialization.string(),
    });

export declare namespace DetokenizeRequest {
    interface Raw {
        tokens: number[];
        model: string;
    }
}
