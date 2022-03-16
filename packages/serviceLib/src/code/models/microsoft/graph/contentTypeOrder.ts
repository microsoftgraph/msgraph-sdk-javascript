import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentTypeOrder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Whether this is the default Content Type  */
    private _default_escaped?: boolean | undefined;
    /** Specifies the position in which the Content Type appears in the selection UI.  */
    private _position?: number | undefined;
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
     * Instantiates a new contentTypeOrder and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the default property value. Whether this is the default Content Type
     * @returns a boolean
     */
    public get default_escaped() {
        return this._default_escaped;
    };
    /**
     * Sets the default property value. Whether this is the default Content Type
     * @param value Value to set for the default_escaped property.
     */
    public set default_escaped(value: boolean | undefined) {
        this._default_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["default", (o, n) => { (o as unknown as ContentTypeOrder).default_escaped = n.getBooleanValue(); }],
            ["position", (o, n) => { (o as unknown as ContentTypeOrder).position = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the position property value. Specifies the position in which the Content Type appears in the selection UI.
     * @returns a integer
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. Specifies the position in which the Content Type appears in the selection UI.
     * @param value Value to set for the position property.
     */
    public set position(value: number | undefined) {
        this._position = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("default", this.default_escaped);
        writer.writeNumberValue("position", this.position);
        writer.writeAdditionalData(this.additionalData);
    };
}
