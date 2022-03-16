import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {createRolePermissionFromDiscriminatorValue} from './createRolePermissionFromDiscriminatorValue';
import {Entity, RoleAssignment, RolePermission} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleDefinition extends Entity implements Parsable {
    /** Description of the Role definition.  */
    private _description?: string | undefined;
    /** Display Name of the Role definition.  */
    private _displayName?: string | undefined;
    /** Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.  */
    private _isBuiltIn?: boolean | undefined;
    /** List of Role assignments for this role definition.  */
    private _roleAssignments?: RoleAssignment[] | undefined;
    /** List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.  */
    private _rolePermissions?: RolePermission[] | undefined;
    /**
     * Instantiates a new roleDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the Role definition.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the Role definition.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display Name of the Role definition.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display Name of the Role definition.
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
            ["description", (o, n) => { (o as unknown as RoleDefinition).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as RoleDefinition).displayName = n.getStringValue(); }],
            ["isBuiltIn", (o, n) => { (o as unknown as RoleDefinition).isBuiltIn = n.getBooleanValue(); }],
            ["roleAssignments", (o, n) => { (o as unknown as RoleDefinition).roleAssignments = n.getCollectionOfObjectValues<RoleAssignment>(createRoleAssignmentFromDiscriminatorValue); }],
            ["rolePermissions", (o, n) => { (o as unknown as RoleDefinition).rolePermissions = n.getCollectionOfObjectValues<RolePermission>(createRolePermissionFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isBuiltIn property value. Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
     * @returns a boolean
     */
    public get isBuiltIn() {
        return this._isBuiltIn;
    };
    /**
     * Sets the isBuiltIn property value. Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
     * @param value Value to set for the isBuiltIn property.
     */
    public set isBuiltIn(value: boolean | undefined) {
        this._isBuiltIn = value;
    };
    /**
     * Gets the roleAssignments property value. List of Role assignments for this role definition.
     * @returns a roleAssignment
     */
    public get roleAssignments() {
        return this._roleAssignments;
    };
    /**
     * Sets the roleAssignments property value. List of Role assignments for this role definition.
     * @param value Value to set for the roleAssignments property.
     */
    public set roleAssignments(value: RoleAssignment[] | undefined) {
        this._roleAssignments = value;
    };
    /**
     * Gets the rolePermissions property value. List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.
     * @returns a rolePermission
     */
    public get rolePermissions() {
        return this._rolePermissions;
    };
    /**
     * Sets the rolePermissions property value. List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission.
     * @param value Value to set for the rolePermissions property.
     */
    public set rolePermissions(value: RolePermission[] | undefined) {
        this._rolePermissions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        writer.writeCollectionOfObjectValues<RoleAssignment>("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfObjectValues<RolePermission>("rolePermissions", this.rolePermissions);
    };
}
