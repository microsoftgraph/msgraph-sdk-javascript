import {AggregationOption, EntityType, ResultTemplateOption, SearchAlterationOptions, SearchQuery, SortProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchRequest implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.  */
    private _aggregationFilters?: string[] | undefined;
    /** Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.  */
    private _aggregations?: AggregationOption[] | undefined;
    /** Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.  */
    private _contentSources?: string[] | undefined;
    /** This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.  */
    private _enableTopResults?: boolean | undefined;
    /** One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.  */
    private _entityTypes?: EntityType[] | undefined;
    /** Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.  */
    private _fields?: string[] | undefined;
    /** Specifies the offset for the search results. Offset 0 returns the very first result. Optional.  */
    private _from?: number | undefined;
    private _query?: SearchQuery | undefined;
    /** Query alteration options formatted in a JSON blob that contains two optional flags related to spelling correction. Optional.  */
    private _queryAlterationOptions?: SearchAlterationOptions | undefined;
    /** Provides the search result templates options for rendering connectors search results.  */
    private _resultTemplateOptions?: ResultTemplateOption | undefined;
    /** The size of the page to be retrieved. Optional.  */
    private _size?: number | undefined;
    /** Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.  */
    private _sortProperties?: SortProperty[] | undefined;
    /**
     * Instantiates a new searchRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the aggregationFilters property value. Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.
     * @returns a string
     */
    public get aggregationFilters() {
        return this._aggregationFilters;
    };
    /**
     * Gets the aggregations property value. Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.
     * @returns a aggregationOption
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Gets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @returns a string
     */
    public get contentSources() {
        return this._contentSources;
    };
    /**
     * Gets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @returns a boolean
     */
    public get enableTopResults() {
        return this._enableTopResults;
    };
    /**
     * Gets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @returns a entityType
     */
    public get entityTypes() {
        return this._entityTypes;
    };
    /**
     * Gets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @returns a string
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Gets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @returns a integer
     */
    public get from() {
        return this._from;
    };
    /**
     * Gets the query property value. 
     * @returns a searchQuery
     */
    public get query() {
        return this._query;
    };
    /**
     * Gets the queryAlterationOptions property value. Query alteration options formatted in a JSON blob that contains two optional flags related to spelling correction. Optional.
     * @returns a searchAlterationOptions
     */
    public get queryAlterationOptions() {
        return this._queryAlterationOptions;
    };
    /**
     * Gets the resultTemplateOptions property value. Provides the search result templates options for rendering connectors search results.
     * @returns a resultTemplateOption
     */
    public get resultTemplateOptions() {
        return this._resultTemplateOptions;
    };
    /**
     * Gets the size property value. The size of the page to be retrieved. Optional.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Gets the sortProperties property value. Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.
     * @returns a sortProperty
     */
    public get sortProperties() {
        return this._sortProperties;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["aggregationFilters", (o, n) => { (o as unknown as SearchRequest).aggregationFilters = n.getCollectionOfPrimitiveValues<string>(); }],
            ["aggregations", (o, n) => { (o as unknown as SearchRequest).aggregations = n.getCollectionOfObjectValues<AggregationOption>(AggregationOption); }],
            ["contentSources", (o, n) => { (o as unknown as SearchRequest).contentSources = n.getCollectionOfPrimitiveValues<string>(); }],
            ["enableTopResults", (o, n) => { (o as unknown as SearchRequest).enableTopResults = n.getBooleanValue(); }],
            ["entityTypes", (o, n) => { (o as unknown as SearchRequest).entityTypes = n.getEnumValues<EntityType>(EntityType); }],
            ["fields", (o, n) => { (o as unknown as SearchRequest).fields = n.getCollectionOfPrimitiveValues<string>(); }],
            ["from", (o, n) => { (o as unknown as SearchRequest).from = n.getNumberValue(); }],
            ["query", (o, n) => { (o as unknown as SearchRequest).query = n.getObjectValue<SearchQuery>(SearchQuery); }],
            ["queryAlterationOptions", (o, n) => { (o as unknown as SearchRequest).queryAlterationOptions = n.getObjectValue<SearchAlterationOptions>(SearchAlterationOptions); }],
            ["resultTemplateOptions", (o, n) => { (o as unknown as SearchRequest).resultTemplateOptions = n.getObjectValue<ResultTemplateOption>(ResultTemplateOption); }],
            ["size", (o, n) => { (o as unknown as SearchRequest).size = n.getNumberValue(); }],
            ["sortProperties", (o, n) => { (o as unknown as SearchRequest).sortProperties = n.getCollectionOfObjectValues<SortProperty>(SortProperty); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("aggregationFilters", this.aggregationFilters);
        writer.writeCollectionOfObjectValues<AggregationOption>("aggregations", this.aggregations);
        writer.writeCollectionOfPrimitiveValues<string>("contentSources", this.contentSources);
        writer.writeBooleanValue("enableTopResults", this.enableTopResults);
        this.entityTypes && writer.writeEnumValue<EntityType>("entityTypes", ...this.entityTypes);
        writer.writeCollectionOfPrimitiveValues<string>("fields", this.fields);
        writer.writeNumberValue("from", this.from);
        writer.writeObjectValue<SearchQuery>("query", this.query);
        writer.writeObjectValue<SearchAlterationOptions>("queryAlterationOptions", this.queryAlterationOptions);
        writer.writeObjectValue<ResultTemplateOption>("resultTemplateOptions", this.resultTemplateOptions);
        writer.writeNumberValue("size", this.size);
        writer.writeCollectionOfObjectValues<SortProperty>("sortProperties", this.sortProperties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the aggregationFilters property value. Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.
     * @param value Value to set for the aggregationFilters property.
     */
    public set aggregationFilters(value: string[] | undefined) {
        this._aggregationFilters = value;
    };
    /**
     * Sets the aggregations property value. Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.
     * @param value Value to set for the aggregations property.
     */
    public set aggregations(value: AggregationOption[] | undefined) {
        this._aggregations = value;
    };
    /**
     * Sets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @param value Value to set for the contentSources property.
     */
    public set contentSources(value: string[] | undefined) {
        this._contentSources = value;
    };
    /**
     * Sets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @param value Value to set for the enableTopResults property.
     */
    public set enableTopResults(value: boolean | undefined) {
        this._enableTopResults = value;
    };
    /**
     * Sets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @param value Value to set for the entityTypes property.
     */
    public set entityTypes(value: EntityType[] | undefined) {
        this._entityTypes = value;
    };
    /**
     * Sets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @param value Value to set for the fields property.
     */
    public set fields(value: string[] | undefined) {
        this._fields = value;
    };
    /**
     * Sets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @param value Value to set for the from property.
     */
    public set from(value: number | undefined) {
        this._from = value;
    };
    /**
     * Sets the query property value. 
     * @param value Value to set for the query property.
     */
    public set query(value: SearchQuery | undefined) {
        this._query = value;
    };
    /**
     * Sets the queryAlterationOptions property value. Query alteration options formatted in a JSON blob that contains two optional flags related to spelling correction. Optional.
     * @param value Value to set for the queryAlterationOptions property.
     */
    public set queryAlterationOptions(value: SearchAlterationOptions | undefined) {
        this._queryAlterationOptions = value;
    };
    /**
     * Sets the resultTemplateOptions property value. Provides the search result templates options for rendering connectors search results.
     * @param value Value to set for the resultTemplateOptions property.
     */
    public set resultTemplateOptions(value: ResultTemplateOption | undefined) {
        this._resultTemplateOptions = value;
    };
    /**
     * Sets the size property value. The size of the page to be retrieved. Optional.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Sets the sortProperties property value. Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.
     * @param value Value to set for the sortProperties property.
     */
    public set sortProperties(value: SortProperty[] | undefined) {
        this._sortProperties = value;
    };
}
