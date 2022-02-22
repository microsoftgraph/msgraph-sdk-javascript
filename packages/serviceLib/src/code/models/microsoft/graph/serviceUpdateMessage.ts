import {ItemBody, ServiceAnnouncementAttachment, ServiceAnnouncementBase, ServiceUpdateCategory, ServiceUpdateMessageViewpoint, ServiceUpdateSeverity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessage extends ServiceAnnouncementBase implements Parsable {
    /** The expected deadline of the action for the message.  */
    private _actionRequiredByDateTime?: Date | undefined;
    /** A collection of serviceAnnouncementAttachments.  */
    private _attachments?: ServiceAnnouncementAttachment[] | undefined;
    /** The zip file that contains all attachments for a message.  */
    private _attachmentsArchive?: string | undefined;
    private _body?: ItemBody | undefined;
    /** The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.  */
    private _category?: ServiceUpdateCategory | undefined;
    /** Indicates whether the message has any attachment.  */
    private _hasAttachments?: boolean | undefined;
    /** Indicates whether the message describes a major update for the service.  */
    private _isMajorChange?: boolean | undefined;
    /** The affected services by the service message.  */
    private _services?: string[] | undefined;
    /** The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.  */
    private _severity?: ServiceUpdateSeverity | undefined;
    /** A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.  */
    private _tags?: string[] | undefined;
    /** Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.  */
    private _viewPoint?: ServiceUpdateMessageViewpoint | undefined;
    /**
     * Instantiates a new serviceUpdateMessage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @returns a Date
     */
    public get actionRequiredByDateTime() {
        return this._actionRequiredByDateTime;
    };
    /**
     * Gets the attachments property value. A collection of serviceAnnouncementAttachments.
     * @returns a serviceAnnouncementAttachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Gets the attachmentsArchive property value. The zip file that contains all attachments for a message.
     * @returns a binary
     */
    public get attachmentsArchive() {
        return this._attachmentsArchive;
    };
    /**
     * Gets the body property value. 
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Gets the category property value. The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.
     * @returns a serviceUpdateCategory
     */
    public get category() {
        return this._category;
    };
    /**
     * Gets the hasAttachments property value. Indicates whether the message has any attachment.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Gets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @returns a boolean
     */
    public get isMajorChange() {
        return this._isMajorChange;
    };
    /**
     * Gets the services property value. The affected services by the service message.
     * @returns a string
     */
    public get services() {
        return this._services;
    };
    /**
     * Gets the severity property value. The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.
     * @returns a serviceUpdateSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Gets the tags property value. A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Gets the viewPoint property value. Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @returns a serviceUpdateMessageViewpoint
     */
    public get viewPoint() {
        return this._viewPoint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["actionRequiredByDateTime", (o, n) => { (o as unknown as ServiceUpdateMessage).actionRequiredByDateTime = n.getDateValue(); }],
            ["attachments", (o, n) => { (o as unknown as ServiceUpdateMessage).attachments = n.getCollectionOfObjectValues<ServiceAnnouncementAttachment>(ServiceAnnouncementAttachment); }],
            ["attachmentsArchive", (o, n) => { (o as unknown as ServiceUpdateMessage).attachmentsArchive = n.getStringValue(); }],
            ["body", (o, n) => { (o as unknown as ServiceUpdateMessage).body = n.getObjectValue<ItemBody>(ItemBody); }],
            ["category", (o, n) => { (o as unknown as ServiceUpdateMessage).category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory); }],
            ["hasAttachments", (o, n) => { (o as unknown as ServiceUpdateMessage).hasAttachments = n.getBooleanValue(); }],
            ["isMajorChange", (o, n) => { (o as unknown as ServiceUpdateMessage).isMajorChange = n.getBooleanValue(); }],
            ["services", (o, n) => { (o as unknown as ServiceUpdateMessage).services = n.getCollectionOfPrimitiveValues<string>(); }],
            ["severity", (o, n) => { (o as unknown as ServiceUpdateMessage).severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity); }],
            ["tags", (o, n) => { (o as unknown as ServiceUpdateMessage).tags = n.getCollectionOfPrimitiveValues<string>(); }],
            ["viewPoint", (o, n) => { (o as unknown as ServiceUpdateMessage).viewPoint = n.getObjectValue<ServiceUpdateMessageViewpoint>(ServiceUpdateMessageViewpoint); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("actionRequiredByDateTime", this.actionRequiredByDateTime);
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachment>("attachments", this.attachments);
        writer.writeStringValue("attachmentsArchive", this.attachmentsArchive);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeEnumValue<ServiceUpdateCategory>("category", this.category);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("isMajorChange", this.isMajorChange);
        writer.writeCollectionOfPrimitiveValues<string>("services", this.services);
        writer.writeEnumValue<ServiceUpdateSeverity>("severity", this.severity);
        writer.writeCollectionOfPrimitiveValues<string>("tags", this.tags);
        writer.writeObjectValue<ServiceUpdateMessageViewpoint>("viewPoint", this.viewPoint);
    };
    /**
     * Sets the actionRequiredByDateTime property value. The expected deadline of the action for the message.
     * @param value Value to set for the actionRequiredByDateTime property.
     */
    public set actionRequiredByDateTime(value: Date | undefined) {
        this._actionRequiredByDateTime = value;
    };
    /**
     * Sets the attachments property value. A collection of serviceAnnouncementAttachments.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: ServiceAnnouncementAttachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Sets the attachmentsArchive property value. The zip file that contains all attachments for a message.
     * @param value Value to set for the attachmentsArchive property.
     */
    public set attachmentsArchive(value: string | undefined) {
        this._attachmentsArchive = value;
    };
    /**
     * Sets the body property value. 
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Sets the category property value. The service message category. Possible values are: preventOrFixIssue, planForChange, stayInformed, unknownFutureValue.
     * @param value Value to set for the category property.
     */
    public set category(value: ServiceUpdateCategory | undefined) {
        this._category = value;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the message has any attachment.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Sets the isMajorChange property value. Indicates whether the message describes a major update for the service.
     * @param value Value to set for the isMajorChange property.
     */
    public set isMajorChange(value: boolean | undefined) {
        this._isMajorChange = value;
    };
    /**
     * Sets the services property value. The affected services by the service message.
     * @param value Value to set for the services property.
     */
    public set services(value: string[] | undefined) {
        this._services = value;
    };
    /**
     * Sets the severity property value. The severity of the service message. Possible values are: normal, high, critical, unknownFutureValue.
     * @param value Value to set for the severity property.
     */
    public set severity(value: ServiceUpdateSeverity | undefined) {
        this._severity = value;
    };
    /**
     * Sets the tags property value. A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.
     * @param value Value to set for the tags property.
     */
    public set tags(value: string[] | undefined) {
        this._tags = value;
    };
    /**
     * Sets the viewPoint property value. Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     * @param value Value to set for the viewPoint property.
     */
    public set viewPoint(value: ServiceUpdateMessageViewpoint | undefined) {
        this._viewPoint = value;
    };
}
