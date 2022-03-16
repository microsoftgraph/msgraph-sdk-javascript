import {Label} from './label';
import {PropertyType} from './propertyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Property implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A set of aliases or a friendly names for the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^. Optional.  */
    private _aliases?: string[] | undefined;
    /** Specifies if the property is queryable. Queryable properties can be used in Keyword Query Language (KQL) queries. Optional.  */
    private _isQueryable?: boolean | undefined;
    /** Specifies if the property is refinable.  Refinable properties can be used to filter search results in the Search API and add a refiner control in the Microsoft Search user experience. Optional.  */
    private _isRefinable?: boolean | undefined;
    /** Specifies if the property is retrievable. Retrievable properties are returned in the result set when items are returned by the search API. Retrievable properties are also available to add to the display template used to render search results. Optional.  */
    private _isRetrievable?: boolean | undefined;
    /** Specifies if the property is searchable. Only properties of type String or StringCollection can be searchable. Non-searchable properties are not added to the search index. Optional.  */
    private _isSearchable?: boolean | undefined;
    /** Specifies one or more well-known tags added against a property. Labels help Microsoft Search understand the semantics of the data in the connection. Adding appropriate labels would result in an enhanced search experience (e.g. better relevance). The possible values are: title, url, createdBy, lastModifiedBy, authors, createdDateTime, lastModifiedDateTime, fileName, fileExtension, unknownFutureValue. Optional.  */
    private _labels?: Label[] | undefined;
    /** The name of the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^.  Required.  */
    private _name?: string | undefined;
    /** The data type of the property. Possible values are: string, int64, double, dateTime, boolean, stringCollection, int64Collection, doubleCollection, dateTimeCollection, unknownFutureValue.  */
    private _type?: PropertyType | undefined;
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
     * Gets the aliases property value. A set of aliases or a friendly names for the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^. Optional.
     * @returns a string
     */
    public get aliases() {
        return this._aliases;
    };
    /**
     * Sets the aliases property value. A set of aliases or a friendly names for the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^. Optional.
     * @param value Value to set for the aliases property.
     */
    public set aliases(value: string[] | undefined) {
        this._aliases = value;
    };
    /**
     * Instantiates a new property and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["aliases", (o, n) => { (o as unknown as Property).aliases = n.getCollectionOfPrimitiveValues<string>(); }],
            ["isQueryable", (o, n) => { (o as unknown as Property).isQueryable = n.getBooleanValue(); }],
            ["isRefinable", (o, n) => { (o as unknown as Property).isRefinable = n.getBooleanValue(); }],
            ["isRetrievable", (o, n) => { (o as unknown as Property).isRetrievable = n.getBooleanValue(); }],
            ["isSearchable", (o, n) => { (o as unknown as Property).isSearchable = n.getBooleanValue(); }],
            ["labels", (o, n) => { (o as unknown as Property).labels = n.getEnumValues<Label>(Label); }],
            ["name", (o, n) => { (o as unknown as Property).name = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as Property).type = n.getEnumValue<PropertyType>(PropertyType); }],
        ]);
    };
    /**
     * Gets the isQueryable property value. Specifies if the property is queryable. Queryable properties can be used in Keyword Query Language (KQL) queries. Optional.
     * @returns a boolean
     */
    public get isQueryable() {
        return this._isQueryable;
    };
    /**
     * Sets the isQueryable property value. Specifies if the property is queryable. Queryable properties can be used in Keyword Query Language (KQL) queries. Optional.
     * @param value Value to set for the isQueryable property.
     */
    public set isQueryable(value: boolean | undefined) {
        this._isQueryable = value;
    };
    /**
     * Gets the isRefinable property value. Specifies if the property is refinable.  Refinable properties can be used to filter search results in the Search API and add a refiner control in the Microsoft Search user experience. Optional.
     * @returns a boolean
     */
    public get isRefinable() {
        return this._isRefinable;
    };
    /**
     * Sets the isRefinable property value. Specifies if the property is refinable.  Refinable properties can be used to filter search results in the Search API and add a refiner control in the Microsoft Search user experience. Optional.
     * @param value Value to set for the isRefinable property.
     */
    public set isRefinable(value: boolean | undefined) {
        this._isRefinable = value;
    };
    /**
     * Gets the isRetrievable property value. Specifies if the property is retrievable. Retrievable properties are returned in the result set when items are returned by the search API. Retrievable properties are also available to add to the display template used to render search results. Optional.
     * @returns a boolean
     */
    public get isRetrievable() {
        return this._isRetrievable;
    };
    /**
     * Sets the isRetrievable property value. Specifies if the property is retrievable. Retrievable properties are returned in the result set when items are returned by the search API. Retrievable properties are also available to add to the display template used to render search results. Optional.
     * @param value Value to set for the isRetrievable property.
     */
    public set isRetrievable(value: boolean | undefined) {
        this._isRetrievable = value;
    };
    /**
     * Gets the isSearchable property value. Specifies if the property is searchable. Only properties of type String or StringCollection can be searchable. Non-searchable properties are not added to the search index. Optional.
     * @returns a boolean
     */
    public get isSearchable() {
        return this._isSearchable;
    };
    /**
     * Sets the isSearchable property value. Specifies if the property is searchable. Only properties of type String or StringCollection can be searchable. Non-searchable properties are not added to the search index. Optional.
     * @param value Value to set for the isSearchable property.
     */
    public set isSearchable(value: boolean | undefined) {
        this._isSearchable = value;
    };
    /**
     * Gets the labels property value. Specifies one or more well-known tags added against a property. Labels help Microsoft Search understand the semantics of the data in the connection. Adding appropriate labels would result in an enhanced search experience (e.g. better relevance). The possible values are: title, url, createdBy, lastModifiedBy, authors, createdDateTime, lastModifiedDateTime, fileName, fileExtension, unknownFutureValue. Optional.
     * @returns a label
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. Specifies one or more well-known tags added against a property. Labels help Microsoft Search understand the semantics of the data in the connection. Adding appropriate labels would result in an enhanced search experience (e.g. better relevance). The possible values are: title, url, createdBy, lastModifiedBy, authors, createdDateTime, lastModifiedDateTime, fileName, fileExtension, unknownFutureValue. Optional.
     * @param value Value to set for the labels property.
     */
    public set labels(value: Label[] | undefined) {
        this._labels = value;
    };
    /**
     * Gets the name property value. The name of the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^.  Required.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^.  Required.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("aliases", this.aliases);
        writer.writeBooleanValue("isQueryable", this.isQueryable);
        writer.writeBooleanValue("isRefinable", this.isRefinable);
        writer.writeBooleanValue("isRetrievable", this.isRetrievable);
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        this.labels && writer.writeEnumValue<Label>("labels", ...this.labels);
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<PropertyType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The data type of the property. Possible values are: string, int64, double, dateTime, boolean, stringCollection, int64Collection, doubleCollection, dateTimeCollection, unknownFutureValue.
     * @returns a propertyType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The data type of the property. Possible values are: string, int64, double, dateTime, boolean, stringCollection, int64Collection, doubleCollection, dateTimeCollection, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: PropertyType | undefined) {
        this._type = value;
    };
}
