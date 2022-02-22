import {AlteredQueryToken} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAlteration implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is: /ue000, /ue001.  */
    private _alteredHighlightedQueryString?: string | undefined;
    /** Defines the altered query string with spelling correction.  */
    private _alteredQueryString?: string | undefined;
    /** Represents changed segments related to an original user query.  */
    private _alteredQueryTokens?: AlteredQueryToken[] | undefined;
    /**
     * Instantiates a new searchAlteration and sets the default values.
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
     * Gets the alteredHighlightedQueryString property value. Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is: /ue000, /ue001.
     * @returns a string
     */
    public get alteredHighlightedQueryString() {
        return this._alteredHighlightedQueryString;
    };
    /**
     * Gets the alteredQueryString property value. Defines the altered query string with spelling correction.
     * @returns a string
     */
    public get alteredQueryString() {
        return this._alteredQueryString;
    };
    /**
     * Gets the alteredQueryTokens property value. Represents changed segments related to an original user query.
     * @returns a alteredQueryToken
     */
    public get alteredQueryTokens() {
        return this._alteredQueryTokens;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["alteredHighlightedQueryString", (o, n) => { (o as unknown as SearchAlteration).alteredHighlightedQueryString = n.getStringValue(); }],
            ["alteredQueryString", (o, n) => { (o as unknown as SearchAlteration).alteredQueryString = n.getStringValue(); }],
            ["alteredQueryTokens", (o, n) => { (o as unknown as SearchAlteration).alteredQueryTokens = n.getCollectionOfObjectValues<AlteredQueryToken>(AlteredQueryToken); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("alteredHighlightedQueryString", this.alteredHighlightedQueryString);
        writer.writeStringValue("alteredQueryString", this.alteredQueryString);
        writer.writeCollectionOfObjectValues<AlteredQueryToken>("alteredQueryTokens", this.alteredQueryTokens);
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
     * Sets the alteredHighlightedQueryString property value. Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is: /ue000, /ue001.
     * @param value Value to set for the alteredHighlightedQueryString property.
     */
    public set alteredHighlightedQueryString(value: string | undefined) {
        this._alteredHighlightedQueryString = value;
    };
    /**
     * Sets the alteredQueryString property value. Defines the altered query string with spelling correction.
     * @param value Value to set for the alteredQueryString property.
     */
    public set alteredQueryString(value: string | undefined) {
        this._alteredQueryString = value;
    };
    /**
     * Sets the alteredQueryTokens property value. Represents changed segments related to an original user query.
     * @param value Value to set for the alteredQueryTokens property.
     */
    public set alteredQueryTokens(value: AlteredQueryToken[] | undefined) {
        this._alteredQueryTokens = value;
    };
}
