/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Cohere from "../../api/index";
import * as core from "../../core";

export const ChatConnector: core.serialization.ObjectSchema<serializers.ChatConnector.Raw, Cohere.ChatConnector> =
    core.serialization.object({
        id: core.serialization.string(),
        userAccessToken: core.serialization.property("user_access_token", core.serialization.string().optional()),
        continueOnFailure: core.serialization.property("continue_on_failure", core.serialization.boolean().optional()),
        options: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace ChatConnector {
    interface Raw {
        id: string;
        user_access_token?: string | null;
        continue_on_failure?: boolean | null;
        options?: Record<string, unknown> | null;
    }
}
