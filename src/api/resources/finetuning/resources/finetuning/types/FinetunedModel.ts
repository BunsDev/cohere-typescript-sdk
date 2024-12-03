/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../../../index";

/**
 * This resource represents a fine-tuned model.
 */
export interface FinetunedModel {
    /** read-only. FinetunedModel ID. */
    id?: string;
    /** FinetunedModel name (e.g. `foobar`). */
    name: string;
    /** read-only. User ID of the creator. */
    creatorId?: string;
    /** read-only. Organization ID. */
    organizationId?: string;
    /** FinetunedModel settings such as dataset, hyperparameters... */
    settings: Cohere.finetuning.Settings;
    /** read-only. Current stage in the life-cycle of the fine-tuned model. */
    status?: Cohere.finetuning.Status;
    /** read-only. Creation timestamp. */
    createdAt?: Date;
    /** read-only. Latest update timestamp. */
    updatedAt?: Date;
    /** read-only. Timestamp for the completed fine-tuning. */
    completedAt?: Date;
    /** read-only. Deprecated: Timestamp for the latest request to this fine-tuned model. */
    lastUsed?: Date;
}
