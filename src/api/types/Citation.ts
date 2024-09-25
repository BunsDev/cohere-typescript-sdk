/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../index";

/**
 * Citation information containing sources and the text cited.
 */
export interface Citation {
    start?: number;
    end?: number;
    text?: string;
    sources?: Cohere.Source[];
}