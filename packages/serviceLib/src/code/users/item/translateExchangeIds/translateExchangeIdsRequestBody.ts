import {ExchangeIdFormat} from '../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TranslateExchangeIdsRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _inputIds?: string[] | undefined;
    private _sourceIdType?: ExchangeIdFormat | undefined;
    private _targetIdType?: ExchangeIdFormat | undefined;
    /**
     * Instantiates a new translateExchangeIdsRequestBody and sets the default values.
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
     * Gets the inputIds property value. 
     * @returns a string
     */
    public get inputIds() {
        return this._inputIds;
    };
    /**
     * Gets the sourceIdType property value. 
     * @returns a exchangeIdFormat
     */
    public get sourceIdType() {
        return this._sourceIdType;
    };
    /**
     * Gets the targetIdType property value. 
     * @returns a exchangeIdFormat
     */
    public get targetIdType() {
        return this._targetIdType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["inputIds", (o, n) => { (o as unknown as TranslateExchangeIdsRequestBody).inputIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["sourceIdType", (o, n) => { (o as unknown as TranslateExchangeIdsRequestBody).sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); }],
            ["targetIdType", (o, n) => { (o as unknown as TranslateExchangeIdsRequestBody).targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", this.inputIds);
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", this.sourceIdType);
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", this.targetIdType);
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
     * Sets the inputIds property value. 
     * @param value Value to set for the InputIds property.
     */
    public set inputIds(value: string[] | undefined) {
        this._inputIds = value;
    };
    /**
     * Sets the sourceIdType property value. 
     * @param value Value to set for the SourceIdType property.
     */
    public set sourceIdType(value: ExchangeIdFormat | undefined) {
        this._sourceIdType = value;
    };
    /**
     * Sets the targetIdType property value. 
     * @param value Value to set for the TargetIdType property.
     */
    public set targetIdType(value: ExchangeIdFormat | undefined) {
        this._targetIdType = value;
    };
}
