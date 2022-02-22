import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BatchRecordDecisionsRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _decision?: string | undefined;
    private _justification?: string | undefined;
    private _principalId?: string | undefined;
    private _resourceId?: string | undefined;
    /**
     * Instantiates a new batchRecordDecisionsRequestBody and sets the default values.
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
     * Gets the decision property value. 
     * @returns a string
     */
    public get decision() {
        return this._decision;
    };
    /**
     * Gets the justification property value. 
     * @returns a string
     */
    public get justification() {
        return this._justification;
    };
    /**
     * Gets the principalId property value. 
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Gets the resourceId property value. 
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["decision", (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).decision = n.getStringValue(); }],
            ["justification", (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).justification = n.getStringValue(); }],
            ["principalId", (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).principalId = n.getStringValue(); }],
            ["resourceId", (o, n) => { (o as unknown as BatchRecordDecisionsRequestBody).resourceId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("decision", this.decision);
        writer.writeStringValue("justification", this.justification);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeStringValue("resourceId", this.resourceId);
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
     * Sets the decision property value. 
     * @param value Value to set for the decision property.
     */
    public set decision(value: string | undefined) {
        this._decision = value;
    };
    /**
     * Sets the justification property value. 
     * @param value Value to set for the justification property.
     */
    public set justification(value: string | undefined) {
        this._justification = value;
    };
    /**
     * Sets the principalId property value. 
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Sets the resourceId property value. 
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
}
