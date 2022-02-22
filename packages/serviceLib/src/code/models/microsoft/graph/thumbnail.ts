import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Thumbnail implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The content stream for the thumbnail.  */
    private _content?: string | undefined;
    /** The height of the thumbnail, in pixels.  */
    private _height?: number | undefined;
    /** The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.  */
    private _sourceItemId?: string | undefined;
    /** The URL used to fetch the thumbnail content.  */
    private _url?: string | undefined;
    /** The width of the thumbnail, in pixels.  */
    private _width?: number | undefined;
    /**
     * Instantiates a new thumbnail and sets the default values.
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
     * Gets the content property value. The content stream for the thumbnail.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the height property value. The height of the thumbnail, in pixels.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Gets the sourceItemId property value. The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.
     * @returns a string
     */
    public get sourceItemId() {
        return this._sourceItemId;
    };
    /**
     * Gets the url property value. The URL used to fetch the thumbnail content.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Gets the width property value. The width of the thumbnail, in pixels.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["content", (o, n) => { (o as unknown as Thumbnail).content = n.getStringValue(); }],
            ["height", (o, n) => { (o as unknown as Thumbnail).height = n.getNumberValue(); }],
            ["sourceItemId", (o, n) => { (o as unknown as Thumbnail).sourceItemId = n.getStringValue(); }],
            ["url", (o, n) => { (o as unknown as Thumbnail).url = n.getStringValue(); }],
            ["width", (o, n) => { (o as unknown as Thumbnail).width = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("content", this.content);
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("sourceItemId", this.sourceItemId);
        writer.writeStringValue("url", this.url);
        writer.writeNumberValue("width", this.width);
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
     * Sets the content property value. The content stream for the thumbnail.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Sets the height property value. The height of the thumbnail, in pixels.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Sets the sourceItemId property value. The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.
     * @param value Value to set for the sourceItemId property.
     */
    public set sourceItemId(value: string | undefined) {
        this._sourceItemId = value;
    };
    /**
     * Sets the url property value. The URL used to fetch the thumbnail content.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
    /**
     * Sets the width property value. The width of the thumbnail, in pixels.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
