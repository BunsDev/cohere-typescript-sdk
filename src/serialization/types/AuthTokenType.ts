/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Cohere from "../../api/index";
import * as core from "../../core";

export const AuthTokenType: core.serialization.Schema<serializers.AuthTokenType.Raw, Cohere.AuthTokenType> =
    core.serialization.enum_(["bearer", "basic", "noscheme"]);

export declare namespace AuthTokenType {
    type Raw = "bearer" | "basic" | "noscheme";
}
