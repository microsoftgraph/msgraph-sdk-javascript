import {ColumnDefinition, ColumnLink, ContentTypeOrder, DocumentSet, DocumentSetContent, Entity, ItemReference} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentType extends Entity implements Parsable {
    /** List of canonical URLs for hub sites with which this content type is associated to. This will contain all hub sites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.  */
    private _associatedHubsUrls?: string[] | undefined;
    /** Parent contentType from which this content type is derived.  */
    private _base?: ContentType | undefined;
    /** The collection of content types that are ancestors of this content type.  */
    private _baseTypes?: ContentType[] | undefined;
    /** The collection of columns that are required by this content type.  */
    private _columnLinks?: ColumnLink[] | undefined;
    /** Column order information in a content type.  */
    private _columnPositions?: ColumnDefinition[] | undefined;
    /** The collection of column definitions for this contentType.  */
    private _columns?: ColumnDefinition[] | undefined;
    /** The descriptive text for the item.  */
    private _description?: string | undefined;
    /** Document Set metadata.  */
    private _documentSet?: DocumentSet | undefined;
    /** Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.  */
    private _documentTemplate?: DocumentSetContent | undefined;
    /** The name of the group this content type belongs to. Helps organize related content types.  */
    private _group?: string | undefined;
    /** Indicates whether the content type is hidden in the list's 'New' menu.  */
    private _hidden?: boolean | undefined;
    /** If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.  */
    private _inheritedFrom?: ItemReference | undefined;
    /** Specifies if a content type is a built-in content type.  */
    private _isBuiltIn?: boolean | undefined;
    /** The name of the content type.  */
    private _name?: string | undefined;
    /** Specifies the order in which the content type appears in the selection UI.  */
    private _order?: ContentTypeOrder | undefined;
    /** The unique identifier of the content type.  */
    private _parentId?: string | undefined;
    /** If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.  */
    private _propagateChanges?: boolean | undefined;
    /** If true, the content type can't be modified unless this value is first set to false.  */
    private _readOnly?: boolean | undefined;
    /** If true, the content type can't be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.  */
    private _sealed?: boolean | undefined;
    /**
     * Instantiates a new contentType and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the associatedHubsUrls property value. List of canonical URLs for hub sites with which this content type is associated to. This will contain all hub sites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.
     * @returns a string
     */
    public get associatedHubsUrls() {
        return this._associatedHubsUrls;
    };
    /**
     * Gets the base property value. Parent contentType from which this content type is derived.
     * @returns a contentType
     */
    public get base() {
        return this._base;
    };
    /**
     * Gets the baseTypes property value. The collection of content types that are ancestors of this content type.
     * @returns a contentType
     */
    public get baseTypes() {
        return this._baseTypes;
    };
    /**
     * Gets the columnLinks property value. The collection of columns that are required by this content type.
     * @returns a columnLink
     */
    public get columnLinks() {
        return this._columnLinks;
    };
    /**
     * Gets the columnPositions property value. Column order information in a content type.
     * @returns a columnDefinition
     */
    public get columnPositions() {
        return this._columnPositions;
    };
    /**
     * Gets the columns property value. The collection of column definitions for this contentType.
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Gets the description property value. The descriptive text for the item.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the documentSet property value. Document Set metadata.
     * @returns a documentSet
     */
    public get documentSet() {
        return this._documentSet;
    };
    /**
     * Gets the documentTemplate property value. Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.
     * @returns a documentSetContent
     */
    public get documentTemplate() {
        return this._documentTemplate;
    };
    /**
     * Gets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @returns a string
     */
    public get group() {
        return this._group;
    };
    /**
     * Gets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @returns a itemReference
     */
    public get inheritedFrom() {
        return this._inheritedFrom;
    };
    /**
     * Gets the isBuiltIn property value. Specifies if a content type is a built-in content type.
     * @returns a boolean
     */
    public get isBuiltIn() {
        return this._isBuiltIn;
    };
    /**
     * Gets the name property value. The name of the content type.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @returns a contentTypeOrder
     */
    public get order() {
        return this._order;
    };
    /**
     * Gets the parentId property value. The unique identifier of the content type.
     * @returns a string
     */
    public get parentId() {
        return this._parentId;
    };
    /**
     * Gets the propagateChanges property value. If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.
     * @returns a boolean
     */
    public get propagateChanges() {
        return this._propagateChanges;
    };
    /**
     * Gets the readOnly property value. If true, the content type can't be modified unless this value is first set to false.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Gets the sealed property value. If true, the content type can't be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @returns a boolean
     */
    public get sealed() {
        return this._sealed;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["associatedHubsUrls", (o, n) => { (o as unknown as ContentType).associatedHubsUrls = n.getCollectionOfPrimitiveValues<string>(); }],
            ["base", (o, n) => { (o as unknown as ContentType).base = n.getObjectValue<ContentType>(ContentType); }],
            ["baseTypes", (o, n) => { (o as unknown as ContentType).baseTypes = n.getCollectionOfObjectValues<ContentType>(ContentType); }],
            ["columnLinks", (o, n) => { (o as unknown as ContentType).columnLinks = n.getCollectionOfObjectValues<ColumnLink>(ColumnLink); }],
            ["columnPositions", (o, n) => { (o as unknown as ContentType).columnPositions = n.getCollectionOfObjectValues<ColumnDefinition>(ColumnDefinition); }],
            ["columns", (o, n) => { (o as unknown as ContentType).columns = n.getCollectionOfObjectValues<ColumnDefinition>(ColumnDefinition); }],
            ["description", (o, n) => { (o as unknown as ContentType).description = n.getStringValue(); }],
            ["documentSet", (o, n) => { (o as unknown as ContentType).documentSet = n.getObjectValue<DocumentSet>(DocumentSet); }],
            ["documentTemplate", (o, n) => { (o as unknown as ContentType).documentTemplate = n.getObjectValue<DocumentSetContent>(DocumentSetContent); }],
            ["group", (o, n) => { (o as unknown as ContentType).group = n.getStringValue(); }],
            ["hidden", (o, n) => { (o as unknown as ContentType).hidden = n.getBooleanValue(); }],
            ["inheritedFrom", (o, n) => { (o as unknown as ContentType).inheritedFrom = n.getObjectValue<ItemReference>(ItemReference); }],
            ["isBuiltIn", (o, n) => { (o as unknown as ContentType).isBuiltIn = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as ContentType).name = n.getStringValue(); }],
            ["order", (o, n) => { (o as unknown as ContentType).order = n.getObjectValue<ContentTypeOrder>(ContentTypeOrder); }],
            ["parentId", (o, n) => { (o as unknown as ContentType).parentId = n.getStringValue(); }],
            ["propagateChanges", (o, n) => { (o as unknown as ContentType).propagateChanges = n.getBooleanValue(); }],
            ["readOnly", (o, n) => { (o as unknown as ContentType).readOnly = n.getBooleanValue(); }],
            ["sealed", (o, n) => { (o as unknown as ContentType).sealed = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("associatedHubsUrls", this.associatedHubsUrls);
        writer.writeObjectValue<ContentType>("base", this.base);
        writer.writeCollectionOfObjectValues<ContentType>("baseTypes", this.baseTypes);
        writer.writeCollectionOfObjectValues<ColumnLink>("columnLinks", this.columnLinks);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columnPositions", this.columnPositions);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", this.columns);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<DocumentSet>("documentSet", this.documentSet);
        writer.writeObjectValue<DocumentSetContent>("documentTemplate", this.documentTemplate);
        writer.writeStringValue("group", this.group);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<ItemReference>("inheritedFrom", this.inheritedFrom);
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<ContentTypeOrder>("order", this.order);
        writer.writeStringValue("parentId", this.parentId);
        writer.writeBooleanValue("propagateChanges", this.propagateChanges);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("sealed", this.sealed);
    };
    /**
     * Sets the associatedHubsUrls property value. List of canonical URLs for hub sites with which this content type is associated to. This will contain all hub sites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.
     * @param value Value to set for the associatedHubsUrls property.
     */
    public set associatedHubsUrls(value: string[] | undefined) {
        this._associatedHubsUrls = value;
    };
    /**
     * Sets the base property value. Parent contentType from which this content type is derived.
     * @param value Value to set for the base property.
     */
    public set base(value: ContentType | undefined) {
        this._base = value;
    };
    /**
     * Sets the baseTypes property value. The collection of content types that are ancestors of this content type.
     * @param value Value to set for the baseTypes property.
     */
    public set baseTypes(value: ContentType[] | undefined) {
        this._baseTypes = value;
    };
    /**
     * Sets the columnLinks property value. The collection of columns that are required by this content type.
     * @param value Value to set for the columnLinks property.
     */
    public set columnLinks(value: ColumnLink[] | undefined) {
        this._columnLinks = value;
    };
    /**
     * Sets the columnPositions property value. Column order information in a content type.
     * @param value Value to set for the columnPositions property.
     */
    public set columnPositions(value: ColumnDefinition[] | undefined) {
        this._columnPositions = value;
    };
    /**
     * Sets the columns property value. The collection of column definitions for this contentType.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Sets the description property value. The descriptive text for the item.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the documentSet property value. Document Set metadata.
     * @param value Value to set for the documentSet property.
     */
    public set documentSet(value: DocumentSet | undefined) {
        this._documentSet = value;
    };
    /**
     * Sets the documentTemplate property value. Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.
     * @param value Value to set for the documentTemplate property.
     */
    public set documentTemplate(value: DocumentSetContent | undefined) {
        this._documentTemplate = value;
    };
    /**
     * Sets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @param value Value to set for the group property.
     */
    public set group(value: string | undefined) {
        this._group = value;
    };
    /**
     * Sets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @param value Value to set for the inheritedFrom property.
     */
    public set inheritedFrom(value: ItemReference | undefined) {
        this._inheritedFrom = value;
    };
    /**
     * Sets the isBuiltIn property value. Specifies if a content type is a built-in content type.
     * @param value Value to set for the isBuiltIn property.
     */
    public set isBuiltIn(value: boolean | undefined) {
        this._isBuiltIn = value;
    };
    /**
     * Sets the name property value. The name of the content type.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @param value Value to set for the order property.
     */
    public set order(value: ContentTypeOrder | undefined) {
        this._order = value;
    };
    /**
     * Sets the parentId property value. The unique identifier of the content type.
     * @param value Value to set for the parentId property.
     */
    public set parentId(value: string | undefined) {
        this._parentId = value;
    };
    /**
     * Sets the propagateChanges property value. If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.
     * @param value Value to set for the propagateChanges property.
     */
    public set propagateChanges(value: boolean | undefined) {
        this._propagateChanges = value;
    };
    /**
     * Sets the readOnly property value. If true, the content type can't be modified unless this value is first set to false.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        this._readOnly = value;
    };
    /**
     * Sets the sealed property value. If true, the content type can't be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @param value Value to set for the sealed property.
     */
    public set sealed(value: boolean | undefined) {
        this._sealed = value;
    };
}
