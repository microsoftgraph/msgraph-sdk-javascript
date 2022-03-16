import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FreeBusyError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Describes the error.  */
    private _message?: string | undefined;
    /** The response code from querying for the availability of the user, distribution list, or resource.  */
    private _responseCode?: string | undefined;
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
     * Instantiates a new freeBusyError and sets the default values.
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
            ["message", (o, n) => { (o as unknown as FreeBusyError).message = n.getStringValue(); }],
            ["responseCode", (o, n) => { (o as unknown as FreeBusyError).responseCode = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the message property value. Describes the error.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. Describes the error.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the responseCode property value. The response code from querying for the availability of the user, distribution list, or resource.
     * @returns a string
     */
    public get responseCode() {
        return this._responseCode;
    };
    /**
     * Sets the responseCode property value. The response code from querying for the availability of the user, distribution list, or resource.
     * @param value Value to set for the responseCode property.
     */
    public set responseCode(value: string | undefined) {
        this._responseCode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("responseCode", this.responseCode);
        writer.writeAdditionalData(this.additionalData);
    };
}
