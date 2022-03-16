import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {AppScope, DirectoryObject, Entity, UnifiedRoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignment extends Entity implements Parsable {
    /** Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand.  */
    private _appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific.  Either this property or directoryScopeId is required. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, in).  */
    private _appScopeId?: string | undefined;
    private _condition?: string | undefined;
    /** The directory object that is the scope of the assignment. Read-only. Supports $expand.  */
    private _directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment.  Either this property or appScopeId is required. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, in).  */
    private _directoryScopeId?: string | undefined;
    /** Referencing the assigned principal. Read-only. Supports $expand.  */
    private _principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq, in).  */
    private _principalId?: string | undefined;
    /** The roleDefinition the assignment is for.  Supports $expand. roleDefinition.Id will be auto expanded.  */
    private _roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the role definition the assignment is for. Read only. Supports $filter (eq, in).  */
    private _roleDefinitionId?: string | undefined;
    /**
     * Gets the appScope property value. Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand.
     * @returns a appScope
     */
    public get appScope() {
        return this._appScope;
    };
    /**
     * Sets the appScope property value. Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand.
     * @param value Value to set for the appScope property.
     */
    public set appScope(value: AppScope | undefined) {
        this._appScope = value;
    };
    /**
     * Gets the appScopeId property value. Identifier of the app-specific scope when the assignment scope is app-specific.  Either this property or directoryScopeId is required. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, in).
     * @returns a string
     */
    public get appScopeId() {
        return this._appScopeId;
    };
    /**
     * Sets the appScopeId property value. Identifier of the app-specific scope when the assignment scope is app-specific.  Either this property or directoryScopeId is required. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, in).
     * @param value Value to set for the appScopeId property.
     */
    public set appScopeId(value: string | undefined) {
        this._appScopeId = value;
    };
    /**
     * Gets the condition property value. 
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. 
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        this._condition = value;
    };
    /**
     * Instantiates a new unifiedRoleAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get directoryScope() {
        return this._directoryScope;
    };
    /**
     * Sets the directoryScope property value. The directory object that is the scope of the assignment. Read-only. Supports $expand.
     * @param value Value to set for the directoryScope property.
     */
    public set directoryScope(value: DirectoryObject | undefined) {
        this._directoryScope = value;
    };
    /**
     * Gets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment.  Either this property or appScopeId is required. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, in).
     * @returns a string
     */
    public get directoryScopeId() {
        return this._directoryScopeId;
    };
    /**
     * Sets the directoryScopeId property value. Identifier of the directory object representing the scope of the assignment.  Either this property or appScopeId is required. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, in).
     * @param value Value to set for the directoryScopeId property.
     */
    public set directoryScopeId(value: string | undefined) {
        this._directoryScopeId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appScope", (o, n) => { (o as unknown as UnifiedRoleAssignment).appScope = n.getObjectValue<AppScope>(createAppScopeFromDiscriminatorValue); }],
            ["appScopeId", (o, n) => { (o as unknown as UnifiedRoleAssignment).appScopeId = n.getStringValue(); }],
            ["condition", (o, n) => { (o as unknown as UnifiedRoleAssignment).condition = n.getStringValue(); }],
            ["directoryScope", (o, n) => { (o as unknown as UnifiedRoleAssignment).directoryScope = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["directoryScopeId", (o, n) => { (o as unknown as UnifiedRoleAssignment).directoryScopeId = n.getStringValue(); }],
            ["principal", (o, n) => { (o as unknown as UnifiedRoleAssignment).principal = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); }],
            ["principalId", (o, n) => { (o as unknown as UnifiedRoleAssignment).principalId = n.getStringValue(); }],
            ["roleDefinition", (o, n) => { (o as unknown as UnifiedRoleAssignment).roleDefinition = n.getObjectValue<UnifiedRoleDefinition>(createUnifiedRoleDefinitionFromDiscriminatorValue); }],
            ["roleDefinitionId", (o, n) => { (o as unknown as UnifiedRoleAssignment).roleDefinitionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the principal property value. Referencing the assigned principal. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. Referencing the assigned principal. Read-only. Supports $expand.
     * @param value Value to set for the principal property.
     */
    public set principal(value: DirectoryObject | undefined) {
        this._principal = value;
    };
    /**
     * Gets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq, in).
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. Identifier of the principal to which the assignment is granted. Supports $filter (eq, in).
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the roleDefinition property value. The roleDefinition the assignment is for.  Supports $expand. roleDefinition.Id will be auto expanded.
     * @returns a unifiedRoleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. The roleDefinition the assignment is for.  Supports $expand. roleDefinition.Id will be auto expanded.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: UnifiedRoleDefinition | undefined) {
        this._roleDefinition = value;
    };
    /**
     * Gets the roleDefinitionId property value. Identifier of the role definition the assignment is for. Read only. Supports $filter (eq, in).
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. Identifier of the role definition the assignment is for. Read only. Supports $filter (eq, in).
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AppScope>("appScope", this.appScope);
        writer.writeStringValue("appScopeId", this.appScopeId);
        writer.writeStringValue("condition", this.condition);
        writer.writeObjectValue<DirectoryObject>("directoryScope", this.directoryScope);
        writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        writer.writeObjectValue<DirectoryObject>("principal", this.principal);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeObjectValue<UnifiedRoleDefinition>("roleDefinition", this.roleDefinition);
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
    };
}
