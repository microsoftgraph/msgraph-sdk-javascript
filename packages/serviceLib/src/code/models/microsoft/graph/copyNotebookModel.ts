import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {IdentitySet, NotebookLinks} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CopyNotebookModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _createdBy?: string | undefined;
    private _createdByIdentity?: IdentitySet | undefined;
    private _createdTime?: Date | undefined;
    private _id?: string | undefined;
    private _isDefault?: boolean | undefined;
    private _isShared?: boolean | undefined;
    private _lastModifiedBy?: string | undefined;
    private _lastModifiedByIdentity?: IdentitySet | undefined;
    private _lastModifiedTime?: Date | undefined;
    private _links?: NotebookLinks | undefined;
    private _name?: string | undefined;
    private _sectionGroupsUrl?: string | undefined;
    private _sectionsUrl?: string | undefined;
    private _self?: string | undefined;
    private _userRole?: OnenoteUserRole | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new CopyNotebookModel and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the createdBy property value. 
     * @returns a string
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. 
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: string | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdByIdentity property value. 
     * @returns a identitySet
     */
    public get createdByIdentity() {
        return this._createdByIdentity;
    };
    /**
     * Sets the createdByIdentity property value. 
     * @param value Value to set for the createdByIdentity property.
     */
    public set createdByIdentity(value: IdentitySet | undefined) {
        this._createdByIdentity = value;
    };
    /**
     * Gets the createdTime property value. 
     * @returns a Date
     */
    public get createdTime() {
        return this._createdTime;
    };
    /**
     * Sets the createdTime property value. 
     * @param value Value to set for the createdTime property.
     */
    public set createdTime(value: Date | undefined) {
        this._createdTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["createdBy", (o, n) => { (o as unknown as CopyNotebookModel).createdBy = n.getStringValue(); }],
            ["createdByIdentity", (o, n) => { (o as unknown as CopyNotebookModel).createdByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["createdTime", (o, n) => { (o as unknown as CopyNotebookModel).createdTime = n.getDateValue(); }],
            ["id", (o, n) => { (o as unknown as CopyNotebookModel).id = n.getStringValue(); }],
            ["isDefault", (o, n) => { (o as unknown as CopyNotebookModel).isDefault = n.getBooleanValue(); }],
            ["isShared", (o, n) => { (o as unknown as CopyNotebookModel).isShared = n.getBooleanValue(); }],
            ["lastModifiedBy", (o, n) => { (o as unknown as CopyNotebookModel).lastModifiedBy = n.getStringValue(); }],
            ["lastModifiedByIdentity", (o, n) => { (o as unknown as CopyNotebookModel).lastModifiedByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["lastModifiedTime", (o, n) => { (o as unknown as CopyNotebookModel).lastModifiedTime = n.getDateValue(); }],
            ["links", (o, n) => { (o as unknown as CopyNotebookModel).links = n.getObjectValue<NotebookLinks>(createNotebookLinksFromDiscriminatorValue); }],
            ["name", (o, n) => { (o as unknown as CopyNotebookModel).name = n.getStringValue(); }],
            ["sectionGroupsUrl", (o, n) => { (o as unknown as CopyNotebookModel).sectionGroupsUrl = n.getStringValue(); }],
            ["sectionsUrl", (o, n) => { (o as unknown as CopyNotebookModel).sectionsUrl = n.getStringValue(); }],
            ["self", (o, n) => { (o as unknown as CopyNotebookModel).self = n.getStringValue(); }],
            ["userRole", (o, n) => { (o as unknown as CopyNotebookModel).userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); }],
        ]);
    };
    /**
     * Gets the id property value. 
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. 
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the isDefault property value. 
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. 
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isShared property value. 
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. 
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Gets the lastModifiedBy property value. 
     * @returns a string
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. 
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: string | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedByIdentity property value. 
     * @returns a identitySet
     */
    public get lastModifiedByIdentity() {
        return this._lastModifiedByIdentity;
    };
    /**
     * Sets the lastModifiedByIdentity property value. 
     * @param value Value to set for the lastModifiedByIdentity property.
     */
    public set lastModifiedByIdentity(value: IdentitySet | undefined) {
        this._lastModifiedByIdentity = value;
    };
    /**
     * Gets the lastModifiedTime property value. 
     * @returns a Date
     */
    public get lastModifiedTime() {
        return this._lastModifiedTime;
    };
    /**
     * Sets the lastModifiedTime property value. 
     * @param value Value to set for the lastModifiedTime property.
     */
    public set lastModifiedTime(value: Date | undefined) {
        this._lastModifiedTime = value;
    };
    /**
     * Gets the links property value. 
     * @returns a notebookLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. 
     * @param value Value to set for the links property.
     */
    public set links(value: NotebookLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the sectionGroupsUrl property value. 
     * @returns a string
     */
    public get sectionGroupsUrl() {
        return this._sectionGroupsUrl;
    };
    /**
     * Sets the sectionGroupsUrl property value. 
     * @param value Value to set for the sectionGroupsUrl property.
     */
    public set sectionGroupsUrl(value: string | undefined) {
        this._sectionGroupsUrl = value;
    };
    /**
     * Gets the sectionsUrl property value. 
     * @returns a string
     */
    public get sectionsUrl() {
        return this._sectionsUrl;
    };
    /**
     * Sets the sectionsUrl property value. 
     * @param value Value to set for the sectionsUrl property.
     */
    public set sectionsUrl(value: string | undefined) {
        this._sectionsUrl = value;
    };
    /**
     * Gets the self property value. 
     * @returns a string
     */
    public get self() {
        return this._self;
    };
    /**
     * Sets the self property value. 
     * @param value Value to set for the self property.
     */
    public set self(value: string | undefined) {
        this._self = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("createdBy", this.createdBy);
        writer.writeObjectValue<IdentitySet>("createdByIdentity", this.createdByIdentity);
        writer.writeDateValue("createdTime", this.createdTime);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeStringValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeObjectValue<IdentitySet>("lastModifiedByIdentity", this.lastModifiedByIdentity);
        writer.writeDateValue("lastModifiedTime", this.lastModifiedTime);
        writer.writeObjectValue<NotebookLinks>("links", this.links);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        writer.writeStringValue("self", this.self);
        writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userRole property value. 
     * @returns a onenoteUserRole
     */
    public get userRole() {
        return this._userRole;
    };
    /**
     * Sets the userRole property value. 
     * @param value Value to set for the userRole property.
     */
    public set userRole(value: OnenoteUserRole | undefined) {
        this._userRole = value;
    };
}
