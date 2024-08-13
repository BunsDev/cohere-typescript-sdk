/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";
import { SystemMessageContent } from "./SystemMessageContent";

export const SystemMessage: core.serialization.ObjectSchema<serializers.SystemMessage.Raw, Cohere.SystemMessage> =
    core.serialization.object({
        content: SystemMessageContent,
    });

export declare namespace SystemMessage {
    interface Raw {
        content: SystemMessageContent.Raw;
    }
}