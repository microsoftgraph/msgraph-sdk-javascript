import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attachment extends Entity implements Parsable {
    /** The MIME type.  */
    private _contentType?: string | undefined;
    /** true if the attachment is an inline attachment; otherwise, false.  */
    private _isInline?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The display name of the attachment. This does not need to be the actual file name.  */
    private _name?: string | undefined;
    /** The length of the attachment in bytes.  */
    private _size?: number | undefined;
    /**
     * Instantiates a new attachment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The MIME type.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @returns a boolean
     */
    public get isInline() {
        return this._isInline;
    };
    /**
     * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the name property value. The display name of the attachment. This does not need to be the actual file name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the size property value. The length of the attachment in bytes.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["contentType", (o, n) => { (o as unknown as Attachment).contentType = n.getStringValue(); }],
            ["isInline", (o, n) => { (o as unknown as Attachment).isInline = n.getBooleanValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as Attachment).lastModifiedDateTime = n.getDateValue(); }],
            ["name", (o, n) => { (o as unknown as Attachment).name = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as Attachment).size = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeBooleanValue("isInline", this.isInline);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
    };
    /**
     * Sets the contentType property value. The MIME type.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @param value Value to set for the isInline property.
     */
    public set isInline(value: boolean | undefined) {
        this._isInline = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the name property value. The display name of the attachment. This does not need to be the actual file name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the size property value. The length of the attachment in bytes.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
