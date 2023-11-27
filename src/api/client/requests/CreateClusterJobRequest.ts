/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateClusterJobRequest {
    required?: unknown;
    embeddingsUrl?: string;
    inputDatasetId?: string;
    /** Defaults to `10`. Parameter for HDBSCAN. Only clusters with this number of elements will be returned with a positive cluster number. */
    minClusterSize?: number;
    /** Parameter for UMAP. A scalar governing how to balance global vs local structure in the data. */
    nNeighbors?: number;
    /** Parameter for UMAP. A boolean governing whether the embeddings from UMAP (that will be clustered with HDBSCAN) are deterministic. */
    isDeterministic?: boolean;
    generateDescriptions?: boolean;
}