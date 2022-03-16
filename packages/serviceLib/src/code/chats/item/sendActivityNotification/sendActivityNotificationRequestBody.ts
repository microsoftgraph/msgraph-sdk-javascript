import {ItemBody, KeyValuePair, TeamworkActivityTopic, TeamworkNotificationRecipient} from '../../../models/microsoft/graph/';
import {createItemBodyFromDiscriminatorValue} from '../../../models/microsoft/graph/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../../models/microsoft/graph/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../../models/microsoft/graph/createTeamworkActivityTopicFromDiscriminatorValue';
import {createTeamworkNotificationRecipientFromDiscriminatorValue} from '../../../models/microsoft/graph/createTeamworkNotificationRecipientFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendActivityNotification method.  */
export class SendActivityNotificationRequestBody implements AdditionalDataHolder, Parsable {
    private _activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _chainId?: number | undefined;
    private _previewText?: ItemBody | undefined;
    private _recipient?: TeamworkNotificationRecipient | undefined;
    private _templateParameters?: KeyValuePair[] | undefined;
    private _topic?: TeamworkActivityTopic | undefined;
    /**
     * Gets the activityType property value. 
     * @returns a string
     */
    public get activityType() {
        return this._activityType;
    };
    /**
     * Sets the activityType property value. 
     * @param value Value to set for the activityType property.
     */
    public set activityType(value: string | undefined) {
        this._activityType = value;
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
     * Gets the chainId property value. 
     * @returns a int64
     */
    public get chainId() {
        return this._chainId;
    };
    /**
     * Sets the chainId property value. 
     * @param value Value to set for the chainId property.
     */
    public set chainId(value: number | undefined) {
        this._chainId = value;
    };
    /**
     * Instantiates a new sendActivityNotificationRequestBody and sets the default values.
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
            ["activityType", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).activityType = n.getStringValue(); }],
            ["chainId", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).chainId = n.getNumberValue(); }],
            ["previewText", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).previewText = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["recipient", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).recipient = n.getObjectValue<TeamworkNotificationRecipient>(createTeamworkNotificationRecipientFromDiscriminatorValue); }],
            ["templateParameters", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).templateParameters = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); }],
            ["topic", (o, n) => { (o as unknown as SendActivityNotificationRequestBody).topic = n.getObjectValue<TeamworkActivityTopic>(createTeamworkActivityTopicFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the previewText property value. 
     * @returns a itemBody
     */
    public get previewText() {
        return this._previewText;
    };
    /**
     * Sets the previewText property value. 
     * @param value Value to set for the previewText property.
     */
    public set previewText(value: ItemBody | undefined) {
        this._previewText = value;
    };
    /**
     * Gets the recipient property value. 
     * @returns a teamworkNotificationRecipient
     */
    public get recipient() {
        return this._recipient;
    };
    /**
     * Sets the recipient property value. 
     * @param value Value to set for the recipient property.
     */
    public set recipient(value: TeamworkNotificationRecipient | undefined) {
        this._recipient = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activityType", this.activityType);
        writer.writeNumberValue("chainId", this.chainId);
        writer.writeObjectValue<ItemBody>("previewText", this.previewText);
        writer.writeObjectValue<TeamworkNotificationRecipient>("recipient", this.recipient);
        writer.writeCollectionOfObjectValues<KeyValuePair>("templateParameters", this.templateParameters);
        writer.writeObjectValue<TeamworkActivityTopic>("topic", this.topic);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the templateParameters property value. 
     * @returns a keyValuePair
     */
    public get templateParameters() {
        return this._templateParameters;
    };
    /**
     * Sets the templateParameters property value. 
     * @param value Value to set for the templateParameters property.
     */
    public set templateParameters(value: KeyValuePair[] | undefined) {
        this._templateParameters = value;
    };
    /**
     * Gets the topic property value. 
     * @returns a teamworkActivityTopic
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. 
     * @param value Value to set for the topic property.
     */
    public set topic(value: TeamworkActivityTopic | undefined) {
        this._topic = value;
    };
}
