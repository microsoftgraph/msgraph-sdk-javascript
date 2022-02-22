import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPreviewInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _getUrl?: string | undefined;
    private _postParameters?: string | undefined;
    private _postUrl?: string | undefined;
    /**
     * Instantiates a new itemPreviewInfo and sets the default values.
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
     * Gets the getUrl property value. 
     * @returns a string
     */
    public get getUrl() {
        return this._getUrl;
    };
    /**
     * Gets the postParameters property value. 
     * @returns a string
     */
    public get postParameters() {
        return this._postParameters;
    };
    /**
     * Gets the postUrl property value. 
     * @returns a string
     */
    public get postUrl() {
        return this._postUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["getUrl", (o, n) => { (o as unknown as ItemPreviewInfo).getUrl = n.getStringValue(); }],
            ["postParameters", (o, n) => { (o as unknown as ItemPreviewInfo).postParameters = n.getStringValue(); }],
            ["postUrl", (o, n) => { (o as unknown as ItemPreviewInfo).postUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("getUrl", this.getUrl);
        writer.writeStringValue("postParameters", this.postParameters);
        writer.writeStringValue("postUrl", this.postUrl);
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
     * Sets the getUrl property value. 
     * @param value Value to set for the getUrl property.
     */
    public set getUrl(value: string | undefined) {
        this._getUrl = value;
    };
    /**
     * Sets the postParameters property value. 
     * @param value Value to set for the postParameters property.
     */
    public set postParameters(value: string | undefined) {
        this._postParameters = value;
    };
    /**
     * Sets the postUrl property value. 
     * @param value Value to set for the postUrl property.
     */
    public set postUrl(value: string | undefined) {
        this._postUrl = value;
    };
}
