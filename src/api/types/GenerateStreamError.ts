/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../index";

export interface GenerateStreamError extends Cohere.GenerateStreamEvent {
    /** Refers to the nth generation. Only present when `num_generations` is greater than zero. */
    index?: number;
    isFinished: boolean;
    finishReason: Cohere.FinishReason;
    /** Error message */
    err: string;
}
