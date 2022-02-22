import {ExternalLink} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PageLinks implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Opens the page in the OneNote native client if it's installed.  */
    private _oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the page in OneNote on the web.  */
    private _oneNoteWebUrl?: ExternalLink | undefined;
    /**
     * Instantiates a new pageLinks and sets the default values.
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
     * Gets the oneNoteClientUrl property value. Opens the page in the OneNote native client if it's installed.
     * @returns a externalLink
     */
    public get oneNoteClientUrl() {
        return this._oneNoteClientUrl;
    };
    /**
     * Gets the oneNoteWebUrl property value. Opens the page in OneNote on the web.
     * @returns a externalLink
     */
    public get oneNoteWebUrl() {
        return this._oneNoteWebUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["oneNoteClientUrl", (o, n) => { (o as unknown as PageLinks).oneNoteClientUrl = n.getObjectValue<ExternalLink>(ExternalLink); }],
            ["oneNoteWebUrl", (o, n) => { (o as unknown as PageLinks).oneNoteWebUrl = n.getObjectValue<ExternalLink>(ExternalLink); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", this.oneNoteClientUrl);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", this.oneNoteWebUrl);
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
     * Sets the oneNoteClientUrl property value. Opens the page in the OneNote native client if it's installed.
     * @param value Value to set for the oneNoteClientUrl property.
     */
    public set oneNoteClientUrl(value: ExternalLink | undefined) {
        this._oneNoteClientUrl = value;
    };
    /**
     * Sets the oneNoteWebUrl property value. Opens the page in OneNote on the web.
     * @param value Value to set for the oneNoteWebUrl property.
     */
    public set oneNoteWebUrl(value: ExternalLink | undefined) {
        this._oneNoteWebUrl = value;
    };
}
