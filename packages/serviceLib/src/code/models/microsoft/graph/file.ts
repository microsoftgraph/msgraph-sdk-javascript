import {createHashesFromDiscriminatorValue} from './createHashesFromDiscriminatorValue';
import {Hashes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class File implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Hashes of the file's binary content, if available. Read-only.  */
    private _hashes?: Hashes | undefined;
    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.  */
    private _mimeType?: string | undefined;
    private _processingMetadata?: boolean | undefined;
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
     * Instantiates a new file and sets the default values.
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
            ["hashes", (o, n) => { (o as unknown as File).hashes = n.getObjectValue<Hashes>(createHashesFromDiscriminatorValue); }],
            ["mimeType", (o, n) => { (o as unknown as File).mimeType = n.getStringValue(); }],
            ["processingMetadata", (o, n) => { (o as unknown as File).processingMetadata = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @returns a hashes
     */
    public get hashes() {
        return this._hashes;
    };
    /**
     * Sets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @param value Value to set for the hashes property.
     */
    public set hashes(value: Hashes | undefined) {
        this._hashes = value;
    };
    /**
     * Gets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @returns a string
     */
    public get mimeType() {
        return this._mimeType;
    };
    /**
     * Sets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @param value Value to set for the mimeType property.
     */
    public set mimeType(value: string | undefined) {
        this._mimeType = value;
    };
    /**
     * Gets the processingMetadata property value. 
     * @returns a boolean
     */
    public get processingMetadata() {
        return this._processingMetadata;
    };
    /**
     * Sets the processingMetadata property value. 
     * @param value Value to set for the processingMetadata property.
     */
    public set processingMetadata(value: boolean | undefined) {
        this._processingMetadata = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Hashes>("hashes", this.hashes);
        writer.writeStringValue("mimeType", this.mimeType);
        writer.writeBooleanValue("processingMetadata", this.processingMetadata);
        writer.writeAdditionalData(this.additionalData);
    };
}
