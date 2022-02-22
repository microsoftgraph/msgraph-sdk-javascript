import {EducationItemBody, RubricCriterion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQuality implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The collection of criteria for this rubric quality.  */
    private _criteria?: RubricCriterion[] | undefined;
    /** The description of this rubric quality.  */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric quality.  */
    private _displayName?: string | undefined;
    /** The ID of this resource.  */
    private _qualityId?: string | undefined;
    /** If present, a numerical weight for this quality.  Weights must add up to 100.  */
    private _weight?: number | undefined;
    /**
     * Instantiates a new rubricQuality and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the criteria property value. The collection of criteria for this rubric quality.
     * @returns a rubricCriterion
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Gets the description property value. The description of this rubric quality.
     * @returns a educationItemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The name of this rubric quality.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the qualityId property value. The ID of this resource.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Gets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @returns a float
     */
    public get weight() {
        return this._weight;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["criteria", (o, n) => { (o as unknown as RubricQuality).criteria = n.getCollectionOfObjectValues<RubricCriterion>(RubricCriterion); }],
            ["description", (o, n) => { (o as unknown as RubricQuality).description = n.getObjectValue<EducationItemBody>(EducationItemBody); }],
            ["displayName", (o, n) => { (o as unknown as RubricQuality).displayName = n.getStringValue(); }],
            ["qualityId", (o, n) => { (o as unknown as RubricQuality).qualityId = n.getStringValue(); }],
            ["weight", (o, n) => { (o as unknown as RubricQuality).weight = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<RubricCriterion>("criteria", this.criteria);
        writer.writeObjectValue<EducationItemBody>("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("qualityId", this.qualityId);
        writer.writeNumberValue("weight", this.weight);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the criteria property value. The collection of criteria for this rubric quality.
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: RubricCriterion[] | undefined) {
        this._criteria = value;
    };
    /**
     * Sets the description property value. The description of this rubric quality.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The name of this rubric quality.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the qualityId property value. The ID of this resource.
     * @param value Value to set for the qualityId property.
     */
    public set qualityId(value: string | undefined) {
        this._qualityId = value;
    };
    /**
     * Sets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
