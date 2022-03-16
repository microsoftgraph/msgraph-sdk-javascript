import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisionedPlan implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** For example, 'Enabled'.  */
    private _capabilityStatus?: string | undefined;
    /** For example, 'Success'.  */
    private _provisioningStatus?: string | undefined;
    /** The name of the service; for example, 'AccessControlS2S'  */
    private _service?: string | undefined;
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
     * Gets the capabilityStatus property value. For example, 'Enabled'.
     * @returns a string
     */
    public get capabilityStatus() {
        return this._capabilityStatus;
    };
    /**
     * Sets the capabilityStatus property value. For example, 'Enabled'.
     * @param value Value to set for the capabilityStatus property.
     */
    public set capabilityStatus(value: string | undefined) {
        this._capabilityStatus = value;
    };
    /**
     * Instantiates a new provisionedPlan and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["capabilityStatus", (o, n) => { (o as unknown as ProvisionedPlan).capabilityStatus = n.getStringValue(); }],
            ["provisioningStatus", (o, n) => { (o as unknown as ProvisionedPlan).provisioningStatus = n.getStringValue(); }],
            ["service", (o, n) => { (o as unknown as ProvisionedPlan).service = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the provisioningStatus property value. For example, 'Success'.
     * @returns a string
     */
    public get provisioningStatus() {
        return this._provisioningStatus;
    };
    /**
     * Sets the provisioningStatus property value. For example, 'Success'.
     * @param value Value to set for the provisioningStatus property.
     */
    public set provisioningStatus(value: string | undefined) {
        this._provisioningStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        writer.writeStringValue("service", this.service);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service property value. The name of the service; for example, 'AccessControlS2S'
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. The name of the service; for example, 'AccessControlS2S'
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
}
