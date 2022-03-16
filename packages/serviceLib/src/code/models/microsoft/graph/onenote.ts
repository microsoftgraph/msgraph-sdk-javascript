import {createNotebookFromDiscriminatorValue} from './createNotebookFromDiscriminatorValue';
import {createOnenoteOperationFromDiscriminatorValue} from './createOnenoteOperationFromDiscriminatorValue';
import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {createOnenoteResourceFromDiscriminatorValue} from './createOnenoteResourceFromDiscriminatorValue';
import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {Entity, Notebook, OnenoteOperation, OnenotePage, OnenoteResource, OnenoteSection, SectionGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Onenote extends Entity implements Parsable {
    /** The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.  */
    private _notebooks?: Notebook[] | undefined;
    /** The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.  */
    private _operations?: OnenoteOperation[] | undefined;
    /** The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.  */
    private _pages?: OnenotePage[] | undefined;
    /** The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.  */
    private _resources?: OnenoteResource[] | undefined;
    /** The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.  */
    private _sectionGroups?: SectionGroup[] | undefined;
    /** The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.  */
    private _sections?: OnenoteSection[] | undefined;
    /**
     * Instantiates a new onenote and sets the default values.
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
            ["notebooks", (o, n) => { (o as unknown as Onenote).notebooks = n.getCollectionOfObjectValues<Notebook>(createNotebookFromDiscriminatorValue); }],
            ["operations", (o, n) => { (o as unknown as Onenote).operations = n.getCollectionOfObjectValues<OnenoteOperation>(createOnenoteOperationFromDiscriminatorValue); }],
            ["pages", (o, n) => { (o as unknown as Onenote).pages = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); }],
            ["resources", (o, n) => { (o as unknown as Onenote).resources = n.getCollectionOfObjectValues<OnenoteResource>(createOnenoteResourceFromDiscriminatorValue); }],
            ["sectionGroups", (o, n) => { (o as unknown as Onenote).sectionGroups = n.getCollectionOfObjectValues<SectionGroup>(createSectionGroupFromDiscriminatorValue); }],
            ["sections", (o, n) => { (o as unknown as Onenote).sections = n.getCollectionOfObjectValues<OnenoteSection>(createOnenoteSectionFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @returns a notebook
     */
    public get notebooks() {
        return this._notebooks;
    };
    /**
     * Sets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @param value Value to set for the notebooks property.
     */
    public set notebooks(value: Notebook[] | undefined) {
        this._notebooks = value;
    };
    /**
     * Gets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @returns a onenoteOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: OnenoteOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a onenotePage
     */
    public get pages() {
        return this._pages;
    };
    /**
     * Sets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param value Value to set for the pages property.
     */
    public set pages(value: OnenotePage[] | undefined) {
        this._pages = value;
    };
    /**
     * Gets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @returns a onenoteResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
     * @param value Value to set for the resources property.
     */
    public set resources(value: OnenoteResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Gets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a sectionGroup
     */
    public get sectionGroups() {
        return this._sectionGroups;
    };
    /**
     * Sets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param value Value to set for the sectionGroups property.
     */
    public set sectionGroups(value: SectionGroup[] | undefined) {
        this._sectionGroups = value;
    };
    /**
     * Gets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @returns a onenoteSection
     */
    public get sections() {
        return this._sections;
    };
    /**
     * Sets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
     * @param value Value to set for the sections property.
     */
    public set sections(value: OnenoteSection[] | undefined) {
        this._sections = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Notebook>("notebooks", this.notebooks);
        writer.writeCollectionOfObjectValues<OnenoteOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<OnenotePage>("pages", this.pages);
        writer.writeCollectionOfObjectValues<OnenoteResource>("resources", this.resources);
        writer.writeCollectionOfObjectValues<SectionGroup>("sectionGroups", this.sectionGroups);
        writer.writeCollectionOfObjectValues<OnenoteSection>("sections", this.sections);
    };
}
