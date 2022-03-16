import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {createSectionLinksFromDiscriminatorValue} from './createSectionLinksFromDiscriminatorValue';
import {Notebook, OnenoteEntityHierarchyModel, OnenotePage, SectionGroup, SectionLinks} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteSection extends OnenoteEntityHierarchyModel implements Parsable {
    /** Indicates whether this is the user's default section. Read-only.  */
    private _isDefault?: boolean | undefined;
    /** Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.  */
    private _links?: SectionLinks | undefined;
    /** The collection of pages in the section.  Read-only. Nullable.  */
    private _pages?: OnenotePage[] | undefined;
    /** The pages endpoint where you can get details for all the pages in the section. Read-only.  */
    private _pagesUrl?: string | undefined;
    /** The notebook that contains the section.  Read-only.  */
    private _parentNotebook?: Notebook | undefined;
    /** The section group that contains the section.  Read-only.  */
    private _parentSectionGroup?: SectionGroup | undefined;
    /**
     * Instantiates a new onenoteSection and sets the default values.
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
            ["isDefault", (o, n) => { (o as unknown as OnenoteSection).isDefault = n.getBooleanValue(); }],
            ["links", (o, n) => { (o as unknown as OnenoteSection).links = n.getObjectValue<SectionLinks>(createSectionLinksFromDiscriminatorValue); }],
            ["pages", (o, n) => { (o as unknown as OnenoteSection).pages = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); }],
            ["pagesUrl", (o, n) => { (o as unknown as OnenoteSection).pagesUrl = n.getStringValue(); }],
            ["parentNotebook", (o, n) => { (o as unknown as OnenoteSection).parentNotebook = n.getObjectValue<Notebook>(createNotebookFromDiscriminatorValue); }],
            ["parentSectionGroup", (o, n) => { (o as unknown as OnenoteSection).parentSectionGroup = n.getObjectValue<SectionGroup>(createSectionGroupFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isDefault property value. Indicates whether this is the user's default section. Read-only.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. Indicates whether this is the user's default section. Read-only.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
     * @returns a sectionLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
     * @param value Value to set for the links property.
     */
    public set links(value: SectionLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the pages property value. The collection of pages in the section.  Read-only. Nullable.
     * @returns a onenotePage
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. The collection of pages in the section.  Read-only. Nullable.
     * @param value Value to set for the pages property.
     */
    public set pages(value: OnenotePage[] | undefined) {
        this._pages = value;
    };
    /**
     * Gets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
     * @returns a string
     */
    public get pagesUrl() {
        return this._pagesUrl;
    };
    /**
     * Sets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
     * @param value Value to set for the pagesUrl property.
     */
    public set pagesUrl(value: string | undefined) {
        this._pagesUrl = value;
    };
    /**
     * Gets the parentNotebook property value. The notebook that contains the section.  Read-only.
     * @returns a notebook
     */
    public get parentNotebook() {
        return this._parentNotebook;
    };
    /**
     * Sets the parentNotebook property value. The notebook that contains the section.  Read-only.
     * @param value Value to set for the parentNotebook property.
     */
    public set parentNotebook(value: Notebook | undefined) {
        this._parentNotebook = value;
    };
    /**
     * Gets the parentSectionGroup property value. The section group that contains the section.  Read-only.
     * @returns a sectionGroup
     */
    public get parentSectionGroup() {
        return this._parentSectionGroup;
    };
    /**
     * Sets the parentSectionGroup property value. The section group that contains the section.  Read-only.
     * @param value Value to set for the parentSectionGroup property.
     */
    public set parentSectionGroup(value: SectionGroup | undefined) {
        this._parentSectionGroup = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeObjectValue<SectionLinks>("links", this.links);
        writer.writeCollectionOfObjectValues<OnenotePage>("pages", this.pages);
        writer.writeStringValue("pagesUrl", this.pagesUrl);
        writer.writeObjectValue<Notebook>("parentNotebook", this.parentNotebook);
        writer.writeObjectValue<SectionGroup>("parentSectionGroup", this.parentSectionGroup);
    };
}
