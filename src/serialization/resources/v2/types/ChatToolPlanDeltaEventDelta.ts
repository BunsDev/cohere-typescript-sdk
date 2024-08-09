/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cohere from "../../../../api/index";
import * as core from "../../../../core";

export const ChatToolPlanDeltaEventDelta: core.serialization.ObjectSchema<
    serializers.ChatToolPlanDeltaEventDelta.Raw,
    Cohere.ChatToolPlanDeltaEventDelta
> = core.serialization.object({
    toolPlan: core.serialization.property("tool_plan", core.serialization.string().optional()),
});

export declare namespace ChatToolPlanDeltaEventDelta {
    interface Raw {
        tool_plan?: string | null;
    }
}
