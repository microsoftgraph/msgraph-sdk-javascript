import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the preview method.  */
export class PreviewRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _page?: string | undefined;
    private _zoom?: number | undefined;
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
     * Instantiates a new previewRequestBody and sets the default values.
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
            ["page", (o, n) => { (o as unknown as PreviewRequestBody).page = n.getStringValue(); }],
            ["zoom", (o, n) => { (o as unknown as PreviewRequestBody).zoom = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the page property value. 
     * @returns a string
     */
    public get page() {
        return this._page;
    };
    /**
     * Sets the page property value. 
     * @param value Value to set for the page property.
     */
    public set page(value: string | undefined) {
        this._page = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("page", this.page);
        writer.writeNumberValue("zoom", this.zoom);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the zoom property value. 
     * @returns a double
     */
    public get zoom() {
        return this._zoom;
    };
    /**
     * Sets the zoom property value. 
     * @param value Value to set for the zoom property.
     */
    public set zoom(value: number | undefined) {
        this._zoom = value;
    };
}
