import {Entity} from '../';
import {Set, TermGroupScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Group extends Entity implements Parsable {
    /** Date and time of the group creation. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Description that gives details on the term usage.  */
    private _description?: string | undefined;
    /** Name of the group.  */
    private _displayName?: string | undefined;
    /** ID of the parent site of this group.  */
    private _parentSiteId?: string | undefined;
    /** Returns the type of the group. Possible values are global, system, and siteCollection.  */
    private _scope?: TermGroupScope | undefined;
    /** All sets under the group in a term [store].  */
    private _sets?: Set[] | undefined;
    /**
     * Instantiates a new group and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time of the group creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. Description that gives details on the term usage.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. Name of the group.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the parentSiteId property value. ID of the parent site of this group.
     * @returns a string
     */
    public get parentSiteId() {
        return this._parentSiteId;
    };
    /**
     * Gets the scope property value. Returns the type of the group. Possible values are global, system, and siteCollection.
     * @returns a termGroupScope
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Gets the sets property value. All sets under the group in a term [store].
     * @returns a set
     */
    public get sets() {
        return this._sets;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as Group).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as Group).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as Group).displayName = n.getStringValue(); }],
            ["parentSiteId", (o, n) => { (o as unknown as Group).parentSiteId = n.getStringValue(); }],
            ["scope", (o, n) => { (o as unknown as Group).scope = n.getEnumValue<TermGroupScope>(TermGroupScope); }],
            ["sets", (o, n) => { (o as unknown as Group).sets = n.getCollectionOfObjectValues<Set>(Set); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("parentSiteId", this.parentSiteId);
        writer.writeEnumValue<TermGroupScope>("scope", this.scope);
        writer.writeCollectionOfObjectValues<Set>("sets", this.sets);
    };
    /**
     * Sets the createdDateTime property value. Date and time of the group creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. Description that gives details on the term usage.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. Name of the group.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the parentSiteId property value. ID of the parent site of this group.
     * @param value Value to set for the parentSiteId property.
     */
    public set parentSiteId(value: string | undefined) {
        this._parentSiteId = value;
    };
    /**
     * Sets the scope property value. Returns the type of the group. Possible values are global, system, and siteCollection.
     * @param value Value to set for the scope property.
     */
    public set scope(value: TermGroupScope | undefined) {
        this._scope = value;
    };
    /**
     * Sets the sets property value. All sets under the group in a term [store].
     * @param value Value to set for the sets property.
     */
    public set sets(value: Set[] | undefined) {
        this._sets = value;
    };
}
