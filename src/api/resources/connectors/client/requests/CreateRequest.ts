/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../..";

export interface CreateRequest {
    /** A human-readable name for the connector. */
    name: string;
    /** A description of the connector. */
    description?: string;
    /** The URL of the connector that will be used to search for documents. */
    url: string;
    /** A list of fields to exclude from the prompt (fields remain in the document). */
    excludes?: string[];
    /** The OAuth 2.0 configuration for the connector. Cannot be specified if service_auth is specified. */
    oauth?: Cohere.CreateConnectorOAuth;
    /** Whether the connector is active or not. */
    active?: boolean;
    /** Whether a chat request should continue or not if the request to this connector fails. */
    continueOnFailure?: boolean;
    /** The service to service authentication configuration for the connector. Cannot be specified if oauth is specified. */
    serviceAuth?: Cohere.CreateConnectorServiceAuth;
}
