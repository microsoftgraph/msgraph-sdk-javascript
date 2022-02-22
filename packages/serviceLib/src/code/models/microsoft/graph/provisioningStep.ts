import {DetailsInfo, ProvisioningResult, ProvisioningStepType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStep implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Summary of what occurred during the step.  */
    private _description?: string | undefined;
    /** Details of what occurred during the step.  */
    private _details?: DetailsInfo | undefined;
    /** Name of the step.  */
    private _name?: string | undefined;
    /** Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.  */
    private _provisioningStepType?: ProvisioningStepType | undefined;
    /** Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.  */
    private _status?: ProvisioningResult | undefined;
    /**
     * Instantiates a new provisioningStep and sets the default values.
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
     * Gets the description property value. Summary of what occurred during the step.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the details property value. Details of what occurred during the step.
     * @returns a detailsInfo
     */
    public get details() {
        return this._details;
    };
    /**
     * Gets the name property value. Name of the step.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the provisioningStepType property value. Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.
     * @returns a provisioningStepType
     */
    public get provisioningStepType() {
        return this._provisioningStepType;
    };
    /**
     * Gets the status property value. Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.
     * @returns a provisioningResult
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["description", (o, n) => { (o as unknown as ProvisioningStep).description = n.getStringValue(); }],
            ["details", (o, n) => { (o as unknown as ProvisioningStep).details = n.getObjectValue<DetailsInfo>(DetailsInfo); }],
            ["name", (o, n) => { (o as unknown as ProvisioningStep).name = n.getStringValue(); }],
            ["provisioningStepType", (o, n) => { (o as unknown as ProvisioningStep).provisioningStepType = n.getEnumValue<ProvisioningStepType>(ProvisioningStepType); }],
            ["status", (o, n) => { (o as unknown as ProvisioningStep).status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<DetailsInfo>("details", this.details);
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<ProvisioningStepType>("provisioningStepType", this.provisioningStepType);
        writer.writeEnumValue<ProvisioningResult>("status", this.status);
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
     * Sets the description property value. Summary of what occurred during the step.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the details property value. Details of what occurred during the step.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        this._details = value;
    };
    /**
     * Sets the name property value. Name of the step.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the provisioningStepType property value. Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.
     * @param value Value to set for the provisioningStepType property.
     */
    public set provisioningStepType(value: ProvisioningStepType | undefined) {
        this._provisioningStepType = value;
    };
    /**
     * Sets the status property value. Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ProvisioningResult | undefined) {
        this._status = value;
    };
}
