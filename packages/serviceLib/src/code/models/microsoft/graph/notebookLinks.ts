import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotebookLinks implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Opens the notebook in the OneNote native client if it's installed.  */
    private _oneNoteClientUrl?: ExternalLink | undefined;
    /** Opens the notebook in OneNote on the web.  */
    private _oneNoteWebUrl?: ExternalLink | undefined;
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
     * Instantiates a new notebookLinks and sets the default values.
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
            ["oneNoteClientUrl", (o, n) => { (o as unknown as NotebookLinks).oneNoteClientUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); }],
            ["oneNoteWebUrl", (o, n) => { (o as unknown as NotebookLinks).oneNoteWebUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the oneNoteClientUrl property value. Opens the notebook in the OneNote native client if it's installed.
     * @returns a externalLink
     */
    public get oneNoteClientUrl() {
        return this._oneNoteClientUrl;
    };
    /**
     * Sets the oneNoteClientUrl property value. Opens the notebook in the OneNote native client if it's installed.
     * @param value Value to set for the oneNoteClientUrl property.
     */
    public set oneNoteClientUrl(value: ExternalLink | undefined) {
        this._oneNoteClientUrl = value;
    };
    /**
     * Gets the oneNoteWebUrl property value. Opens the notebook in OneNote on the web.
     * @returns a externalLink
     */
    public get oneNoteWebUrl() {
        return this._oneNoteWebUrl;
    };
    /**
     * Sets the oneNoteWebUrl property value. Opens the notebook in OneNote on the web.
     * @param value Value to set for the oneNoteWebUrl property.
     */
    public set oneNoteWebUrl(value: ExternalLink | undefined) {
        this._oneNoteWebUrl = value;
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
}
