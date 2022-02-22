import {ConditionalAccessPolicy, Entity, NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessRoot extends Entity implements Parsable {
    /** Read-only. Nullable. Returns a collection of the specified named locations.  */
    private _namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.  */
    private _policies?: ConditionalAccessPolicy[] | undefined;
    /**
     * Instantiates a new conditionalAccessRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the namedLocations property value. Read-only. Nullable. Returns a collection of the specified named locations.
     * @returns a namedLocation
     */
    public get namedLocations() {
        return this._namedLocations;
    };
    /**
     * Gets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.
     * @returns a conditionalAccessPolicy
     */
    public get policies() {
        return this._policies;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["namedLocations", (o, n) => { (o as unknown as ConditionalAccessRoot).namedLocations = n.getCollectionOfObjectValues<NamedLocation>(NamedLocation); }],
            ["policies", (o, n) => { (o as unknown as ConditionalAccessRoot).policies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(ConditionalAccessPolicy); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<NamedLocation>("namedLocations", this.namedLocations);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("policies", this.policies);
    };
    /**
     * Sets the namedLocations property value. Read-only. Nullable. Returns a collection of the specified named locations.
     * @param value Value to set for the namedLocations property.
     */
    public set namedLocations(value: NamedLocation[] | undefined) {
        this._namedLocations = value;
    };
    /**
     * Sets the policies property value. Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies.
     * @param value Value to set for the policies property.
     */
    public set policies(value: ConditionalAccessPolicy[] | undefined) {
        this._policies = value;
    };
}
