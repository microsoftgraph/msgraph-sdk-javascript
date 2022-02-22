import {TeamworkActivityTopicSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkActivityTopic implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text.  */
    private _source?: TeamworkActivityTopicSource | undefined;
    /** The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value.  */
    private _value?: string | undefined;
    /** The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text.  */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new teamworkActivityTopic and sets the default values.
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
     * Gets the source property value. Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text.
     * @returns a teamworkActivityTopicSource
     */
    public get source() {
        return this._source;
    };
    /**
     * Gets the value property value. The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Gets the webUrl property value. The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["source", (o, n) => { (o as unknown as TeamworkActivityTopic).source = n.getEnumValue<TeamworkActivityTopicSource>(TeamworkActivityTopicSource); }],
            ["value", (o, n) => { (o as unknown as TeamworkActivityTopic).value = n.getStringValue(); }],
            ["webUrl", (o, n) => { (o as unknown as TeamworkActivityTopic).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<TeamworkActivityTopicSource>("source", this.source);
        writer.writeStringValue("value", this.value);
        writer.writeStringValue("webUrl", this.webUrl);
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
     * Sets the source property value. Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom text, use text.
     * @param value Value to set for the source property.
     */
    public set source(value: TeamworkActivityTopicSource | undefined) {
        this._source = value;
    };
    /**
     * Sets the value property value. The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is text, this must be a plain text value.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
    /**
     * Sets the webUrl property value. The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is text.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
