/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../index";

/**
 * @example
 *     {
 *         model: "rerank-english-v3.0",
 *         query: "What is the capital of the United States?",
 *         documents: ["Carson City is the capital city of the American state of Nevada.", "The Commonwealth of the Northern Mariana Islands is a group of islands in the Pacific Ocean. Its capital is Saipan.", "Washington, D.C. (also known as simply Washington or D.C., and officially as the District of Columbia) is the capital of the United States. It is a federal district.", "Capital punishment (the death penalty) has existed in the United States since beforethe United States was a country. As of 2017, capital punishment is legal in 30 of the 50 states."]
 *     }
 */
export interface RerankRequest {
    /** The identifier of the model to use, one of : `rerank-english-v3.0`, `rerank-multilingual-v3.0`, `rerank-english-v2.0`, `rerank-multilingual-v2.0` */
    model?: string;
    /** The search query */
    query: string;
    /**
     * A list of document objects or strings to rerank.
     * If a document is provided the text fields is required and all other fields will be preserved in the response.
     *
     * The total max chunks (length of documents * max_chunks_per_doc) must be less than 10000.
     *
     * We recommend a maximum of 1,000 documents for optimal endpoint performance.
     */
    documents: Cohere.RerankRequestDocumentsItem[];
    /** The number of most relevant documents or indices to return, defaults to the length of the documents */
    topN?: number;
    /** If a JSON object is provided, you can specify which keys you would like to have considered for reranking. The model will rerank based on order of the fields passed in (i.e. rank_fields=['title','author','text'] will rerank using the values in title, author, text  sequentially. If the length of title, author, and text exceeds the context length of the model, the chunking will not re-consider earlier fields). If not provided, the model will use the default text field for ranking. */
    rankFields?: string[];
    /**
     * - If false, returns results without the doc text - the api will return a list of {index, relevance score} where index is inferred from the list passed into the request.
     * - If true, returns results with the doc text passed in - the api will return an ordered list of {index, text, relevance score} where index + text refers to the list passed into the request.
     */
    returnDocuments?: boolean;
    /** The maximum number of chunks to produce internally from a document */
    maxChunksPerDoc?: number;
}
