import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecurityState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Destination IP Address of the connection to the cloud application/service.  */
    private _destinationServiceIp?: string | undefined;
    /** Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).  */
    private _destinationServiceName?: string | undefined;
    /** Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.  */
    private _riskScore?: string | undefined;
    /**
     * Instantiates a new cloudAppSecurityState and sets the default values.
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
     * Gets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @returns a string
     */
    public get destinationServiceIp() {
        return this._destinationServiceIp;
    };
    /**
     * Gets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @returns a string
     */
    public get destinationServiceName() {
        return this._destinationServiceName;
    };
    /**
     * Gets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["destinationServiceIp", (o, n) => { (o as unknown as CloudAppSecurityState).destinationServiceIp = n.getStringValue(); }],
            ["destinationServiceName", (o, n) => { (o as unknown as CloudAppSecurityState).destinationServiceName = n.getStringValue(); }],
            ["riskScore", (o, n) => { (o as unknown as CloudAppSecurityState).riskScore = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("destinationServiceIp", this.destinationServiceIp);
        writer.writeStringValue("destinationServiceName", this.destinationServiceName);
        writer.writeStringValue("riskScore", this.riskScore);
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
     * Sets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @param value Value to set for the destinationServiceIp property.
     */
    public set destinationServiceIp(value: string | undefined) {
        this._destinationServiceIp = value;
    };
    /**
     * Sets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @param value Value to set for the destinationServiceName property.
     */
    public set destinationServiceName(value: string | undefined) {
        this._destinationServiceName = value;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
}
