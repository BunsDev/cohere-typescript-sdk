/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../index";

export interface NonStreamedChatResponse {
    /** Contents of the reply generated by the model. */
    text: string;
    /** Unique identifier for the generated reply. Useful for submitting feedback. */
    generationId?: string;
    /** Inline citations for the generated reply. */
    citations?: Cohere.ChatCitation[];
    /** Documents seen by the model when generating the reply. */
    documents?: Cohere.ChatDocument[];
    /** Denotes that a search for documents is required during the RAG flow. */
    isSearchRequired?: boolean;
    /** Generated search queries, meant to be used as part of the RAG flow. */
    searchQueries?: Cohere.ChatSearchQuery[];
    /** Documents retrieved from each of the conducted searches. */
    searchResults?: Cohere.ChatSearchResult[];
    finishReason?: Cohere.FinishReason;
    toolCalls?: Cohere.ToolCall[];
    /** A list of previous messages between the user and the model, meant to give the model conversational context for responding to the user's `message`. */
    chatHistory?: Cohere.Message[];
    /** The prompt that was used. Only present when `return_prompt` in the request is set to true. */
    prompt?: string;
    meta?: Cohere.ApiMeta;
}
