/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetDatasetRequest {
    /**
     * optional filter by dataset type
     */
    datasetType?: string;
    /**
     * optional filter before a date
     */
    before?: Date;
    /**
     * optional filter after a date
     */
    after?: Date;
    /**
     * optional limit to number of results
     */
    limit?: string;
    /**
     * optional offset to start of results
     */
    offset?: string;
}
