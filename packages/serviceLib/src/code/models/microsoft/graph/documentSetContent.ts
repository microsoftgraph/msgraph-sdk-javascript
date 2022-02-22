import {ContentTypeInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetContent implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Content type information of the file.  */
    private _contentType?: ContentTypeInfo | undefined;
    /** Name of the file in resource folder that should be added as a default content or a template in the document set.  */
    private _fileName?: string | undefined;
    /** Folder name in which the file will be placed when a new document set is created in the library.  */
    private _folderName?: string | undefined;
    /**
     * Instantiates a new documentSetContent and sets the default values.
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
     * Gets the contentType property value. Content type information of the file.
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set.
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Gets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @returns a string
     */
    public get folderName() {
        return this._folderName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contentType", (o, n) => { (o as unknown as DocumentSetContent).contentType = n.getObjectValue<ContentTypeInfo>(ContentTypeInfo); }],
            ["fileName", (o, n) => { (o as unknown as DocumentSetContent).fileName = n.getStringValue(); }],
            ["folderName", (o, n) => { (o as unknown as DocumentSetContent).folderName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ContentTypeInfo>("contentType", this.contentType);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeStringValue("folderName", this.folderName);
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
     * Sets the contentType property value. Content type information of the file.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set.
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * Sets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @param value Value to set for the folderName property.
     */
    public set folderName(value: string | undefined) {
        this._folderName = value;
    };
}
