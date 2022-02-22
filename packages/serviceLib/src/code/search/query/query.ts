import {AlterationResponse} from '../../models/microsoft/graph/alterationResponse';
import {ResultTemplateDictionary} from '../../models/microsoft/graph/resultTemplateDictionary';
import {SearchHitsContainer} from '../../models/microsoft/graph/searchHitsContainer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Query implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A collection of search results.  */
    private _hitsContainers?: SearchHitsContainer[] | undefined;
    /** Provides information related to spelling corrections in the alteration response.  */
    private _queryAlterationResponse?: AlterationResponse | undefined;
    /** A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.  */
    private _resultTemplates?: ResultTemplateDictionary | undefined;
    /** Contains the search terms sent in the initial search query.  */
    private _searchTerms?: string[] | undefined;
    /**
     * Instantiates a new query and sets the default values.
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
     * Gets the hitsContainers property value. A collection of search results.
     * @returns a searchHitsContainer
     */
    public get hitsContainers() {
        return this._hitsContainers;
    };
    /**
     * Gets the queryAlterationResponse property value. Provides information related to spelling corrections in the alteration response.
     * @returns a alterationResponse
     */
    public get queryAlterationResponse() {
        return this._queryAlterationResponse;
    };
    /**
     * Gets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @returns a resultTemplateDictionary
     */
    public get resultTemplates() {
        return this._resultTemplates;
    };
    /**
     * Gets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @returns a string
     */
    public get searchTerms() {
        return this._searchTerms;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["hitsContainers", (o, n) => { (o as unknown as Query).hitsContainers = n.getCollectionOfObjectValues<SearchHitsContainer>(SearchHitsContainer); }],
            ["queryAlterationResponse", (o, n) => { (o as unknown as Query).queryAlterationResponse = n.getObjectValue<AlterationResponse>(AlterationResponse); }],
            ["resultTemplates", (o, n) => { (o as unknown as Query).resultTemplates = n.getObjectValue<ResultTemplateDictionary>(ResultTemplateDictionary); }],
            ["searchTerms", (o, n) => { (o as unknown as Query).searchTerms = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchHitsContainer>("hitsContainers", this.hitsContainers);
        writer.writeObjectValue<AlterationResponse>("queryAlterationResponse", this.queryAlterationResponse);
        writer.writeObjectValue<ResultTemplateDictionary>("resultTemplates", this.resultTemplates);
        writer.writeCollectionOfPrimitiveValues<string>("searchTerms", this.searchTerms);
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
     * Sets the hitsContainers property value. A collection of search results.
     * @param value Value to set for the hitsContainers property.
     */
    public set hitsContainers(value: SearchHitsContainer[] | undefined) {
        this._hitsContainers = value;
    };
    /**
     * Sets the queryAlterationResponse property value. Provides information related to spelling corrections in the alteration response.
     * @param value Value to set for the queryAlterationResponse property.
     */
    public set queryAlterationResponse(value: AlterationResponse | undefined) {
        this._queryAlterationResponse = value;
    };
    /**
     * Sets the resultTemplates property value. A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     * @param value Value to set for the resultTemplates property.
     */
    public set resultTemplates(value: ResultTemplateDictionary | undefined) {
        this._resultTemplates = value;
    };
    /**
     * Sets the searchTerms property value. Contains the search terms sent in the initial search query.
     * @param value Value to set for the searchTerms property.
     */
    public set searchTerms(value: string[] | undefined) {
        this._searchTerms = value;
    };
}
