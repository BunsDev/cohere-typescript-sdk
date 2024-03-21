/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Cohere from "../../../../../../api";
import * as core from "../../../../../../core";

export const ListTrainingStepMetricsResponse: core.serialization.ObjectSchema<
    serializers.finetuning.ListTrainingStepMetricsResponse.Raw,
    Cohere.finetuning.ListTrainingStepMetricsResponse
> = core.serialization.object({
    stepMetrics: core.serialization.property(
        "step_metrics",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../..")).finetuning.TrainingStepMetrics
                )
            )
            .optional()
    ),
    nextPageToken: core.serialization.property("next_page_token", core.serialization.string().optional()),
});

export declare namespace ListTrainingStepMetricsResponse {
    interface Raw {
        step_metrics?: serializers.finetuning.TrainingStepMetrics.Raw[] | null;
        next_page_token?: string | null;
    }
}
