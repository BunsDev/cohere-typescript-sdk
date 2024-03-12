/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The validation status of the dataset
 */
export type DatasetValidationStatus = "unknown" | "queued" | "processing" | "failed" | "validated" | "skipped";

export const DatasetValidationStatus = {
    Unknown: "unknown",
    Queued: "queued",
    Processing: "processing",
    Failed: "failed",
    Validated: "validated",
    Skipped: "skipped",
} as const;