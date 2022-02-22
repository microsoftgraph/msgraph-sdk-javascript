import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageSecurityState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _connectingIP?: string | undefined;
    private _deliveryAction?: string | undefined;
    private _deliveryLocation?: string | undefined;
    private _directionality?: string | undefined;
    private _internetMessageId?: string | undefined;
    private _messageFingerprint?: string | undefined;
    private _messageReceivedDateTime?: Date | undefined;
    private _messageSubject?: string | undefined;
    private _networkMessageId?: string | undefined;
    /**
     * Instantiates a new messageSecurityState and sets the default values.
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
     * Gets the connectingIP property value. 
     * @returns a string
     */
    public get connectingIP() {
        return this._connectingIP;
    };
    /**
     * Gets the deliveryAction property value. 
     * @returns a string
     */
    public get deliveryAction() {
        return this._deliveryAction;
    };
    /**
     * Gets the deliveryLocation property value. 
     * @returns a string
     */
    public get deliveryLocation() {
        return this._deliveryLocation;
    };
    /**
     * Gets the directionality property value. 
     * @returns a string
     */
    public get directionality() {
        return this._directionality;
    };
    /**
     * Gets the internetMessageId property value. 
     * @returns a string
     */
    public get internetMessageId() {
        return this._internetMessageId;
    };
    /**
     * Gets the messageFingerprint property value. 
     * @returns a string
     */
    public get messageFingerprint() {
        return this._messageFingerprint;
    };
    /**
     * Gets the messageReceivedDateTime property value. 
     * @returns a Date
     */
    public get messageReceivedDateTime() {
        return this._messageReceivedDateTime;
    };
    /**
     * Gets the messageSubject property value. 
     * @returns a string
     */
    public get messageSubject() {
        return this._messageSubject;
    };
    /**
     * Gets the networkMessageId property value. 
     * @returns a string
     */
    public get networkMessageId() {
        return this._networkMessageId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["connectingIP", (o, n) => { (o as unknown as MessageSecurityState).connectingIP = n.getStringValue(); }],
            ["deliveryAction", (o, n) => { (o as unknown as MessageSecurityState).deliveryAction = n.getStringValue(); }],
            ["deliveryLocation", (o, n) => { (o as unknown as MessageSecurityState).deliveryLocation = n.getStringValue(); }],
            ["directionality", (o, n) => { (o as unknown as MessageSecurityState).directionality = n.getStringValue(); }],
            ["internetMessageId", (o, n) => { (o as unknown as MessageSecurityState).internetMessageId = n.getStringValue(); }],
            ["messageFingerprint", (o, n) => { (o as unknown as MessageSecurityState).messageFingerprint = n.getStringValue(); }],
            ["messageReceivedDateTime", (o, n) => { (o as unknown as MessageSecurityState).messageReceivedDateTime = n.getDateValue(); }],
            ["messageSubject", (o, n) => { (o as unknown as MessageSecurityState).messageSubject = n.getStringValue(); }],
            ["networkMessageId", (o, n) => { (o as unknown as MessageSecurityState).networkMessageId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("connectingIP", this.connectingIP);
        writer.writeStringValue("deliveryAction", this.deliveryAction);
        writer.writeStringValue("deliveryLocation", this.deliveryLocation);
        writer.writeStringValue("directionality", this.directionality);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeStringValue("messageFingerprint", this.messageFingerprint);
        writer.writeDateValue("messageReceivedDateTime", this.messageReceivedDateTime);
        writer.writeStringValue("messageSubject", this.messageSubject);
        writer.writeStringValue("networkMessageId", this.networkMessageId);
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
     * Sets the connectingIP property value. 
     * @param value Value to set for the connectingIP property.
     */
    public set connectingIP(value: string | undefined) {
        this._connectingIP = value;
    };
    /**
     * Sets the deliveryAction property value. 
     * @param value Value to set for the deliveryAction property.
     */
    public set deliveryAction(value: string | undefined) {
        this._deliveryAction = value;
    };
    /**
     * Sets the deliveryLocation property value. 
     * @param value Value to set for the deliveryLocation property.
     */
    public set deliveryLocation(value: string | undefined) {
        this._deliveryLocation = value;
    };
    /**
     * Sets the directionality property value. 
     * @param value Value to set for the directionality property.
     */
    public set directionality(value: string | undefined) {
        this._directionality = value;
    };
    /**
     * Sets the internetMessageId property value. 
     * @param value Value to set for the internetMessageId property.
     */
    public set internetMessageId(value: string | undefined) {
        this._internetMessageId = value;
    };
    /**
     * Sets the messageFingerprint property value. 
     * @param value Value to set for the messageFingerprint property.
     */
    public set messageFingerprint(value: string | undefined) {
        this._messageFingerprint = value;
    };
    /**
     * Sets the messageReceivedDateTime property value. 
     * @param value Value to set for the messageReceivedDateTime property.
     */
    public set messageReceivedDateTime(value: Date | undefined) {
        this._messageReceivedDateTime = value;
    };
    /**
     * Sets the messageSubject property value. 
     * @param value Value to set for the messageSubject property.
     */
    public set messageSubject(value: string | undefined) {
        this._messageSubject = value;
    };
    /**
     * Sets the networkMessageId property value. 
     * @param value Value to set for the networkMessageId property.
     */
    public set networkMessageId(value: string | undefined) {
        this._networkMessageId = value;
    };
}
