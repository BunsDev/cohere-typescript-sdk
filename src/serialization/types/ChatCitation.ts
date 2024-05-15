/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Cohere from "../../api/index";
import * as core from "../../core";

export const ChatCitation: core.serialization.ObjectSchema<serializers.ChatCitation.Raw, Cohere.ChatCitation> =
    core.serialization.object({
        start: core.serialization.number(),
        end: core.serialization.number(),
        text: core.serialization.string(),
        documentIds: core.serialization.property("document_ids", core.serialization.list(core.serialization.string())),
    });

export declare namespace ChatCitation {
    interface Raw {
        start: number;
        end: number;
        text: string;
        document_ids: string[];
    }
}
