/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "../../../index";

/**
 * A array of tool calls to be made.
 */
export interface ToolCall2 {
    id?: string;
    type?: "function";
    function?: Cohere.ToolCall2Function;
}