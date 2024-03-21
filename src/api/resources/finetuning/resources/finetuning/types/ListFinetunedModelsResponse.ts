/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../../..";

/**
 * Response to a request to list fine-tuned models.
 */
export interface ListFinetunedModelsResponse {
    /** List of fine-tuned models matching the request. */
    finetunedModels?: Cohere.finetuning.FinetunedModel[];
    /**
     * Pagination token to retrieve the next page of results. If the value is "",
     * it means no further results for the request.
     */
    nextPageToken?: string;
    /** Total count of results. */
    totalSize?: number;
}
