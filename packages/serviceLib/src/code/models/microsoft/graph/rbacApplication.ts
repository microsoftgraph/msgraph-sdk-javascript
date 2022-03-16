import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {Entity, UnifiedRoleAssignment, UnifiedRoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RbacApplication extends Entity implements Parsable {
    /** Resource to grant access to users or groups.  */
    private _roleAssignments?: UnifiedRoleAssignment[] | undefined;
    /** Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.  */
    private _roleDefinitions?: UnifiedRoleDefinition[] | undefined;
    /**
     * Instantiates a new rbacApplication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["roleAssignments", (o, n) => { (o as unknown as RbacApplication).roleAssignments = n.getCollectionOfObjectValues<UnifiedRoleAssignment>(createUnifiedRoleAssignmentFromDiscriminatorValue); }],
            ["roleDefinitions", (o, n) => { (o as unknown as RbacApplication).roleDefinitions = n.getCollectionOfObjectValues<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the roleAssignments property value. Resource to grant access to users or groups.
     * @returns a unifiedRoleAssignment
     */
    public get roleAssignments() {
        return this._roleAssignments;
    };
    /**
     * Sets the roleAssignments property value. Resource to grant access to users or groups.
     * @param value Value to set for the roleAssignments property.
     */
    public set roleAssignments(value: UnifiedRoleAssignment[] | undefined) {
        this._roleAssignments = value;
    };
    /**
     * Gets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinitions() {
        return this._roleDefinitions;
    };
    /**
     * Sets the roleDefinitions property value. Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
     * @param value Value to set for the roleDefinitions property.
     */
    public set roleDefinitions(value: UnifiedRoleDefinition[] | undefined) {
        this._roleDefinitions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignment>("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfObjectValues<UnifiedRoleDefinition>("roleDefinitions", this.roleDefinitions);
    };
}
