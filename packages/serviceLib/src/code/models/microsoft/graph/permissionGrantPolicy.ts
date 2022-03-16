import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {PermissionGrantConditionSet, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantPolicy extends PolicyBase implements Parsable {
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.  */
    private _excludes?: PermissionGrantConditionSet[] | undefined;
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET.  */
    private _includes?: PermissionGrantConditionSet[] | undefined;
    /**
     * Instantiates a new permissionGrantPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @returns a permissionGrantConditionSet
     */
    public get excludes() {
        return this._excludes;
    };
    /**
     * Sets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @param value Value to set for the excludes property.
     */
    public set excludes(value: PermissionGrantConditionSet[] | undefined) {
        this._excludes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["excludes", (o, n) => { (o as unknown as PermissionGrantPolicy).excludes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); }],
            ["includes", (o, n) => { (o as unknown as PermissionGrantPolicy).includes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
     * @returns a permissionGrantConditionSet
     */
    public get includes() {
        return this._includes;
    };
    /**
     * Sets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
     * @param value Value to set for the includes property.
     */
    public set includes(value: PermissionGrantConditionSet[] | undefined) {
        this._includes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSet>("excludes", this.excludes);
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSet>("includes", this.includes);
    };
}
