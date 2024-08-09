/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";
import { SystemMessageContentItem } from "./SystemMessageContentItem";

export const SystemMessageContent: core.serialization.Schema<
    serializers.SystemMessageContent.Raw,
    Cohere.SystemMessageContent
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(SystemMessageContentItem),
]);

export declare namespace SystemMessageContent {
    type Raw = string | SystemMessageContentItem.Raw[];
}
