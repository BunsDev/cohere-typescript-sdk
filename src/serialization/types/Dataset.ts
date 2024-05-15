/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Cohere from "../../api/index";
import * as core from "../../core";
import { DatasetType } from "./DatasetType";
import { DatasetValidationStatus } from "./DatasetValidationStatus";
import { DatasetPart } from "./DatasetPart";

export const Dataset: core.serialization.ObjectSchema<serializers.Dataset.Raw, Cohere.Dataset> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        datasetType: core.serialization.property("dataset_type", DatasetType),
        validationStatus: core.serialization.property("validation_status", DatasetValidationStatus),
        validationError: core.serialization.property("validation_error", core.serialization.string().optional()),
        schema: core.serialization.string().optional(),
        requiredFields: core.serialization.property(
            "required_fields",
            core.serialization.list(core.serialization.string()).optional()
        ),
        preserveFields: core.serialization.property(
            "preserve_fields",
            core.serialization.list(core.serialization.string()).optional()
        ),
        datasetParts: core.serialization.property("dataset_parts", core.serialization.list(DatasetPart).optional()),
        validationWarnings: core.serialization.property(
            "validation_warnings",
            core.serialization.list(core.serialization.string()).optional()
        ),
    });

export declare namespace Dataset {
    interface Raw {
        id: string;
        name: string;
        created_at: string;
        updated_at: string;
        dataset_type: DatasetType.Raw;
        validation_status: DatasetValidationStatus.Raw;
        validation_error?: string | null;
        schema?: string | null;
        required_fields?: string[] | null;
        preserve_fields?: string[] | null;
        dataset_parts?: DatasetPart.Raw[] | null;
        validation_warnings?: string[] | null;
    }
}
