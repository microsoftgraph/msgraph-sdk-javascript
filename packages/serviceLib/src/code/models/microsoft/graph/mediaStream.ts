import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaStream implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.  */
    private _direction?: MediaDirection | undefined;
    /** The media stream label.  */
    private _label?: string | undefined;
    /** The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.  */
    private _mediaType?: Modality | undefined;
    /** If the media is muted by the server.  */
    private _serverMuted?: boolean | undefined;
    /** The source ID.  */
    private _sourceId?: string | undefined;
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
     * Instantiates a new mediaStream and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the direction property value. The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.
     * @returns a mediaDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.
     * @param value Value to set for the direction property.
     */
    public set direction(value: MediaDirection | undefined) {
        this._direction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["direction", (o, n) => { (o as unknown as MediaStream).direction = n.getEnumValue<MediaDirection>(MediaDirection); }],
            ["label", (o, n) => { (o as unknown as MediaStream).label = n.getStringValue(); }],
            ["mediaType", (o, n) => { (o as unknown as MediaStream).mediaType = n.getEnumValue<Modality>(Modality); }],
            ["serverMuted", (o, n) => { (o as unknown as MediaStream).serverMuted = n.getBooleanValue(); }],
            ["sourceId", (o, n) => { (o as unknown as MediaStream).sourceId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the label property value. The media stream label.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. The media stream label.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Gets the mediaType property value. The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.
     * @returns a modality
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: Modality | undefined) {
        this._mediaType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<MediaDirection>("direction", this.direction);
        writer.writeStringValue("label", this.label);
        writer.writeEnumValue<Modality>("mediaType", this.mediaType);
        writer.writeBooleanValue("serverMuted", this.serverMuted);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serverMuted property value. If the media is muted by the server.
     * @returns a boolean
     */
    public get serverMuted() {
        return this._serverMuted;
    };
    /**
     * Sets the serverMuted property value. If the media is muted by the server.
     * @param value Value to set for the serverMuted property.
     */
    public set serverMuted(value: boolean | undefined) {
        this._serverMuted = value;
    };
    /**
     * Gets the sourceId property value. The source ID.
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. The source ID.
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
}
