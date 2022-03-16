import {AllowedTargetScope} from './allowedTargetScope';
import {createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {AccessPackage, AccessPackageAssignmentApprovalSettings, AccessPackageAssignmentRequestorSettings, AccessPackageAssignmentReviewSettings, AccessPackageCatalog, Entity, ExpirationPattern, SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentPolicy extends Entity implements Parsable {
    /** The access package with this policy. Read-only. Nullable. Supports $expand.  */
    private _accessPackage?: AccessPackage | undefined;
    private _allowedTargetScope?: AllowedTargetScope | undefined;
    private _catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?: Date | undefined;
    /** The description of the policy.  */
    private _description?: string | undefined;
    /** The display name of the policy. Supports $filter (eq).  */
    private _displayName?: string | undefined;
    private _expiration?: ExpirationPattern | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _modifiedDateTime?: Date | undefined;
    /** Who must approve requests for access package in this policy.  */
    private _requestApprovalSettings?: AccessPackageAssignmentApprovalSettings | undefined;
    /** Who can request this access package from this policy.  */
    private _requestorSettings?: AccessPackageAssignmentRequestorSettings | undefined;
    private _reviewSettings?: AccessPackageAssignmentReviewSettings | undefined;
    private _specificAllowedTargets?: SubjectSet[] | undefined;
    /**
     * Gets the accessPackage property value. The access package with this policy. Read-only. Nullable. Supports $expand.
     * @returns a accessPackage
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. The access package with this policy. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        this._accessPackage = value;
    };
    /**
     * Gets the allowedTargetScope property value. 
     * @returns a allowedTargetScope
     */
    public get allowedTargetScope() {
        return this._allowedTargetScope;
    };
    /**
     * Sets the allowedTargetScope property value. 
     * @param value Value to set for the allowedTargetScope property.
     */
    public set allowedTargetScope(value: AllowedTargetScope | undefined) {
        this._allowedTargetScope = value;
    };
    /**
     * Gets the catalog property value. 
     * @returns a accessPackageCatalog
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. 
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        this._catalog = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description of the policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the policy. Supports $filter (eq).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the policy. Supports $filter (eq).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the expiration property value. 
     * @returns a expirationPattern
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. 
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        this._expiration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accessPackage", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); }],
            ["allowedTargetScope", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).allowedTargetScope = n.getEnumValue<AllowedTargetScope>(AllowedTargetScope); }],
            ["catalog", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).displayName = n.getStringValue(); }],
            ["expiration", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); }],
            ["modifiedDateTime", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).modifiedDateTime = n.getDateValue(); }],
            ["requestApprovalSettings", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).requestApprovalSettings = n.getObjectValue<AccessPackageAssignmentApprovalSettings>(createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue); }],
            ["requestorSettings", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).requestorSettings = n.getObjectValue<AccessPackageAssignmentRequestorSettings>(createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue); }],
            ["reviewSettings", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).reviewSettings = n.getObjectValue<AccessPackageAssignmentReviewSettings>(createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue); }],
            ["specificAllowedTargets", (o, n) => { (o as unknown as AccessPackageAssignmentPolicy).specificAllowedTargets = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Gets the requestApprovalSettings property value. Who must approve requests for access package in this policy.
     * @returns a accessPackageAssignmentApprovalSettings
     */
    public get requestApprovalSettings() {
        return this._requestApprovalSettings;
    };
    /**
     * Sets the requestApprovalSettings property value. Who must approve requests for access package in this policy.
     * @param value Value to set for the requestApprovalSettings property.
     */
    public set requestApprovalSettings(value: AccessPackageAssignmentApprovalSettings | undefined) {
        this._requestApprovalSettings = value;
    };
    /**
     * Gets the requestorSettings property value. Who can request this access package from this policy.
     * @returns a accessPackageAssignmentRequestorSettings
     */
    public get requestorSettings() {
        return this._requestorSettings;
    };
    /**
     * Sets the requestorSettings property value. Who can request this access package from this policy.
     * @param value Value to set for the requestorSettings property.
     */
    public set requestorSettings(value: AccessPackageAssignmentRequestorSettings | undefined) {
        this._requestorSettings = value;
    };
    /**
     * Gets the reviewSettings property value. 
     * @returns a accessPackageAssignmentReviewSettings
     */
    public get reviewSettings() {
        return this._reviewSettings;
    };
    /**
     * Sets the reviewSettings property value. 
     * @param value Value to set for the reviewSettings property.
     */
    public set reviewSettings(value: AccessPackageAssignmentReviewSettings | undefined) {
        this._reviewSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessPackage>("accessPackage", this.accessPackage);
        writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", this.allowedTargetScope);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", this.catalog);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<ExpirationPattern>("expiration", this.expiration);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeObjectValue<AccessPackageAssignmentApprovalSettings>("requestApprovalSettings", this.requestApprovalSettings);
        writer.writeObjectValue<AccessPackageAssignmentRequestorSettings>("requestorSettings", this.requestorSettings);
        writer.writeObjectValue<AccessPackageAssignmentReviewSettings>("reviewSettings", this.reviewSettings);
        writer.writeCollectionOfObjectValues<SubjectSet>("specificAllowedTargets", this.specificAllowedTargets);
    };
    /**
     * Gets the specificAllowedTargets property value. 
     * @returns a subjectSet
     */
    public get specificAllowedTargets() {
        return this._specificAllowedTargets;
    };
    /**
     * Sets the specificAllowedTargets property value. 
     * @param value Value to set for the specificAllowedTargets property.
     */
    public set specificAllowedTargets(value: SubjectSet[] | undefined) {
        this._specificAllowedTargets = value;
    };
}
