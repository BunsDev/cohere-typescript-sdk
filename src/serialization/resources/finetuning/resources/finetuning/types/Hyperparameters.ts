/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Cohere from "../../../../../../api";
import * as core from "../../../../../../core";

export const Hyperparameters: core.serialization.ObjectSchema<
    serializers.finetuning.Hyperparameters.Raw,
    Cohere.finetuning.Hyperparameters
> = core.serialization.object({
    earlyStoppingPatience: core.serialization.property(
        "early_stopping_patience",
        core.serialization.number().optional()
    ),
    earlyStoppingThreshold: core.serialization.property(
        "early_stopping_threshold",
        core.serialization.number().optional()
    ),
    trainBatchSize: core.serialization.property("train_batch_size", core.serialization.number().optional()),
    trainEpochs: core.serialization.property("train_epochs", core.serialization.number().optional()),
    learningRate: core.serialization.property("learning_rate", core.serialization.number().optional()),
});

export declare namespace Hyperparameters {
    interface Raw {
        early_stopping_patience?: number | null;
        early_stopping_threshold?: number | null;
        train_batch_size?: number | null;
        train_epochs?: number | null;
        learning_rate?: number | null;
    }
}