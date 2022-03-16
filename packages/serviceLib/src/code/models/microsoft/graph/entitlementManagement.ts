import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestFromDiscriminatorValue} from './createAccessPackageAssignmentRequestFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {createEntitlementManagementSettingsFromDiscriminatorValue} from './createEntitlementManagementSettingsFromDiscriminatorValue';
import {AccessPackage, AccessPackageAssignment, AccessPackageAssignmentPolicy, AccessPackageAssignmentRequest, AccessPackageCatalog, Approval, ConnectedOrganization, EntitlementManagementSettings, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EntitlementManagement extends Entity implements Parsable {
    /** Approval stages for assignment requests.  */
    private _accessPackageAssignmentApprovals?: Approval[] | undefined;
    /** Represents access package objects.  */
    private _accessPackages?: AccessPackage[] | undefined;
    private _assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Represents access package assignment requests created by or on behalf of a user.  */
    private _assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /** Represents the grant of an access package to a subject (user or group).  */
    private _assignments?: AccessPackageAssignment[] | undefined;
    /** Represents a group of access packages.  */
    private _catalogs?: AccessPackageCatalog[] | undefined;
    /** Represents references to a directory or domain of another organization whose users can request access.  */
    private _connectedOrganizations?: ConnectedOrganization[] | undefined;
    /** Represents the settings that control the behavior of Azure AD entitlement management.  */
    private _settings?: EntitlementManagementSettings | undefined;
    /**
     * Gets the accessPackageAssignmentApprovals property value. Approval stages for assignment requests.
     * @returns a approval
     */
    public get accessPackageAssignmentApprovals() {
        return this._accessPackageAssignmentApprovals;
    };
    /**
     * Sets the accessPackageAssignmentApprovals property value. Approval stages for assignment requests.
     * @param value Value to set for the accessPackageAssignmentApprovals property.
     */
    public set accessPackageAssignmentApprovals(value: Approval[] | undefined) {
        this._accessPackageAssignmentApprovals = value;
    };
    /**
     * Gets the accessPackages property value. Represents access package objects.
     * @returns a accessPackage
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Sets the accessPackages property value. Represents access package objects.
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        this._accessPackages = value;
    };
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
     * Gets the assignmentRequests property value. Represents access package assignment requests created by or on behalf of a user.
     * @returns a accessPackageAssignmentRequest
     */
    public get assignmentRequests() {
        return this._assignmentRequests;
    };
    /**
     * Sets the assignmentRequests property value. Represents access package assignment requests created by or on behalf of a user.
     * @param value Value to set for the assignmentRequests property.
     */
    public set assignmentRequests(value: AccessPackageAssignmentRequest[] | undefined) {
        this._assignmentRequests = value;
    };
    /**
     * Gets the assignments property value. Represents the grant of an access package to a subject (user or group).
     * @returns a accessPackageAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Represents the grant of an access package to a subject (user or group).
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: AccessPackageAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Gets the catalogs property value. Represents a group of access packages.
     * @returns a accessPackageCatalog
     */
    public get catalogs() {
        return this._catalogs;
    };
    /**
     * Sets the catalogs property value. Represents a group of access packages.
     * @param value Value to set for the catalogs property.
     */
    public set catalogs(value: AccessPackageCatalog[] | undefined) {
        this._catalogs = value;
    };
    /**
     * Gets the connectedOrganizations property value. Represents references to a directory or domain of another organization whose users can request access.
     * @returns a connectedOrganization
     */
    public get connectedOrganizations() {
        return this._connectedOrganizations;
    };
    /**
     * Sets the connectedOrganizations property value. Represents references to a directory or domain of another organization whose users can request access.
     * @param value Value to set for the connectedOrganizations property.
     */
    public set connectedOrganizations(value: ConnectedOrganization[] | undefined) {
        this._connectedOrganizations = value;
    };
    /**
     * Instantiates a new entitlementManagement and sets the default values.
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
            ["accessPackageAssignmentApprovals", (o, n) => { (o as unknown as EntitlementManagement).accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<Approval>(createApprovalFromDiscriminatorValue); }],
            ["accessPackages", (o, n) => { (o as unknown as EntitlementManagement).accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); }],
            ["assignmentPolicies", (o, n) => { (o as unknown as EntitlementManagement).assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); }],
            ["assignmentRequests", (o, n) => { (o as unknown as EntitlementManagement).assignmentRequests = n.getCollectionOfObjectValues<AccessPackageAssignmentRequest>(createAccessPackageAssignmentRequestFromDiscriminatorValue); }],
            ["assignments", (o, n) => { (o as unknown as EntitlementManagement).assignments = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); }],
            ["catalogs", (o, n) => { (o as unknown as EntitlementManagement).catalogs = n.getCollectionOfObjectValues<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); }],
            ["connectedOrganizations", (o, n) => { (o as unknown as EntitlementManagement).connectedOrganizations = n.getCollectionOfObjectValues<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); }],
            ["settings", (o, n) => { (o as unknown as EntitlementManagement).settings = n.getObjectValue<EntitlementManagementSettings>(createEntitlementManagementSettingsFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Approval>("accessPackageAssignmentApprovals", this.accessPackageAssignmentApprovals);
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", this.accessPackages);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", this.assignmentPolicies);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("assignmentRequests", this.assignmentRequests);
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("assignments", this.assignments);
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("catalogs", this.catalogs);
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("connectedOrganizations", this.connectedOrganizations);
        writer.writeObjectValue<EntitlementManagementSettings>("settings", this.settings);
    };
    /**
     * Gets the settings property value. Represents the settings that control the behavior of Azure AD entitlement management.
     * @returns a entitlementManagementSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Represents the settings that control the behavior of Azure AD entitlement management.
     * @param value Value to set for the settings property.
     */
    public set settings(value: EntitlementManagementSettings | undefined) {
        this._settings = value;
    };
}
