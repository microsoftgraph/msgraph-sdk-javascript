import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScoredEmailAddress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The email address.  */
    private _address?: string | undefined;
    private _itemId?: string | undefined;
    /** The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.  */
    private _relevanceScore?: number | undefined;
    private _selectionLikelihood?: SelectionLikelihoodInfo | undefined;
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
     * Gets the address property value. The email address.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new scoredEmailAddress and sets the default values.
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
            ["address", (o, n) => { (o as unknown as ScoredEmailAddress).address = n.getStringValue(); }],
            ["itemId", (o, n) => { (o as unknown as ScoredEmailAddress).itemId = n.getStringValue(); }],
            ["relevanceScore", (o, n) => { (o as unknown as ScoredEmailAddress).relevanceScore = n.getNumberValue(); }],
            ["selectionLikelihood", (o, n) => { (o as unknown as ScoredEmailAddress).selectionLikelihood = n.getEnumValue<SelectionLikelihoodInfo>(SelectionLikelihoodInfo); }],
        ]);
    };
    /**
     * Gets the itemId property value. 
     * @returns a string
     */
    public get itemId() {
        return this._itemId;
    };
    /**
     * Sets the itemId property value. 
     * @param value Value to set for the itemId property.
     */
    public set itemId(value: string | undefined) {
        this._itemId = value;
    };
    /**
     * Gets the relevanceScore property value. The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.
     * @returns a double
     */
    public get relevanceScore() {
        return this._relevanceScore;
    };
    /**
     * Sets the relevanceScore property value. The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.
     * @param value Value to set for the relevanceScore property.
     */
    public set relevanceScore(value: number | undefined) {
        this._relevanceScore = value;
    };
    /**
     * Gets the selectionLikelihood property value. 
     * @returns a selectionLikelihoodInfo
     */
    public get selectionLikelihood() {
        return this._selectionLikelihood;
    };
    /**
     * Sets the selectionLikelihood property value. 
     * @param value Value to set for the selectionLikelihood property.
     */
    public set selectionLikelihood(value: SelectionLikelihoodInfo | undefined) {
        this._selectionLikelihood = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("itemId", this.itemId);
        writer.writeNumberValue("relevanceScore", this.relevanceScore);
        writer.writeEnumValue<SelectionLikelihoodInfo>("selectionLikelihood", this.selectionLikelihood);
        writer.writeAdditionalData(this.additionalData);
    };
}
