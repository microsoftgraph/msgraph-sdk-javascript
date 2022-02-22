import {Prompt} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordResponseRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _bargeInAllowed?: boolean | undefined;
    private _clientContext?: string | undefined;
    private _initialSilenceTimeoutInSeconds?: number | undefined;
    private _maxRecordDurationInSeconds?: number | undefined;
    private _maxSilenceTimeoutInSeconds?: number | undefined;
    private _playBeep?: boolean | undefined;
    private _prompts?: Prompt[] | undefined;
    private _stopTones?: string[] | undefined;
    /**
     * Instantiates a new recordResponseRequestBody and sets the default values.
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
     * Gets the bargeInAllowed property value. 
     * @returns a boolean
     */
    public get bargeInAllowed() {
        return this._bargeInAllowed;
    };
    /**
     * Gets the clientContext property value. 
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Gets the initialSilenceTimeoutInSeconds property value. 
     * @returns a integer
     */
    public get initialSilenceTimeoutInSeconds() {
        return this._initialSilenceTimeoutInSeconds;
    };
    /**
     * Gets the maxRecordDurationInSeconds property value. 
     * @returns a integer
     */
    public get maxRecordDurationInSeconds() {
        return this._maxRecordDurationInSeconds;
    };
    /**
     * Gets the maxSilenceTimeoutInSeconds property value. 
     * @returns a integer
     */
    public get maxSilenceTimeoutInSeconds() {
        return this._maxSilenceTimeoutInSeconds;
    };
    /**
     * Gets the playBeep property value. 
     * @returns a boolean
     */
    public get playBeep() {
        return this._playBeep;
    };
    /**
     * Gets the prompts property value. 
     * @returns a prompt
     */
    public get prompts() {
        return this._prompts;
    };
    /**
     * Gets the stopTones property value. 
     * @returns a string
     */
    public get stopTones() {
        return this._stopTones;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bargeInAllowed", (o, n) => { (o as unknown as RecordResponseRequestBody).bargeInAllowed = n.getBooleanValue(); }],
            ["clientContext", (o, n) => { (o as unknown as RecordResponseRequestBody).clientContext = n.getStringValue(); }],
            ["initialSilenceTimeoutInSeconds", (o, n) => { (o as unknown as RecordResponseRequestBody).initialSilenceTimeoutInSeconds = n.getNumberValue(); }],
            ["maxRecordDurationInSeconds", (o, n) => { (o as unknown as RecordResponseRequestBody).maxRecordDurationInSeconds = n.getNumberValue(); }],
            ["maxSilenceTimeoutInSeconds", (o, n) => { (o as unknown as RecordResponseRequestBody).maxSilenceTimeoutInSeconds = n.getNumberValue(); }],
            ["playBeep", (o, n) => { (o as unknown as RecordResponseRequestBody).playBeep = n.getBooleanValue(); }],
            ["prompts", (o, n) => { (o as unknown as RecordResponseRequestBody).prompts = n.getCollectionOfObjectValues<Prompt>(Prompt); }],
            ["stopTones", (o, n) => { (o as unknown as RecordResponseRequestBody).stopTones = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("bargeInAllowed", this.bargeInAllowed);
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeNumberValue("initialSilenceTimeoutInSeconds", this.initialSilenceTimeoutInSeconds);
        writer.writeNumberValue("maxRecordDurationInSeconds", this.maxRecordDurationInSeconds);
        writer.writeNumberValue("maxSilenceTimeoutInSeconds", this.maxSilenceTimeoutInSeconds);
        writer.writeBooleanValue("playBeep", this.playBeep);
        writer.writeCollectionOfObjectValues<Prompt>("prompts", this.prompts);
        writer.writeCollectionOfPrimitiveValues<string>("stopTones", this.stopTones);
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
     * Sets the bargeInAllowed property value. 
     * @param value Value to set for the bargeInAllowed property.
     */
    public set bargeInAllowed(value: boolean | undefined) {
        this._bargeInAllowed = value;
    };
    /**
     * Sets the clientContext property value. 
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Sets the initialSilenceTimeoutInSeconds property value. 
     * @param value Value to set for the initialSilenceTimeoutInSeconds property.
     */
    public set initialSilenceTimeoutInSeconds(value: number | undefined) {
        this._initialSilenceTimeoutInSeconds = value;
    };
    /**
     * Sets the maxRecordDurationInSeconds property value. 
     * @param value Value to set for the maxRecordDurationInSeconds property.
     */
    public set maxRecordDurationInSeconds(value: number | undefined) {
        this._maxRecordDurationInSeconds = value;
    };
    /**
     * Sets the maxSilenceTimeoutInSeconds property value. 
     * @param value Value to set for the maxSilenceTimeoutInSeconds property.
     */
    public set maxSilenceTimeoutInSeconds(value: number | undefined) {
        this._maxSilenceTimeoutInSeconds = value;
    };
    /**
     * Sets the playBeep property value. 
     * @param value Value to set for the playBeep property.
     */
    public set playBeep(value: boolean | undefined) {
        this._playBeep = value;
    };
    /**
     * Sets the prompts property value. 
     * @param value Value to set for the prompts property.
     */
    public set prompts(value: Prompt[] | undefined) {
        this._prompts = value;
    };
    /**
     * Sets the stopTones property value. 
     * @param value Value to set for the stopTones property.
     */
    public set stopTones(value: string[] | undefined) {
        this._stopTones = value;
    };
}
