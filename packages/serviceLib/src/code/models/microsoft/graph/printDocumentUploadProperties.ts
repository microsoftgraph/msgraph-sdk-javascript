import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintDocumentUploadProperties implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The document's content (MIME) type.  */
    private _contentType?: string | undefined;
    /** The document's name.  */
    private _documentName?: string | undefined;
    /** The document's size in bytes.  */
    private _size?: number | undefined;
    /**
     * Instantiates a new printDocumentUploadProperties and sets the default values.
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
     * Gets the contentType property value. The document's content (MIME) type.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the documentName property value. The document's name.
     * @returns a string
     */
    public get documentName() {
        return this._documentName;
    };
    /**
     * Gets the size property value. The document's size in bytes.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentType", (o, n) => { (o as unknown as PrintDocumentUploadProperties).contentType = n.getStringValue(); }],
            ["documentName", (o, n) => { (o as unknown as PrintDocumentUploadProperties).documentName = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as PrintDocumentUploadProperties).size = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("documentName", this.documentName);
        writer.writeNumberValue("size", this.size);
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
     * Sets the contentType property value. The document's content (MIME) type.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the documentName property value. The document's name.
     * @param value Value to set for the documentName property.
     */
    public set documentName(value: string | undefined) {
        this._documentName = value;
    };
    /**
     * Sets the size property value. The document's size in bytes.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
