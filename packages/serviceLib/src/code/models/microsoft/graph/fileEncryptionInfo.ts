import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileEncryptionInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The key used to encrypt the file content.  */
    private _encryptionKey?: string | undefined;
    /** The file digest prior to encryption.  */
    private _fileDigest?: string | undefined;
    /** The file digest algorithm.  */
    private _fileDigestAlgorithm?: string | undefined;
    /** The initialization vector used for the encryption algorithm.  */
    private _initializationVector?: string | undefined;
    /** The hash of the encrypted file content + IV (content hash).  */
    private _mac?: string | undefined;
    /** The key used to get mac.  */
    private _macKey?: string | undefined;
    /** The the profile identifier.  */
    private _profileIdentifier?: string | undefined;
    /**
     * Instantiates a new fileEncryptionInfo and sets the default values.
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
     * Gets the encryptionKey property value. The key used to encrypt the file content.
     * @returns a binary
     */
    public get encryptionKey() {
        return this._encryptionKey;
    };
    /**
     * Gets the fileDigest property value. The file digest prior to encryption.
     * @returns a binary
     */
    public get fileDigest() {
        return this._fileDigest;
    };
    /**
     * Gets the fileDigestAlgorithm property value. The file digest algorithm.
     * @returns a string
     */
    public get fileDigestAlgorithm() {
        return this._fileDigestAlgorithm;
    };
    /**
     * Gets the initializationVector property value. The initialization vector used for the encryption algorithm.
     * @returns a binary
     */
    public get initializationVector() {
        return this._initializationVector;
    };
    /**
     * Gets the mac property value. The hash of the encrypted file content + IV (content hash).
     * @returns a binary
     */
    public get mac() {
        return this._mac;
    };
    /**
     * Gets the macKey property value. The key used to get mac.
     * @returns a binary
     */
    public get macKey() {
        return this._macKey;
    };
    /**
     * Gets the profileIdentifier property value. The the profile identifier.
     * @returns a string
     */
    public get profileIdentifier() {
        return this._profileIdentifier;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["encryptionKey", (o, n) => { (o as unknown as FileEncryptionInfo).encryptionKey = n.getStringValue(); }],
            ["fileDigest", (o, n) => { (o as unknown as FileEncryptionInfo).fileDigest = n.getStringValue(); }],
            ["fileDigestAlgorithm", (o, n) => { (o as unknown as FileEncryptionInfo).fileDigestAlgorithm = n.getStringValue(); }],
            ["initializationVector", (o, n) => { (o as unknown as FileEncryptionInfo).initializationVector = n.getStringValue(); }],
            ["mac", (o, n) => { (o as unknown as FileEncryptionInfo).mac = n.getStringValue(); }],
            ["macKey", (o, n) => { (o as unknown as FileEncryptionInfo).macKey = n.getStringValue(); }],
            ["profileIdentifier", (o, n) => { (o as unknown as FileEncryptionInfo).profileIdentifier = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("encryptionKey", this.encryptionKey);
        writer.writeStringValue("fileDigest", this.fileDigest);
        writer.writeStringValue("fileDigestAlgorithm", this.fileDigestAlgorithm);
        writer.writeStringValue("initializationVector", this.initializationVector);
        writer.writeStringValue("mac", this.mac);
        writer.writeStringValue("macKey", this.macKey);
        writer.writeStringValue("profileIdentifier", this.profileIdentifier);
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
     * Sets the encryptionKey property value. The key used to encrypt the file content.
     * @param value Value to set for the encryptionKey property.
     */
    public set encryptionKey(value: string | undefined) {
        this._encryptionKey = value;
    };
    /**
     * Sets the fileDigest property value. The file digest prior to encryption.
     * @param value Value to set for the fileDigest property.
     */
    public set fileDigest(value: string | undefined) {
        this._fileDigest = value;
    };
    /**
     * Sets the fileDigestAlgorithm property value. The file digest algorithm.
     * @param value Value to set for the fileDigestAlgorithm property.
     */
    public set fileDigestAlgorithm(value: string | undefined) {
        this._fileDigestAlgorithm = value;
    };
    /**
     * Sets the initializationVector property value. The initialization vector used for the encryption algorithm.
     * @param value Value to set for the initializationVector property.
     */
    public set initializationVector(value: string | undefined) {
        this._initializationVector = value;
    };
    /**
     * Sets the mac property value. The hash of the encrypted file content + IV (content hash).
     * @param value Value to set for the mac property.
     */
    public set mac(value: string | undefined) {
        this._mac = value;
    };
    /**
     * Sets the macKey property value. The key used to get mac.
     * @param value Value to set for the macKey property.
     */
    public set macKey(value: string | undefined) {
        this._macKey = value;
    };
    /**
     * Sets the profileIdentifier property value. The the profile identifier.
     * @param value Value to set for the profileIdentifier property.
     */
    public set profileIdentifier(value: string | undefined) {
        this._profileIdentifier = value;
    };
}
