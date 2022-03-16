import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPresence method.  */
export class SetPresenceRequestBody implements AdditionalDataHolder, Parsable {
    private _activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _availability?: string | undefined;
    private _expirationDuration?: Duration | undefined;
    private _sessionId?: string | undefined;
    /**
     * Gets the activity property value. 
     * @returns a string
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. 
     * @param value Value to set for the activity property.
     */
    public set activity(value: string | undefined) {
        this._activity = value;
    };
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
     * Gets the availability property value. 
     * @returns a string
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. 
     * @param value Value to set for the availability property.
     */
    public set availability(value: string | undefined) {
        this._availability = value;
    };
    /**
     * Instantiates a new setPresenceRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the expirationDuration property value. 
     * @returns a Duration
     */
    public get expirationDuration() {
        return this._expirationDuration;
    };
    /**
     * Sets the expirationDuration property value. 
     * @param value Value to set for the expirationDuration property.
     */
    public set expirationDuration(value: Duration | undefined) {
        this._expirationDuration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["activity", (o, n) => { (o as unknown as SetPresenceRequestBody).activity = n.getStringValue(); }],
            ["availability", (o, n) => { (o as unknown as SetPresenceRequestBody).availability = n.getStringValue(); }],
            ["expirationDuration", (o, n) => { (o as unknown as SetPresenceRequestBody).expirationDuration = n.getDurationValue(); }],
            ["sessionId", (o, n) => { (o as unknown as SetPresenceRequestBody).sessionId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activity", this.activity);
        writer.writeStringValue("availability", this.availability);
        writer.writeDurationValue("expirationDuration", this.expirationDuration);
        writer.writeStringValue("sessionId", this.sessionId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sessionId property value. 
     * @returns a string
     */
    public get sessionId() {
        return this._sessionId;
    };
    /**
     * Sets the sessionId property value. 
     * @param value Value to set for the sessionId property.
     */
    public set sessionId(value: string | undefined) {
        this._sessionId = value;
    };
}
