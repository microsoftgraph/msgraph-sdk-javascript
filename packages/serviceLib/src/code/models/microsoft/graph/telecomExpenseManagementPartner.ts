import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TelecomExpenseManagementPartner extends Entity implements Parsable {
    /** Whether the partner's AAD app has been authorized to access Intune.  */
    private _appAuthorized?: boolean | undefined;
    /** Display name of the TEM partner.  */
    private _displayName?: string | undefined;
    /** Whether Intune's connection to the TEM service is currently enabled or disabled.  */
    private _enabled?: boolean | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner.  */
    private _lastConnectionDateTime?: Date | undefined;
    /** URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.  */
    private _url?: string | undefined;
    /**
     * Gets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
     * @returns a boolean
     */
    public get appAuthorized() {
        return this._appAuthorized;
    };
    /**
     * Sets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
     * @param value Value to set for the appAuthorized property.
     */
    public set appAuthorized(value: boolean | undefined) {
        this._appAuthorized = value;
    };
    /**
     * Instantiates a new telecomExpenseManagementPartner and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of the TEM partner.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the TEM partner.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appAuthorized", (o, n) => { (o as unknown as TelecomExpenseManagementPartner).appAuthorized = n.getBooleanValue(); }],
            ["displayName", (o, n) => { (o as unknown as TelecomExpenseManagementPartner).displayName = n.getStringValue(); }],
            ["enabled", (o, n) => { (o as unknown as TelecomExpenseManagementPartner).enabled = n.getBooleanValue(); }],
            ["lastConnectionDateTime", (o, n) => { (o as unknown as TelecomExpenseManagementPartner).lastConnectionDateTime = n.getDateValue(); }],
            ["url", (o, n) => { (o as unknown as TelecomExpenseManagementPartner).url = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
     * @returns a Date
     */
    public get lastConnectionDateTime() {
        return this._lastConnectionDateTime;
    };
    /**
     * Sets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
     * @param value Value to set for the lastConnectionDateTime property.
     */
    public set lastConnectionDateTime(value: Date | undefined) {
        this._lastConnectionDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("appAuthorized", this.appAuthorized);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Gets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
