import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImplicitGrantSettings implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.  */
    private _enableAccessTokenIssuance?: boolean | undefined;
    /** Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.  */
    private _enableIdTokenIssuance?: boolean | undefined;
    /**
     * Instantiates a new implicitGrantSettings and sets the default values.
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
     * Gets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableAccessTokenIssuance() {
        return this._enableAccessTokenIssuance;
    };
    /**
     * Gets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @returns a boolean
     */
    public get enableIdTokenIssuance() {
        return this._enableIdTokenIssuance;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["enableAccessTokenIssuance", (o, n) => { (o as unknown as ImplicitGrantSettings).enableAccessTokenIssuance = n.getBooleanValue(); }],
            ["enableIdTokenIssuance", (o, n) => { (o as unknown as ImplicitGrantSettings).enableIdTokenIssuance = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("enableAccessTokenIssuance", this.enableAccessTokenIssuance);
        writer.writeBooleanValue("enableIdTokenIssuance", this.enableIdTokenIssuance);
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
     * Sets the enableAccessTokenIssuance property value. Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableAccessTokenIssuance property.
     */
    public set enableAccessTokenIssuance(value: boolean | undefined) {
        this._enableAccessTokenIssuance = value;
    };
    /**
     * Sets the enableIdTokenIssuance property value. Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
     * @param value Value to set for the enableIdTokenIssuance property.
     */
    public set enableIdTokenIssuance(value: boolean | undefined) {
        this._enableIdTokenIssuance = value;
    };
}
