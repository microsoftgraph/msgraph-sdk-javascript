import {TeleconferenceDeviceQuality} from '../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LogTeleconferenceDeviceQualityRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _quality?: TeleconferenceDeviceQuality | undefined;
    /**
     * Instantiates a new logTeleconferenceDeviceQualityRequestBody and sets the default values.
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
     * Gets the quality property value. 
     * @returns a teleconferenceDeviceQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["quality", (o, n) => { (o as unknown as LogTeleconferenceDeviceQualityRequestBody).quality = n.getObjectValue<TeleconferenceDeviceQuality>(TeleconferenceDeviceQuality); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<TeleconferenceDeviceQuality>("quality", this.quality);
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
     * Sets the quality property value. 
     * @param value Value to set for the quality property.
     */
    public set quality(value: TeleconferenceDeviceQuality | undefined) {
        this._quality = value;
    };
}
