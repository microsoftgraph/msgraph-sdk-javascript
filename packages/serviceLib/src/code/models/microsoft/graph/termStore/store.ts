import {Entity} from '../';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Group, Set} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Store extends Entity implements Parsable {
    /** Default language of the term store.  */
    private _defaultLanguageTag?: string | undefined;
    /** Collection of all groups available in the term store.  */
    private _groups?: Group[] | undefined;
    /** List of languages for the term store.  */
    private _languageTags?: string[] | undefined;
    /** Collection of all sets available in the term store.  */
    private _sets?: Set[] | undefined;
    /**
     * Instantiates a new store and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultLanguageTag property value. Default language of the term store.
     * @returns a string
     */
    public get defaultLanguageTag() {
        return this._defaultLanguageTag;
    };
    /**
     * Sets the defaultLanguageTag property value. Default language of the term store.
     * @param value Value to set for the defaultLanguageTag property.
     */
    public set defaultLanguageTag(value: string | undefined) {
        this._defaultLanguageTag = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["defaultLanguageTag", (o, n) => { (o as unknown as Store).defaultLanguageTag = n.getStringValue(); }],
            ["groups", (o, n) => { (o as unknown as Store).groups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); }],
            ["languageTags", (o, n) => { (o as unknown as Store).languageTags = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sets", (o, n) => { (o as unknown as Store).sets = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the groups property value. Collection of all groups available in the term store.
     * @returns a group
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. Collection of all groups available in the term store.
     * @param value Value to set for the groups property.
     */
    public set groups(value: Group[] | undefined) {
        this._groups = value;
    };
    /**
     * Gets the languageTags property value. List of languages for the term store.
     * @returns a string
     */
    public get languageTags() {
        return this._languageTags;
    };
    /**
     * Sets the languageTags property value. List of languages for the term store.
     * @param value Value to set for the languageTags property.
     */
    public set languageTags(value: string[] | undefined) {
        this._languageTags = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("defaultLanguageTag", this.defaultLanguageTag);
        writer.writeCollectionOfObjectValues<Group>("groups", this.groups);
        writer.writeCollectionOfPrimitiveValues<string>("languageTags", this.languageTags);
        writer.writeCollectionOfObjectValues<Set>("sets", this.sets);
    };
    /**
     * Gets the sets property value. Collection of all sets available in the term store.
     * @returns a set
     */
    public get sets() {
        return this._sets;
    };
    /**
     * Sets the sets property value. Collection of all sets available in the term store.
     * @param value Value to set for the sets property.
     */
    public set sets(value: Set[] | undefined) {
        this._sets = value;
    };
}
