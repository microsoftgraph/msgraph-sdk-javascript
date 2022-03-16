import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {FileSystemInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemUploadableProperties implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.  */
    private _description?: string | undefined;
    /** Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.  */
    private _fileSize?: number | undefined;
    /** File system information on client. Read-write.  */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** The name of the item (filename and extension). Read-write.  */
    private _name?: string | undefined;
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
     * Instantiates a new driveItemUploadableProperties and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the description property value. Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the fileSize property value. Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.
     * @returns a int64
     */
    public get fileSize() {
        return this._fileSize;
    };
    /**
     * Sets the fileSize property value. Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.
     * @param value Value to set for the fileSize property.
     */
    public set fileSize(value: number | undefined) {
        this._fileSize = value;
    };
    /**
     * Gets the fileSystemInfo property value. File system information on client. Read-write.
     * @returns a fileSystemInfo
     */
    public get fileSystemInfo() {
        return this._fileSystemInfo;
    };
    /**
     * Sets the fileSystemInfo property value. File system information on client. Read-write.
     * @param value Value to set for the fileSystemInfo property.
     */
    public set fileSystemInfo(value: FileSystemInfo | undefined) {
        this._fileSystemInfo = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["description", (o, n) => { (o as unknown as DriveItemUploadableProperties).description = n.getStringValue(); }],
            ["fileSize", (o, n) => { (o as unknown as DriveItemUploadableProperties).fileSize = n.getNumberValue(); }],
            ["fileSystemInfo", (o, n) => { (o as unknown as DriveItemUploadableProperties).fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); }],
            ["name", (o, n) => { (o as unknown as DriveItemUploadableProperties).name = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the name property value. The name of the item (filename and extension). Read-write.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the item (filename and extension). Read-write.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("fileSize", this.fileSize);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", this.fileSystemInfo);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
