import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {Entity, Identity, ItemBody} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthoredNote extends Entity implements Parsable {
    /** Identity information about the note's author.  */
    private _author?: Identity | undefined;
    /** The content of the note.  */
    private _content?: ItemBody | undefined;
    /** The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _createdDateTime?: Date | undefined;
    /**
     * Gets the author property value. Identity information about the note's author.
     * @returns a identity
     */
    public get author() {
        return this._author;
    };
    /**
     * Sets the author property value. Identity information about the note's author.
     * @param value Value to set for the author property.
     */
    public set author(value: Identity | undefined) {
        this._author = value;
    };
    /**
     * Instantiates a new authoredNote and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content of the note.
     * @returns a itemBody
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content of the note.
     * @param value Value to set for the content property.
     */
    public set content(value: ItemBody | undefined) {
        this._content = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["author", (o, n) => { (o as unknown as AuthoredNote).author = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); }],
            ["content", (o, n) => { (o as unknown as AuthoredNote).content = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as AuthoredNote).createdDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Identity>("author", this.author);
        writer.writeObjectValue<ItemBody>("content", this.content);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
    };
}
