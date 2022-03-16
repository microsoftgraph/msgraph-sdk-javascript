import {createOnenotePagePreviewLinksFromDiscriminatorValue} from './createOnenotePagePreviewLinksFromDiscriminatorValue';
import {OnenotePagePreviewLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreview implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _links?: OnenotePagePreviewLinks | undefined;
    private _previewText?: string | undefined;
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
     * Instantiates a new onenotePagePreview and sets the default values.
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
            ["links", (o, n) => { (o as unknown as OnenotePagePreview).links = n.getObjectValue<OnenotePagePreviewLinks>(createOnenotePagePreviewLinksFromDiscriminatorValue); }],
            ["previewText", (o, n) => { (o as unknown as OnenotePagePreview).previewText = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the links property value. 
     * @returns a onenotePagePreviewLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. 
     * @param value Value to set for the links property.
     */
    public set links(value: OnenotePagePreviewLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the previewText property value. 
     * @returns a string
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. 
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: string | undefined) {
        this._previewText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<OnenotePagePreviewLinks>("links", this.links);
        writer.writeStringValue("previewText", this.previewText);
        writer.writeAdditionalData(this.additionalData);
    };
}
