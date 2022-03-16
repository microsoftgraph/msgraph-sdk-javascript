import {createActivityHistoryItemFromDiscriminatorValue} from './createActivityHistoryItemFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createVisualInfoFromDiscriminatorValue} from './createVisualInfoFromDiscriminatorValue';
import {ActivityHistoryItem, Entity, Json, VisualInfo} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserActivity extends Entity implements Parsable {
    /** Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.  */
    private _activationUrl?: string | undefined;
    /** Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.  */
    private _activitySourceHost?: string | undefined;
    /** Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.  */
    private _appActivityId?: string | undefined;
    /** Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.  */
    private _appDisplayName?: string | undefined;
    /** Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.  */
    private _contentInfo?: Json | undefined;
    /** Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).  */
    private _contentUrl?: string | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server.  */
    private _createdDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object expired on the server.  */
    private _expirationDateTime?: Date | undefined;
    /** Optional. URL used to launch the activity in a web-based app, if available.  */
    private _fallbackUrl?: string | undefined;
    /** Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.  */
    private _historyItems?: ActivityHistoryItem[] | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.  */
    private _status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.  */
    private _userTimezone?: string | undefined;
    private _visualElements?: VisualInfo | undefined;
    /**
     * Gets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
     * @returns a string
     */
    public get activationUrl() {
        return this._activationUrl;
    };
    /**
     * Sets the activationUrl property value. Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists.
     * @param value Value to set for the activationUrl property.
     */
    public set activationUrl(value: string | undefined) {
        this._activationUrl = value;
    };
    /**
     * Gets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
     * @returns a string
     */
    public get activitySourceHost() {
        return this._activitySourceHost;
    };
    /**
     * Sets the activitySourceHost property value. Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint.
     * @param value Value to set for the activitySourceHost property.
     */
    public set activitySourceHost(value: string | undefined) {
        this._activitySourceHost = value;
    };
    /**
     * Gets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
     * @returns a string
     */
    public get appActivityId() {
        return this._appActivityId;
    };
    /**
     * Sets the appActivityId property value. Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
     * @param value Value to set for the appActivityId property.
     */
    public set appActivityId(value: string | undefined) {
        this._appActivityId = value;
    };
    /**
     * Gets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Instantiates a new userActivity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
     * @returns a Json
     */
    public get contentInfo() {
        return this._contentInfo;
    };
    /**
     * Sets the contentInfo property value. Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
     * @param value Value to set for the contentInfo property.
     */
    public set contentInfo(value: Json | undefined) {
        this._contentInfo = value;
    };
    /**
     * Gets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed).
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Gets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Set by the server. DateTime in UTC when the object expired on the server.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Gets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
     * @returns a string
     */
    public get fallbackUrl() {
        return this._fallbackUrl;
    };
    /**
     * Sets the fallbackUrl property value. Optional. URL used to launch the activity in a web-based app, if available.
     * @param value Value to set for the fallbackUrl property.
     */
    public set fallbackUrl(value: string | undefined) {
        this._fallbackUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activationUrl", (o, n) => { (o as unknown as UserActivity).activationUrl = n.getStringValue(); }],
            ["activitySourceHost", (o, n) => { (o as unknown as UserActivity).activitySourceHost = n.getStringValue(); }],
            ["appActivityId", (o, n) => { (o as unknown as UserActivity).appActivityId = n.getStringValue(); }],
            ["appDisplayName", (o, n) => { (o as unknown as UserActivity).appDisplayName = n.getStringValue(); }],
            ["contentInfo", (o, n) => { (o as unknown as UserActivity).contentInfo = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); }],
            ["contentUrl", (o, n) => { (o as unknown as UserActivity).contentUrl = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as UserActivity).createdDateTime = n.getDateValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as UserActivity).expirationDateTime = n.getDateValue(); }],
            ["fallbackUrl", (o, n) => { (o as unknown as UserActivity).fallbackUrl = n.getStringValue(); }],
            ["historyItems", (o, n) => { (o as unknown as UserActivity).historyItems = n.getCollectionOfObjectValues<ActivityHistoryItem>(createActivityHistoryItemFromDiscriminatorValue); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as UserActivity).lastModifiedDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as UserActivity).status = n.getEnumValue<Status>(Status); }],
            ["userTimezone", (o, n) => { (o as unknown as UserActivity).userTimezone = n.getStringValue(); }],
            ["visualElements", (o, n) => { (o as unknown as UserActivity).visualElements = n.getObjectValue<VisualInfo>(createVisualInfoFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @returns a activityHistoryItem
     */
    public get historyItems() {
        return this._historyItems;
    };
    /**
     * Sets the historyItems property value. Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param value Value to set for the historyItems property.
     */
    public set historyItems(value: ActivityHistoryItem[] | undefined) {
        this._historyItems = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activationUrl", this.activationUrl);
        writer.writeStringValue("activitySourceHost", this.activitySourceHost);
        writer.writeStringValue("appActivityId", this.appActivityId);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeObjectValue<Json>("contentInfo", this.contentInfo);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("fallbackUrl", this.fallbackUrl);
        writer.writeCollectionOfObjectValues<ActivityHistoryItem>("historyItems", this.historyItems);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<Status>("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
        writer.writeObjectValue<VisualInfo>("visualElements", this.visualElements);
    };
    /**
     * Gets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        this._status = value;
    };
    /**
     * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation.
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        this._userTimezone = value;
    };
    /**
     * Gets the visualElements property value. 
     * @returns a visualInfo
     */
    public get visualElements() {
        return this._visualElements;
    };
    /**
     * Sets the visualElements property value. 
     * @param value Value to set for the visualElements property.
     */
    public set visualElements(value: VisualInfo | undefined) {
        this._visualElements = value;
    };
}
