import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HyperlinkOrPictureColumn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specifies whether the display format used for URL columns is an image or a hyperlink.  */
    private _isPicture?: boolean | undefined;
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
     * Instantiates a new hyperlinkOrPictureColumn and sets the default values.
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
            ["isPicture", (o, n) => { (o as unknown as HyperlinkOrPictureColumn).isPicture = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the isPicture property value. Specifies whether the display format used for URL columns is an image or a hyperlink.
     * @returns a boolean
     */
    public get isPicture() {
        return this._isPicture;
    };
    /**
     * Sets the isPicture property value. Specifies whether the display format used for URL columns is an image or a hyperlink.
     * @param value Value to set for the isPicture property.
     */
    public set isPicture(value: boolean | undefined) {
        this._isPicture = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isPicture", this.isPicture);
        writer.writeAdditionalData(this.additionalData);
    };
}
