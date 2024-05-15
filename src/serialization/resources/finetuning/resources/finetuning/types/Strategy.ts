/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Cohere from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Strategy: core.serialization.Schema<serializers.finetuning.Strategy.Raw, Cohere.finetuning.Strategy> =
    core.serialization.enum_(["STRATEGY_UNSPECIFIED", "STRATEGY_VANILLA", "STRATEGY_TFEW"]);

export declare namespace Strategy {
    type Raw = "STRATEGY_UNSPECIFIED" | "STRATEGY_VANILLA" | "STRATEGY_TFEW";
}
