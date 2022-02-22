import {FileHash} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSecurityState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Complex type containing file hashes (cryptographic and location-sensitive).  */
    private _fileHash?: FileHash | undefined;
    /** File name (without path).  */
    private _name?: string | undefined;
    /** Full file path of the file/imageFile.  */
    private _path?: string | undefined;
    /** Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.  */
    private _riskScore?: string | undefined;
    /**
     * Instantiates a new fileSecurityState and sets the default values.
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
     * Gets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @returns a fileHash
     */
    public get fileHash() {
        return this._fileHash;
    };
    /**
     * Gets the name property value. File name (without path).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the path property value. Full file path of the file/imageFile.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Gets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fileHash", (o, n) => { (o as unknown as FileSecurityState).fileHash = n.getObjectValue<FileHash>(FileHash); }],
            ["name", (o, n) => { (o as unknown as FileSecurityState).name = n.getStringValue(); }],
            ["path", (o, n) => { (o as unknown as FileSecurityState).path = n.getStringValue(); }],
            ["riskScore", (o, n) => { (o as unknown as FileSecurityState).riskScore = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<FileHash>("fileHash", this.fileHash);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("riskScore", this.riskScore);
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
     * Sets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @param value Value to set for the fileHash property.
     */
    public set fileHash(value: FileHash | undefined) {
        this._fileHash = value;
    };
    /**
     * Sets the name property value. File name (without path).
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the path property value. Full file path of the file/imageFile.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Sets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
}
