import {IncomingCallOptions, MediaConfig, Modality} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AnswerRequestBody implements Parsable {
    private _acceptedModalities?: Modality[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _callbackUri?: string | undefined;
    private _callOptions?: IncomingCallOptions | undefined;
    private _mediaConfig?: MediaConfig | undefined;
    private _participantCapacity?: number | undefined;
    /**
     * Instantiates a new answerRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the acceptedModalities property value. 
     * @returns a modality
     */
    public get acceptedModalities() {
        return this._acceptedModalities;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the callbackUri property value. 
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Gets the callOptions property value. 
     * @returns a incomingCallOptions
     */
    public get callOptions() {
        return this._callOptions;
    };
    /**
     * Gets the mediaConfig property value. 
     * @returns a mediaConfig
     */
    public get mediaConfig() {
        return this._mediaConfig;
    };
    /**
     * Gets the participantCapacity property value. 
     * @returns a integer
     */
    public get participantCapacity() {
        return this._participantCapacity;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["acceptedModalities", (o, n) => { (o as unknown as AnswerRequestBody).acceptedModalities = n.getEnumValues<Modality>(Modality); }],
            ["callbackUri", (o, n) => { (o as unknown as AnswerRequestBody).callbackUri = n.getStringValue(); }],
            ["callOptions", (o, n) => { (o as unknown as AnswerRequestBody).callOptions = n.getObjectValue<IncomingCallOptions>(IncomingCallOptions); }],
            ["mediaConfig", (o, n) => { (o as unknown as AnswerRequestBody).mediaConfig = n.getObjectValue<MediaConfig>(MediaConfig); }],
            ["participantCapacity", (o, n) => { (o as unknown as AnswerRequestBody).participantCapacity = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.acceptedModalities && writer.writeEnumValue<Modality>("acceptedModalities", ...this.acceptedModalities);
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeObjectValue<IncomingCallOptions>("callOptions", this.callOptions);
        writer.writeObjectValue<MediaConfig>("mediaConfig", this.mediaConfig);
        writer.writeNumberValue("participantCapacity", this.participantCapacity);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the acceptedModalities property value. 
     * @param value Value to set for the acceptedModalities property.
     */
    public set acceptedModalities(value: Modality[] | undefined) {
        this._acceptedModalities = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the callbackUri property value. 
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Sets the callOptions property value. 
     * @param value Value to set for the callOptions property.
     */
    public set callOptions(value: IncomingCallOptions | undefined) {
        this._callOptions = value;
    };
    /**
     * Sets the mediaConfig property value. 
     * @param value Value to set for the mediaConfig property.
     */
    public set mediaConfig(value: MediaConfig | undefined) {
        this._mediaConfig = value;
    };
    /**
     * Sets the participantCapacity property value. 
     * @param value Value to set for the participantCapacity property.
     */
    public set participantCapacity(value: number | undefined) {
        this._participantCapacity = value;
    };
}
