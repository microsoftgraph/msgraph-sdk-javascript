import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {AccessPackageAssignmentPolicy, AccessPackageCatalog, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackage extends Entity implements Parsable {
    private _assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Read-only. Nullable.  */
    private _catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The description of the access package.  */
    private _description?: string | undefined;
    /** The display name of the access package. Supports $filter (eq, contains).  */
    private _displayName?: string | undefined;
    /** Whether the access package is hidden from the requestor.  */
    private _isHidden?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _modifiedDateTime?: Date | undefined;
    /**
     * Gets the assignmentPolicies property value. 
     * @returns a accessPackageAssignmentPolicy
     */
    public get assignmentPolicies() {
        return this._assignmentPolicies;
    };
    /**
     * Sets the assignmentPolicies property value. 
     * @param value Value to set for the assignmentPolicies property.
     */
    public set assignmentPolicies(value: AccessPackageAssignmentPolicy[] | undefined) {
        this._assignmentPolicies = value;
    };
    /**
     * Gets the catalog property value. Read-only. Nullable.
     * @returns a accessPackageCatalog
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. Read-only. Nullable.
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        this._catalog = value;
    };
    /**
     * Instantiates a new accessPackage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description of the access package.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the access package.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the access package. Supports $filter (eq, contains).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the access package. Supports $filter (eq, contains).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignmentPolicies", (o, n) => { (o as unknown as AccessPackage).assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); }],
            ["catalog", (o, n) => { (o as unknown as AccessPackage).catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as AccessPackage).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as AccessPackage).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AccessPackage).displayName = n.getStringValue(); }],
            ["isHidden", (o, n) => { (o as unknown as AccessPackage).isHidden = n.getBooleanValue(); }],
            ["modifiedDateTime", (o, n) => { (o as unknown as AccessPackage).modifiedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Gets the isHidden property value. Whether the access package is hidden from the requestor.
     * @returns a boolean
     */
    public get isHidden() {
        return this._isHidden;
    };
    /**
     * Sets the isHidden property value. Whether the access package is hidden from the requestor.
     * @param value Value to set for the isHidden property.
     */
    public set isHidden(value: boolean | undefined) {
        this._isHidden = value;
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", this.assignmentPolicies);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", this.catalog);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
    };
}
