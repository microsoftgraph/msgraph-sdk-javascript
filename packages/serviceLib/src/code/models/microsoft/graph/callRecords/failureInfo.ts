import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FailureInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Classification of why a call or portion of a call failed.  */
    private _reason?: string | undefined;
    /** The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.  */
    private _stage?: FailureStage | undefined;
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
     * Instantiates a new failureInfo and sets the default values.
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
            ["reason", (o, n) => { (o as unknown as FailureInfo).reason = n.getStringValue(); }],
            ["stage", (o, n) => { (o as unknown as FailureInfo).stage = n.getEnumValue<FailureStage>(FailureStage); }],
        ]);
    };
    /**
     * Gets the reason property value. Classification of why a call or portion of a call failed.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Classification of why a call or portion of a call failed.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("reason", this.reason);
        writer.writeEnumValue<FailureStage>("stage", this.stage);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stage property value. The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.
     * @returns a failureStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: FailureStage | undefined) {
        this._stage = value;
    };
}
