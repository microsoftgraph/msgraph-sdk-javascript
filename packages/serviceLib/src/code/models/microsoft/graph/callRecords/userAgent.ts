import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserAgent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Identifies the version of application software used by this endpoint.  */
    private _applicationVersion?: string | undefined;
    /** User-agent header value reported by this endpoint.  */
    private _headerValue?: string | undefined;
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
     * Gets the applicationVersion property value. Identifies the version of application software used by this endpoint.
     * @returns a string
     */
    public get applicationVersion() {
        return this._applicationVersion;
    };
    /**
     * Sets the applicationVersion property value. Identifies the version of application software used by this endpoint.
     * @param value Value to set for the applicationVersion property.
     */
    public set applicationVersion(value: string | undefined) {
        this._applicationVersion = value;
    };
    /**
     * Instantiates a new userAgent and sets the default values.
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
            ["applicationVersion", (o, n) => { (o as unknown as UserAgent).applicationVersion = n.getStringValue(); }],
            ["headerValue", (o, n) => { (o as unknown as UserAgent).headerValue = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the headerValue property value. User-agent header value reported by this endpoint.
     * @returns a string
     */
    public get headerValue() {
        return this._headerValue;
    };
    /**
     * Sets the headerValue property value. User-agent header value reported by this endpoint.
     * @param value Value to set for the headerValue property.
     */
    public set headerValue(value: string | undefined) {
        this._headerValue = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("applicationVersion", this.applicationVersion);
        writer.writeStringValue("headerValue", this.headerValue);
        writer.writeAdditionalData(this.additionalData);
    };
}
