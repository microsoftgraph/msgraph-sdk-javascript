import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicationFacet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The state of publication for this document. Either published or checkout. Read-only.  */
    private _level?: string | undefined;
    /** The unique identifier for the version that is visible to the current caller. Read-only.  */
    private _versionId?: string | undefined;
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
     * Instantiates a new publicationFacet and sets the default values.
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
            ["level", (o, n) => { (o as unknown as PublicationFacet).level = n.getStringValue(); }],
            ["versionId", (o, n) => { (o as unknown as PublicationFacet).versionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the level property value. The state of publication for this document. Either published or checkout. Read-only.
     * @returns a string
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. The state of publication for this document. Either published or checkout. Read-only.
     * @param value Value to set for the level property.
     */
    public set level(value: string | undefined) {
        this._level = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("level", this.level);
        writer.writeStringValue("versionId", this.versionId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the versionId property value. The unique identifier for the version that is visible to the current caller. Read-only.
     * @returns a string
     */
    public get versionId() {
        return this._versionId;
    };
    /**
     * Sets the versionId property value. The unique identifier for the version that is visible to the current caller. Read-only.
     * @param value Value to set for the versionId property.
     */
    public set versionId(value: string | undefined) {
        this._versionId = value;
    };
}
