import {Entity} from './index';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteAssistancePartner extends Entity implements Parsable {
    /** Display name of the partner.  */
    private _displayName?: string | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner.  */
    private _lastConnectionDateTime?: Date | undefined;
    /** A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded.  */
    private _onboardingStatus?: RemoteAssistanceOnboardingStatus | undefined;
    /** URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.  */
    private _onboardingUrl?: string | undefined;
    /**
     * Instantiates a new remoteAssistancePartner and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display name of the partner.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the partner.
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
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as RemoteAssistancePartner).displayName = n.getStringValue(); }],
            ["lastConnectionDateTime", (o, n) => { (o as unknown as RemoteAssistancePartner).lastConnectionDateTime = n.getDateValue(); }],
            ["onboardingStatus", (o, n) => { (o as unknown as RemoteAssistancePartner).onboardingStatus = n.getEnumValue<RemoteAssistanceOnboardingStatus>(RemoteAssistanceOnboardingStatus); }],
            ["onboardingUrl", (o, n) => { (o as unknown as RemoteAssistancePartner).onboardingUrl = n.getStringValue(); }],
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
     * Gets the onboardingStatus property value. A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded.
     * @returns a remoteAssistanceOnboardingStatus
     */
    public get onboardingStatus() {
        return this._onboardingStatus;
    };
    /**
     * Sets the onboardingStatus property value. A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded.
     * @param value Value to set for the onboardingStatus property.
     */
    public set onboardingStatus(value: RemoteAssistanceOnboardingStatus | undefined) {
        this._onboardingStatus = value;
    };
    /**
     * Gets the onboardingUrl property value. URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
     * @returns a string
     */
    public get onboardingUrl() {
        return this._onboardingUrl;
    };
    /**
     * Sets the onboardingUrl property value. URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
     * @param value Value to set for the onboardingUrl property.
     */
    public set onboardingUrl(value: string | undefined) {
        this._onboardingUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        writer.writeEnumValue<RemoteAssistanceOnboardingStatus>("onboardingStatus", this.onboardingStatus);
        writer.writeStringValue("onboardingUrl", this.onboardingUrl);
    };
}
