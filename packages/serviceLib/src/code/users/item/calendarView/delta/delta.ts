import {Attachment} from '../../../../models/microsoft/graph/attachment';
import {Attendee} from '../../../../models/microsoft/graph/attendee';
import {Calendar} from '../../../../models/microsoft/graph/calendar';
import {DateTimeTimeZone} from '../../../../models/microsoft/graph/dateTimeTimeZone';
import {Event} from '../../../../models/microsoft/graph/event';
import {EventType} from '../../../../models/microsoft/graph/eventType';
import {Extension} from '../../../../models/microsoft/graph/extension';
import {FreeBusyStatus} from '../../../../models/microsoft/graph/freeBusyStatus';
import {Importance} from '../../../../models/microsoft/graph/importance';
import {ItemBody} from '../../../../models/microsoft/graph/itemBody';
import {Location} from '../../../../models/microsoft/graph/location';
import {MultiValueLegacyExtendedProperty} from '../../../../models/microsoft/graph/multiValueLegacyExtendedProperty';
import {OnlineMeetingInfo} from '../../../../models/microsoft/graph/onlineMeetingInfo';
import {OnlineMeetingProviderType} from '../../../../models/microsoft/graph/onlineMeetingProviderType';
import {OutlookItem} from '../../../../models/microsoft/graph/outlookItem';
import {PatternedRecurrence} from '../../../../models/microsoft/graph/patternedRecurrence';
import {Recipient} from '../../../../models/microsoft/graph/recipient';
import {ResponseStatus} from '../../../../models/microsoft/graph/responseStatus';
import {Sensitivity} from '../../../../models/microsoft/graph/sensitivity';
import {SingleValueLegacyExtendedProperty} from '../../../../models/microsoft/graph/singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Delta extends OutlookItem implements Parsable {
    /** true if the meeting organizer allows invitees to propose a new time when responding; otherwise, false. Optional. Default is true.  */
    private _allowNewTimeProposals?: boolean | undefined;
    /** The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.  */
    private _attachments?: Attachment[] | undefined;
    /** The collection of attendees for the event.  */
    private _attendees?: Attendee[] | undefined;
    /** The body of the message associated with the event. It can be in HTML or text format.  */
    private _body?: ItemBody | undefined;
    /** The preview of the message associated with the event. It is in text format.  */
    private _bodyPreview?: string | undefined;
    /** The calendar that contains the event. Navigation property. Read-only.  */
    private _calendar?: Calendar | undefined;
    /** The date, time, and time zone that the event ends. By default, the end time is in UTC.  */
    private _end?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the event. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** Set to true if the event has attachments.  */
    private _hasAttachments?: boolean | undefined;
    /** When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.  */
    private _hideAttendees?: boolean | undefined;
    /** A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.  */
    private _iCalUId?: string | undefined;
    private _importance?: Importance | undefined;
    /** The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.  */
    private _instances?: Event[] | undefined;
    private _isAllDay?: boolean | undefined;
    private _isCancelled?: boolean | undefined;
    private _isDraft?: boolean | undefined;
    private _isOnlineMeeting?: boolean | undefined;
    private _isOrganizer?: boolean | undefined;
    private _isReminderOn?: boolean | undefined;
    private _location?: Location | undefined;
    private _locations?: Location[] | undefined;
    /** The collection of multi-value extended properties defined for the event. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    private _onlineMeeting?: OnlineMeetingInfo | undefined;
    private _onlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    private _onlineMeetingUrl?: string | undefined;
    private _organizer?: Recipient | undefined;
    private _originalEndTimeZone?: string | undefined;
    private _originalStart?: Date | undefined;
    private _originalStartTimeZone?: string | undefined;
    private _recurrence?: PatternedRecurrence | undefined;
    private _reminderMinutesBeforeStart?: number | undefined;
    private _responseRequested?: boolean | undefined;
    private _responseStatus?: ResponseStatus | undefined;
    private _sensitivity?: Sensitivity | undefined;
    private _seriesMasterId?: string | undefined;
    private _showAs?: FreeBusyStatus | undefined;
    /** The collection of single-value extended properties defined for the event. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    private _start?: DateTimeTimeZone | undefined;
    private _subject?: string | undefined;
    private _transactionId?: string | undefined;
    private _type?: EventType | undefined;
    private _webLink?: string | undefined;
    /**
     * Instantiates a new delta and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the allowNewTimeProposals property value. true if the meeting organizer allows invitees to propose a new time when responding; otherwise, false. Optional. Default is true.
     * @returns a boolean
     */
    public get allowNewTimeProposals() {
        return this._allowNewTimeProposals;
    };
    /**
     * Gets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Gets the attendees property value. The collection of attendees for the event.
     * @returns a attendee
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Gets the body property value. The body of the message associated with the event. It can be in HTML or text format.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Gets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
     * @returns a string
     */
    public get bodyPreview() {
        return this._bodyPreview;
    };
    /**
     * Gets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
     * @returns a calendar
     */
    public get calendar() {
        return this._calendar;
    };
    /**
     * Gets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
     * @returns a dateTimeTimeZone
     */
    public get end() {
        return this._end;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the event. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the hasAttachments property value. Set to true if the event has attachments.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Gets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
     * @returns a boolean
     */
    public get hideAttendees() {
        return this._hideAttendees;
    };
    /**
     * Gets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
     * @returns a string
     */
    public get iCalUId() {
        return this._iCalUId;
    };
    /**
     * Gets the importance property value. 
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Gets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @returns a event
     */
    public get instances() {
        return this._instances;
    };
    /**
     * Gets the isAllDay property value. 
     * @returns a boolean
     */
    public get isAllDay() {
        return this._isAllDay;
    };
    /**
     * Gets the isCancelled property value. 
     * @returns a boolean
     */
    public get isCancelled() {
        return this._isCancelled;
    };
    /**
     * Gets the isDraft property value. 
     * @returns a boolean
     */
    public get isDraft() {
        return this._isDraft;
    };
    /**
     * Gets the isOnlineMeeting property value. 
     * @returns a boolean
     */
    public get isOnlineMeeting() {
        return this._isOnlineMeeting;
    };
    /**
     * Gets the isOrganizer property value. 
     * @returns a boolean
     */
    public get isOrganizer() {
        return this._isOrganizer;
    };
    /**
     * Gets the isReminderOn property value. 
     * @returns a boolean
     */
    public get isReminderOn() {
        return this._isReminderOn;
    };
    /**
     * Gets the location property value. 
     * @returns a location
     */
    public get location() {
        return this._location;
    };
    /**
     * Gets the locations property value. 
     * @returns a location
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Gets the onlineMeeting property value. 
     * @returns a onlineMeetingInfo
     */
    public get onlineMeeting() {
        return this._onlineMeeting;
    };
    /**
     * Gets the onlineMeetingProvider property value. 
     * @returns a onlineMeetingProviderType
     */
    public get onlineMeetingProvider() {
        return this._onlineMeetingProvider;
    };
    /**
     * Gets the onlineMeetingUrl property value. 
     * @returns a string
     */
    public get onlineMeetingUrl() {
        return this._onlineMeetingUrl;
    };
    /**
     * Gets the organizer property value. 
     * @returns a recipient
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Gets the originalEndTimeZone property value. 
     * @returns a string
     */
    public get originalEndTimeZone() {
        return this._originalEndTimeZone;
    };
    /**
     * Gets the originalStart property value. 
     * @returns a Date
     */
    public get originalStart() {
        return this._originalStart;
    };
    /**
     * Gets the originalStartTimeZone property value. 
     * @returns a string
     */
    public get originalStartTimeZone() {
        return this._originalStartTimeZone;
    };
    /**
     * Gets the recurrence property value. 
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Gets the reminderMinutesBeforeStart property value. 
     * @returns a integer
     */
    public get reminderMinutesBeforeStart() {
        return this._reminderMinutesBeforeStart;
    };
    /**
     * Gets the responseRequested property value. 
     * @returns a boolean
     */
    public get responseRequested() {
        return this._responseRequested;
    };
    /**
     * Gets the responseStatus property value. 
     * @returns a responseStatus
     */
    public get responseStatus() {
        return this._responseStatus;
    };
    /**
     * Gets the sensitivity property value. 
     * @returns a sensitivity
     */
    public get sensitivity() {
        return this._sensitivity;
    };
    /**
     * Gets the seriesMasterId property value. 
     * @returns a string
     */
    public get seriesMasterId() {
        return this._seriesMasterId;
    };
    /**
     * Gets the showAs property value. 
     * @returns a freeBusyStatus
     */
    public get showAs() {
        return this._showAs;
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Gets the start property value. 
     * @returns a dateTimeTimeZone
     */
    public get start() {
        return this._start;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Gets the transactionId property value. 
     * @returns a string
     */
    public get transactionId() {
        return this._transactionId;
    };
    /**
     * Gets the type property value. 
     * @returns a eventType
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the webLink property value. 
     * @returns a string
     */
    public get webLink() {
        return this._webLink;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowNewTimeProposals", (o, n) => { (o as unknown as Delta).allowNewTimeProposals = n.getBooleanValue(); }],
            ["attachments", (o, n) => { (o as unknown as Delta).attachments = n.getCollectionOfObjectValues<Attachment>(Attachment); }],
            ["attendees", (o, n) => { (o as unknown as Delta).attendees = n.getCollectionOfObjectValues<Attendee>(Attendee); }],
            ["body", (o, n) => { (o as unknown as Delta).body = n.getObjectValue<ItemBody>(ItemBody); }],
            ["bodyPreview", (o, n) => { (o as unknown as Delta).bodyPreview = n.getStringValue(); }],
            ["calendar", (o, n) => { (o as unknown as Delta).calendar = n.getObjectValue<Calendar>(Calendar); }],
            ["end", (o, n) => { (o as unknown as Delta).end = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["extensions", (o, n) => { (o as unknown as Delta).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["hasAttachments", (o, n) => { (o as unknown as Delta).hasAttachments = n.getBooleanValue(); }],
            ["hideAttendees", (o, n) => { (o as unknown as Delta).hideAttendees = n.getBooleanValue(); }],
            ["iCalUId", (o, n) => { (o as unknown as Delta).iCalUId = n.getStringValue(); }],
            ["importance", (o, n) => { (o as unknown as Delta).importance = n.getEnumValue<Importance>(Importance); }],
            ["instances", (o, n) => { (o as unknown as Delta).instances = n.getCollectionOfObjectValues<Event>(Event); }],
            ["isAllDay", (o, n) => { (o as unknown as Delta).isAllDay = n.getBooleanValue(); }],
            ["isCancelled", (o, n) => { (o as unknown as Delta).isCancelled = n.getBooleanValue(); }],
            ["isDraft", (o, n) => { (o as unknown as Delta).isDraft = n.getBooleanValue(); }],
            ["isOnlineMeeting", (o, n) => { (o as unknown as Delta).isOnlineMeeting = n.getBooleanValue(); }],
            ["isOrganizer", (o, n) => { (o as unknown as Delta).isOrganizer = n.getBooleanValue(); }],
            ["isReminderOn", (o, n) => { (o as unknown as Delta).isReminderOn = n.getBooleanValue(); }],
            ["location", (o, n) => { (o as unknown as Delta).location = n.getObjectValue<Location>(Location); }],
            ["locations", (o, n) => { (o as unknown as Delta).locations = n.getCollectionOfObjectValues<Location>(Location); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Delta).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(MultiValueLegacyExtendedProperty); }],
            ["onlineMeeting", (o, n) => { (o as unknown as Delta).onlineMeeting = n.getObjectValue<OnlineMeetingInfo>(OnlineMeetingInfo); }],
            ["onlineMeetingProvider", (o, n) => { (o as unknown as Delta).onlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); }],
            ["onlineMeetingUrl", (o, n) => { (o as unknown as Delta).onlineMeetingUrl = n.getStringValue(); }],
            ["organizer", (o, n) => { (o as unknown as Delta).organizer = n.getObjectValue<Recipient>(Recipient); }],
            ["originalEndTimeZone", (o, n) => { (o as unknown as Delta).originalEndTimeZone = n.getStringValue(); }],
            ["originalStart", (o, n) => { (o as unknown as Delta).originalStart = n.getDateValue(); }],
            ["originalStartTimeZone", (o, n) => { (o as unknown as Delta).originalStartTimeZone = n.getStringValue(); }],
            ["recurrence", (o, n) => { (o as unknown as Delta).recurrence = n.getObjectValue<PatternedRecurrence>(PatternedRecurrence); }],
            ["reminderMinutesBeforeStart", (o, n) => { (o as unknown as Delta).reminderMinutesBeforeStart = n.getNumberValue(); }],
            ["responseRequested", (o, n) => { (o as unknown as Delta).responseRequested = n.getBooleanValue(); }],
            ["responseStatus", (o, n) => { (o as unknown as Delta).responseStatus = n.getObjectValue<ResponseStatus>(ResponseStatus); }],
            ["sensitivity", (o, n) => { (o as unknown as Delta).sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); }],
            ["seriesMasterId", (o, n) => { (o as unknown as Delta).seriesMasterId = n.getStringValue(); }],
            ["showAs", (o, n) => { (o as unknown as Delta).showAs = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Delta).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(SingleValueLegacyExtendedProperty); }],
            ["start", (o, n) => { (o as unknown as Delta).start = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["subject", (o, n) => { (o as unknown as Delta).subject = n.getStringValue(); }],
            ["transactionId", (o, n) => { (o as unknown as Delta).transactionId = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as Delta).type = n.getEnumValue<EventType>(EventType); }],
            ["webLink", (o, n) => { (o as unknown as Delta).webLink = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals);
        writer.writeCollectionOfObjectValues<Attachment>("attachments", this.attachments);
        writer.writeCollectionOfObjectValues<Attendee>("attendees", this.attendees);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeObjectValue<Calendar>("calendar", this.calendar);
        writer.writeObjectValue<DateTimeTimeZone>("end", this.end);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("hideAttendees", this.hideAttendees);
        writer.writeStringValue("iCalUId", this.iCalUId);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeCollectionOfObjectValues<Event>("instances", this.instances);
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        writer.writeBooleanValue("isCancelled", this.isCancelled);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting);
        writer.writeBooleanValue("isOrganizer", this.isOrganizer);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeObjectValue<Location>("location", this.location);
        writer.writeCollectionOfObjectValues<Location>("locations", this.locations);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeObjectValue<OnlineMeetingInfo>("onlineMeeting", this.onlineMeeting);
        writer.writeEnumValue<OnlineMeetingProviderType>("onlineMeetingProvider", this.onlineMeetingProvider);
        writer.writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl);
        writer.writeObjectValue<Recipient>("organizer", this.organizer);
        writer.writeStringValue("originalEndTimeZone", this.originalEndTimeZone);
        writer.writeDateValue("originalStart", this.originalStart);
        writer.writeStringValue("originalStartTimeZone", this.originalStartTimeZone);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart);
        writer.writeBooleanValue("responseRequested", this.responseRequested);
        writer.writeObjectValue<ResponseStatus>("responseStatus", this.responseStatus);
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        writer.writeStringValue("seriesMasterId", this.seriesMasterId);
        writer.writeEnumValue<FreeBusyStatus>("showAs", this.showAs);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeObjectValue<DateTimeTimeZone>("start", this.start);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("transactionId", this.transactionId);
        writer.writeEnumValue<EventType>("type", this.type);
        writer.writeStringValue("webLink", this.webLink);
    };
    /**
     * Sets the allowNewTimeProposals property value. true if the meeting organizer allows invitees to propose a new time when responding; otherwise, false. Optional. Default is true.
     * @param value Value to set for the allowNewTimeProposals property.
     */
    public set allowNewTimeProposals(value: boolean | undefined) {
        this._allowNewTimeProposals = value;
    };
    /**
     * Sets the attachments property value. The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Sets the attendees property value. The collection of attendees for the event.
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: Attendee[] | undefined) {
        this._attendees = value;
    };
    /**
     * Sets the body property value. The body of the message associated with the event. It can be in HTML or text format.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Sets the bodyPreview property value. The preview of the message associated with the event. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    public set bodyPreview(value: string | undefined) {
        this._bodyPreview = value;
    };
    /**
     * Sets the calendar property value. The calendar that contains the event. Navigation property. Read-only.
     * @param value Value to set for the calendar property.
     */
    public set calendar(value: Calendar | undefined) {
        this._calendar = value;
    };
    /**
     * Sets the end property value. The date, time, and time zone that the event ends. By default, the end time is in UTC.
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        this._end = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the event. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the hasAttachments property value. Set to true if the event has attachments.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Sets the hideAttendees property value. When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
     * @param value Value to set for the hideAttendees property.
     */
    public set hideAttendees(value: boolean | undefined) {
        this._hideAttendees = value;
    };
    /**
     * Sets the iCalUId property value. A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
     * @param value Value to set for the iCalUId property.
     */
    public set iCalUId(value: string | undefined) {
        this._iCalUId = value;
    };
    /**
     * Sets the importance property value. 
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Sets the instances property value. The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     * @param value Value to set for the instances property.
     */
    public set instances(value: Event[] | undefined) {
        this._instances = value;
    };
    /**
     * Sets the isAllDay property value. 
     * @param value Value to set for the isAllDay property.
     */
    public set isAllDay(value: boolean | undefined) {
        this._isAllDay = value;
    };
    /**
     * Sets the isCancelled property value. 
     * @param value Value to set for the isCancelled property.
     */
    public set isCancelled(value: boolean | undefined) {
        this._isCancelled = value;
    };
    /**
     * Sets the isDraft property value. 
     * @param value Value to set for the isDraft property.
     */
    public set isDraft(value: boolean | undefined) {
        this._isDraft = value;
    };
    /**
     * Sets the isOnlineMeeting property value. 
     * @param value Value to set for the isOnlineMeeting property.
     */
    public set isOnlineMeeting(value: boolean | undefined) {
        this._isOnlineMeeting = value;
    };
    /**
     * Sets the isOrganizer property value. 
     * @param value Value to set for the isOrganizer property.
     */
    public set isOrganizer(value: boolean | undefined) {
        this._isOrganizer = value;
    };
    /**
     * Sets the isReminderOn property value. 
     * @param value Value to set for the isReminderOn property.
     */
    public set isReminderOn(value: boolean | undefined) {
        this._isReminderOn = value;
    };
    /**
     * Sets the location property value. 
     * @param value Value to set for the location property.
     */
    public set location(value: Location | undefined) {
        this._location = value;
    };
    /**
     * Sets the locations property value. 
     * @param value Value to set for the locations property.
     */
    public set locations(value: Location[] | undefined) {
        this._locations = value;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the event. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Sets the onlineMeeting property value. 
     * @param value Value to set for the onlineMeeting property.
     */
    public set onlineMeeting(value: OnlineMeetingInfo | undefined) {
        this._onlineMeeting = value;
    };
    /**
     * Sets the onlineMeetingProvider property value. 
     * @param value Value to set for the onlineMeetingProvider property.
     */
    public set onlineMeetingProvider(value: OnlineMeetingProviderType | undefined) {
        this._onlineMeetingProvider = value;
    };
    /**
     * Sets the onlineMeetingUrl property value. 
     * @param value Value to set for the onlineMeetingUrl property.
     */
    public set onlineMeetingUrl(value: string | undefined) {
        this._onlineMeetingUrl = value;
    };
    /**
     * Sets the organizer property value. 
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: Recipient | undefined) {
        this._organizer = value;
    };
    /**
     * Sets the originalEndTimeZone property value. 
     * @param value Value to set for the originalEndTimeZone property.
     */
    public set originalEndTimeZone(value: string | undefined) {
        this._originalEndTimeZone = value;
    };
    /**
     * Sets the originalStart property value. 
     * @param value Value to set for the originalStart property.
     */
    public set originalStart(value: Date | undefined) {
        this._originalStart = value;
    };
    /**
     * Sets the originalStartTimeZone property value. 
     * @param value Value to set for the originalStartTimeZone property.
     */
    public set originalStartTimeZone(value: string | undefined) {
        this._originalStartTimeZone = value;
    };
    /**
     * Sets the recurrence property value. 
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Sets the reminderMinutesBeforeStart property value. 
     * @param value Value to set for the reminderMinutesBeforeStart property.
     */
    public set reminderMinutesBeforeStart(value: number | undefined) {
        this._reminderMinutesBeforeStart = value;
    };
    /**
     * Sets the responseRequested property value. 
     * @param value Value to set for the responseRequested property.
     */
    public set responseRequested(value: boolean | undefined) {
        this._responseRequested = value;
    };
    /**
     * Sets the responseStatus property value. 
     * @param value Value to set for the responseStatus property.
     */
    public set responseStatus(value: ResponseStatus | undefined) {
        this._responseStatus = value;
    };
    /**
     * Sets the sensitivity property value. 
     * @param value Value to set for the sensitivity property.
     */
    public set sensitivity(value: Sensitivity | undefined) {
        this._sensitivity = value;
    };
    /**
     * Sets the seriesMasterId property value. 
     * @param value Value to set for the seriesMasterId property.
     */
    public set seriesMasterId(value: string | undefined) {
        this._seriesMasterId = value;
    };
    /**
     * Sets the showAs property value. 
     * @param value Value to set for the showAs property.
     */
    public set showAs(value: FreeBusyStatus | undefined) {
        this._showAs = value;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the event. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Sets the start property value. 
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        this._start = value;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Sets the transactionId property value. 
     * @param value Value to set for the transactionId property.
     */
    public set transactionId(value: string | undefined) {
        this._transactionId = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: EventType | undefined) {
        this._type = value;
    };
    /**
     * Sets the webLink property value. 
     * @param value Value to set for the webLink property.
     */
    public set webLink(value: string | undefined) {
        this._webLink = value;
    };
}
