import {createRecentNotebookLinksFromDiscriminatorValue} from './createRecentNotebookLinksFromDiscriminatorValue';
import {RecentNotebookLinks} from './index';
import {OnenoteSourceService} from './onenoteSourceService';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecentNotebook implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The name of the notebook.  */
    private _displayName?: string | undefined;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _lastAccessedTime?: Date | undefined;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.  */
    private _links?: RecentNotebookLinks | undefined;
    /** The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive.  */
    private _sourceService?: OnenoteSourceService | undefined;
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
     * Instantiates a new recentNotebook and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayName property value. The name of the notebook.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the notebook.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as RecentNotebook).displayName = n.getStringValue(); }],
            ["lastAccessedTime", (o, n) => { (o as unknown as RecentNotebook).lastAccessedTime = n.getDateValue(); }],
            ["links", (o, n) => { (o as unknown as RecentNotebook).links = n.getObjectValue<RecentNotebookLinks>(createRecentNotebookLinksFromDiscriminatorValue); }],
            ["sourceService", (o, n) => { (o as unknown as RecentNotebook).sourceService = n.getEnumValue<OnenoteSourceService>(OnenoteSourceService); }],
        ]);
    };
    /**
     * Gets the lastAccessedTime property value. The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get lastAccessedTime() {
        return this._lastAccessedTime;
    };
    /**
     * Sets the lastAccessedTime property value. The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the lastAccessedTime property.
     */
    public set lastAccessedTime(value: Date | undefined) {
        this._lastAccessedTime = value;
    };
    /**
     * Gets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @returns a recentNotebookLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     * @param value Value to set for the links property.
     */
    public set links(value: RecentNotebookLinks | undefined) {
        this._links = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastAccessedTime", this.lastAccessedTime);
        writer.writeObjectValue<RecentNotebookLinks>("links", this.links);
        writer.writeEnumValue<OnenoteSourceService>("sourceService", this.sourceService);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceService property value. The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive.
     * @returns a onenoteSourceService
     */
    public get sourceService() {
        return this._sourceService;
    };
    /**
     * Sets the sourceService property value. The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive.
     * @param value Value to set for the sourceService property.
     */
    public set sourceService(value: OnenoteSourceService | undefined) {
        this._sourceService = value;
    };
}
