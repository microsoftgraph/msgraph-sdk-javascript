import {Entity} from '../';
import {RelationType, Set, Term} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Relation extends Entity implements Parsable {
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].  */
    private _fromTerm?: Term | undefined;
    /** The type of relation. Possible values are: pin, reuse.  */
    private _relationship?: RelationType | undefined;
    /** The [set] in which the relation is relevant.  */
    private _set?: Set | undefined;
    /** The to [term] of the relation. The term to which the relationship is defined.  */
    private _toTerm?: Term | undefined;
    /**
     * Instantiates a new relation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @returns a term
     */
    public get fromTerm() {
        return this._fromTerm;
    };
    /**
     * Gets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @returns a relationType
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Gets the set property value. The [set] in which the relation is relevant.
     * @returns a set
     */
    public get set() {
        return this._set;
    };
    /**
     * Gets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @returns a term
     */
    public get toTerm() {
        return this._toTerm;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["fromTerm", (o, n) => { (o as unknown as Relation).fromTerm = n.getObjectValue<Term>(Term); }],
            ["relationship", (o, n) => { (o as unknown as Relation).relationship = n.getEnumValue<RelationType>(RelationType); }],
            ["set", (o, n) => { (o as unknown as Relation).set = n.getObjectValue<Set>(Set); }],
            ["toTerm", (o, n) => { (o as unknown as Relation).toTerm = n.getObjectValue<Term>(Term); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Term>("fromTerm", this.fromTerm);
        writer.writeEnumValue<RelationType>("relationship", this.relationship);
        writer.writeObjectValue<Set>("set", this.set);
        writer.writeObjectValue<Term>("toTerm", this.toTerm);
    };
    /**
     * Sets the fromTerm property value. The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     * @param value Value to set for the fromTerm property.
     */
    public set fromTerm(value: Term | undefined) {
        this._fromTerm = value;
    };
    /**
     * Sets the relationship property value. The type of relation. Possible values are: pin, reuse.
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: RelationType | undefined) {
        this._relationship = value;
    };
    /**
     * Sets the set property value. The [set] in which the relation is relevant.
     * @param value Value to set for the set property.
     */
    public set set(value: Set | undefined) {
        this._set = value;
    };
    /**
     * Sets the toTerm property value. The to [term] of the relation. The term to which the relationship is defined.
     * @param value Value to set for the toTerm property.
     */
    public set toTerm(value: Term | undefined) {
        this._toTerm = value;
    };
}
