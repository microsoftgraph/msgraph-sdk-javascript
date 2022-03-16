import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationAssignmentGradeType, EducationItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricLevel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The description of this rubric level.  */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric level.  */
    private _displayName?: string | undefined;
    /** Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.  */
    private _grading?: EducationAssignmentGradeType | undefined;
    /** The ID of this resource.  */
    private _levelId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new rubricLevel and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the description property value. The description of this rubric level.
     * @returns a educationItemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric level.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of this rubric level.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of this rubric level.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["description", (o, n) => { (o as unknown as RubricLevel).description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as RubricLevel).displayName = n.getStringValue(); }],
            ["grading", (o, n) => { (o as unknown as RubricLevel).grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); }],
            ["levelId", (o, n) => { (o as unknown as RubricLevel).levelId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the grading property value. Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
     * @returns a educationAssignmentGradeType
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        this._grading = value;
    };
    /**
     * Gets the levelId property value. The ID of this resource.
     * @returns a string
     */
    public get levelId() {
        return this._levelId;
    };
    /**
     * Sets the levelId property value. The ID of this resource.
     * @param value Value to set for the levelId property.
     */
    public set levelId(value: string | undefined) {
        this._levelId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<EducationItemBody>("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", this.grading);
        writer.writeStringValue("levelId", this.levelId);
        writer.writeAdditionalData(this.additionalData);
    };
}
