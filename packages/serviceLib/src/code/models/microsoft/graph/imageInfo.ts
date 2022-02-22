import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImageInfo implements Parsable {
    /** Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image  */
    private _addImageQuery?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Optional; alt-text accessible content for the image  */
    private _alternateText?: string | undefined;
    private _alternativeText?: string | undefined;
    /** Optional; URI that points to an icon which represents the application used to generate the activity  */
    private _iconUrl?: string | undefined;
    /**
     * Instantiates a new imageInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the addImageQuery property value. Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image
     * @returns a boolean
     */
    public get addImageQuery() {
        return this._addImageQuery;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the alternateText property value. Optional; alt-text accessible content for the image
     * @returns a string
     */
    public get alternateText() {
        return this._alternateText;
    };
    /**
     * Gets the alternativeText property value. 
     * @returns a string
     */
    public get alternativeText() {
        return this._alternativeText;
    };
    /**
     * Gets the iconUrl property value. Optional; URI that points to an icon which represents the application used to generate the activity
     * @returns a string
     */
    public get iconUrl() {
        return this._iconUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["addImageQuery", (o, n) => { (o as unknown as ImageInfo).addImageQuery = n.getBooleanValue(); }],
            ["alternateText", (o, n) => { (o as unknown as ImageInfo).alternateText = n.getStringValue(); }],
            ["alternativeText", (o, n) => { (o as unknown as ImageInfo).alternativeText = n.getStringValue(); }],
            ["iconUrl", (o, n) => { (o as unknown as ImageInfo).iconUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("addImageQuery", this.addImageQuery);
        writer.writeStringValue("alternateText", this.alternateText);
        writer.writeStringValue("alternativeText", this.alternativeText);
        writer.writeStringValue("iconUrl", this.iconUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the addImageQuery property value. Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image
     * @param value Value to set for the addImageQuery property.
     */
    public set addImageQuery(value: boolean | undefined) {
        this._addImageQuery = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the alternateText property value. Optional; alt-text accessible content for the image
     * @param value Value to set for the alternateText property.
     */
    public set alternateText(value: string | undefined) {
        this._alternateText = value;
    };
    /**
     * Sets the alternativeText property value. 
     * @param value Value to set for the alternativeText property.
     */
    public set alternativeText(value: string | undefined) {
        this._alternativeText = value;
    };
    /**
     * Sets the iconUrl property value. Optional; URI that points to an icon which represents the application used to generate the activity
     * @param value Value to set for the iconUrl property.
     */
    public set iconUrl(value: string | undefined) {
        this._iconUrl = value;
    };
}
