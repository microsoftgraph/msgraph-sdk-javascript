import {Entity, RoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleAssignment extends Entity implements Parsable {
    /** Description of the Role Assignment.  */
    private _description?: string | undefined;
    /** The display or friendly name of the role Assignment.  */
    private _displayName?: string | undefined;
    /** List of ids of role scope member security groups.  These are IDs from Azure Active Directory.  */
    private _resourceScopes?: string[] | undefined;
    /** Role definition this assignment is part of.  */
    private _roleDefinition?: RoleDefinition | undefined;
    /**
     * Instantiates a new roleAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the Role Assignment.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The display or friendly name of the role Assignment.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
     * @returns a string
     */
    public get resourceScopes() {
        return this._resourceScopes;
    };
    /**
     * Gets the roleDefinition property value. Role definition this assignment is part of.
     * @returns a roleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["description", (o, n) => { (o as unknown as RoleAssignment).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as RoleAssignment).displayName = n.getStringValue(); }],
            ["resourceScopes", (o, n) => { (o as unknown as RoleAssignment).resourceScopes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["roleDefinition", (o, n) => { (o as unknown as RoleAssignment).roleDefinition = n.getObjectValue<RoleDefinition>(RoleDefinition); }],
        ]);
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
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", this.resourceScopes);
        writer.writeObjectValue<RoleDefinition>("roleDefinition", this.roleDefinition);
    };
    /**
     * Sets the description property value. Description of the Role Assignment.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The display or friendly name of the role Assignment.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
     * @param value Value to set for the resourceScopes property.
     */
    public set resourceScopes(value: string[] | undefined) {
        this._resourceScopes = value;
    };
    /**
     * Sets the roleDefinition property value. Role definition this assignment is part of.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: RoleDefinition | undefined) {
        this._roleDefinition = value;
    };
}
