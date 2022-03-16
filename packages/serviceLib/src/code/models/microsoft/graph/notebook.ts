import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {NotebookLinks, OnenoteEntityHierarchyModel, OnenoteSection, SectionGroup} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Notebook extends OnenoteEntityHierarchyModel implements Parsable {
    /** Indicates whether this is the user's default notebook. Read-only.  */
    private _isDefault?: boolean | undefined;
    /** Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.  */
    private _isShared?: boolean | undefined;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.  */
    private _links?: NotebookLinks | undefined;
    /** The section groups in the notebook. Read-only. Nullable.  */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.  */
    private _sectionGroupsUrl?: string | undefined;
    /** The sections in the notebook. Read-only. Nullable.  */
    private _sections?: OnenoteSection[] | undefined;
    /** The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.  */
    private _sectionsUrl?: string | undefined;
    /** Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.  */
    private _userRole?: OnenoteUserRole | undefined;
    /**
     * Instantiates a new notebook and sets the default values.
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
            ["isDefault", (o, n) => { (o as unknown as Notebook).isDefault = n.getBooleanValue(); }],
            ["isShared", (o, n) => { (o as unknown as Notebook).isShared = n.getBooleanValue(); }],
            ["links", (o, n) => { (o as unknown as Notebook).links = n.getObjectValue<NotebookLinks>(createNotebookLinksFromDiscriminatorValue); }],
            ["sectionGroups", (o, n) => { (o as unknown as Notebook).sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); }],
            ["sectionGroupsUrl", (o, n) => { (o as unknown as Notebook).sectionGroupsUrl = n.getStringValue(); }],
            ["sections", (o, n) => { (o as unknown as Notebook).sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); }],
            ["sectionsUrl", (o, n) => { (o as unknown as Notebook).sectionsUrl = n.getStringValue(); }],
            ["userRole", (o, n) => { (o as unknown as Notebook).userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); }],
        ]);
    };
    /**
     * Gets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Gets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @returns a notebookLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @param value Value to set for the links property.
     */
    public set links(value: NotebookLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
     * @returns a sectionGroup
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
     * @param value Value to set for the sectionGroups property.
     */
    public set sectionGroups(value: SectionGroup[] | undefined) {
        this._sectionGroups = value;
    };
    /**
     * Gets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
     * @returns a string
     */
    public get sectionGroupsUrl() {
        return this._sectionGroupsUrl;
    };
    /**
     * Sets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
     * @param value Value to set for the sectionGroupsUrl property.
     */
    public set sectionGroupsUrl(value: string | undefined) {
        this._sectionGroupsUrl = value;
    };
    /**
     * Gets the sections property value. The sections in the notebook. Read-only. Nullable.
     * @returns a onenoteSection
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in the notebook. Read-only. Nullable.
     * @param value Value to set for the sections property.
     */
    public set sections(value: OnenoteSection[] | undefined) {
        this._sections = value;
    };
    /**
     * Gets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
     * @returns a string
     */
    public get sectionsUrl() {
        return this._sectionsUrl;
    };
    /**
     * Sets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
     * @param value Value to set for the sectionsUrl property.
     */
    public set sectionsUrl(value: string | undefined) {
        this._sectionsUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeObjectValue<NotebookLinks>("links", this.links);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", this.sectionGroups);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", this.sections);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
    };
    /**
     * Gets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     * @returns a onenoteUserRole
     */
    public get userRole() {
        return this._userRole;
    };
    /**
     * Sets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     * @param value Value to set for the userRole property.
     */
    public set userRole(value: OnenoteUserRole | undefined) {
        this._userRole = value;
    };
}
