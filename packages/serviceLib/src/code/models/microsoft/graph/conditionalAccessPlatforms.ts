import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatforms implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.  */
    private _excludePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.  */
    private _includePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
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
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
     * @returns a conditionalAccessDevicePlatform
     */
    public get excludePlatforms() {
        return this._excludePlatforms;
    };
    /**
     * Sets the excludePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
     * @param value Value to set for the excludePlatforms property.
     */
    public set excludePlatforms(value: ConditionalAccessDevicePlatform[] | undefined) {
        this._excludePlatforms = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["excludePlatforms", (o, n) => { (o as unknown as ConditionalAccessPlatforms).excludePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); }],
            ["includePlatforms", (o, n) => { (o as unknown as ConditionalAccessPlatforms).includePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); }],
        ]);
    };
    /**
     * Gets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
     * @returns a conditionalAccessDevicePlatform
     */
    public get includePlatforms() {
        return this._includePlatforms;
    };
    /**
     * Sets the includePlatforms property value. Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
     * @param value Value to set for the includePlatforms property.
     */
    public set includePlatforms(value: ConditionalAccessDevicePlatform[] | undefined) {
        this._includePlatforms = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.excludePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("excludePlatforms", ...this.excludePlatforms);
        this.includePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("includePlatforms", ...this.includePlatforms);
        writer.writeAdditionalData(this.additionalData);
    };
}
