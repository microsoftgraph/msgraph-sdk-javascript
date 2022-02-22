import {BookingCustomerInformationBase, BookingPriceType, BookingReminder, DateTimeTimeZone, Entity, Location} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingAppointment extends Entity implements Parsable {
    /** Additional information that is sent to the customer when an appointment is confirmed.  */
    private _additionalInformation?: string | undefined;
    /** It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.  */
    private _customers?: BookingCustomerInformationBase[] | undefined;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone.  */
    private _customerTimeZone?: string | undefined;
    /** The length of the appointment, denoted in ISO8601 format.  */
    private _duration?: Duration | undefined;
    private _endDateTime?: DateTimeTimeZone | undefined;
    /** The current number of customers in the appointment  */
    private _filledAttendeesCount?: number | undefined;
    /** If true, indicates that the appointment will be held online. Default value is false.  */
    private _isLocationOnline?: boolean | undefined;
    /** The URL of the online meeting for the appointment.  */
    private _joinWebUrl?: string | undefined;
    /** The maximum number of customers allowed in an appointment.  */
    private _maximumAttendeesCount?: number | undefined;
    /** If true indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.  */
    private _optOutOfCustomerEmail?: boolean | undefined;
    /** The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.  */
    private _postBuffer?: Duration | undefined;
    /** The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.  */
    private _preBuffer?: Duration | undefined;
    /** The regular price for an appointment for the specified bookingService.  */
    private _price?: number | undefined;
    /** A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.  */
    private _priceType?: BookingPriceType | undefined;
    /** The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.  */
    private _reminders?: BookingReminder[] | undefined;
    /** An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. Only supported for appointment if maxAttendeeCount is 1.  */
    private _selfServiceAppointmentId?: string | undefined;
    /** The ID of the bookingService associated with this appointment.  */
    private _serviceId?: string | undefined;
    /** The location where the service is delivered.  */
    private _serviceLocation?: Location | undefined;
    /** The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.  */
    private _serviceName?: string | undefined;
    /** Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.  */
    private _serviceNotes?: string | undefined;
    /** If true, indicates SMS notifications will be sent to the customers for the appointment. Default value is false.  */
    private _smsNotificationsEnabled?: boolean | undefined;
    /** The ID of each bookingStaffMember who is scheduled in this appointment.  */
    private _staffMemberIds?: string[] | undefined;
    private _startDateTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new bookingAppointment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the additionalInformation property value. Additional information that is sent to the customer when an appointment is confirmed.
     * @returns a string
     */
    public get additionalInformation() {
        return this._additionalInformation;
    };
    /**
     * Gets the customers property value. It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.
     * @returns a bookingCustomerInformationBase
     */
    public get customers() {
        return this._customers;
    };
    /**
     * Gets the customerTimeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @returns a string
     */
    public get customerTimeZone() {
        return this._customerTimeZone;
    };
    /**
     * Gets the duration property value. The length of the appointment, denoted in ISO8601 format.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the filledAttendeesCount property value. The current number of customers in the appointment
     * @returns a integer
     */
    public get filledAttendeesCount() {
        return this._filledAttendeesCount;
    };
    /**
     * Gets the isLocationOnline property value. If true, indicates that the appointment will be held online. Default value is false.
     * @returns a boolean
     */
    public get isLocationOnline() {
        return this._isLocationOnline;
    };
    /**
     * Gets the joinWebUrl property value. The URL of the online meeting for the appointment.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Gets the maximumAttendeesCount property value. The maximum number of customers allowed in an appointment.
     * @returns a integer
     */
    public get maximumAttendeesCount() {
        return this._maximumAttendeesCount;
    };
    /**
     * Gets the optOutOfCustomerEmail property value. If true indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.
     * @returns a boolean
     */
    public get optOutOfCustomerEmail() {
        return this._optOutOfCustomerEmail;
    };
    /**
     * Gets the postBuffer property value. The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.
     * @returns a Duration
     */
    public get postBuffer() {
        return this._postBuffer;
    };
    /**
     * Gets the preBuffer property value. The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.
     * @returns a Duration
     */
    public get preBuffer() {
        return this._preBuffer;
    };
    /**
     * Gets the price property value. The regular price for an appointment for the specified bookingService.
     * @returns a double
     */
    public get price() {
        return this._price;
    };
    /**
     * Gets the priceType property value. A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @returns a bookingPriceType
     */
    public get priceType() {
        return this._priceType;
    };
    /**
     * Gets the reminders property value. The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.
     * @returns a bookingReminder
     */
    public get reminders() {
        return this._reminders;
    };
    /**
     * Gets the selfServiceAppointmentId property value. An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. Only supported for appointment if maxAttendeeCount is 1.
     * @returns a string
     */
    public get selfServiceAppointmentId() {
        return this._selfServiceAppointmentId;
    };
    /**
     * Gets the serviceId property value. The ID of the bookingService associated with this appointment.
     * @returns a string
     */
    public get serviceId() {
        return this._serviceId;
    };
    /**
     * Gets the serviceLocation property value. The location where the service is delivered.
     * @returns a location
     */
    public get serviceLocation() {
        return this._serviceLocation;
    };
    /**
     * Gets the serviceName property value. The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.
     * @returns a string
     */
    public get serviceName() {
        return this._serviceName;
    };
    /**
     * Gets the serviceNotes property value. Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.
     * @returns a string
     */
    public get serviceNotes() {
        return this._serviceNotes;
    };
    /**
     * Gets the smsNotificationsEnabled property value. If true, indicates SMS notifications will be sent to the customers for the appointment. Default value is false.
     * @returns a boolean
     */
    public get smsNotificationsEnabled() {
        return this._smsNotificationsEnabled;
    };
    /**
     * Gets the staffMemberIds property value. The ID of each bookingStaffMember who is scheduled in this appointment.
     * @returns a string
     */
    public get staffMemberIds() {
        return this._staffMemberIds;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["additionalInformation", (o, n) => { (o as unknown as BookingAppointment).additionalInformation = n.getStringValue(); }],
            ["customers", (o, n) => { (o as unknown as BookingAppointment).customers = n.getCollectionOfObjectValues<BookingCustomerInformationBase>(BookingCustomerInformationBase); }],
            ["customerTimeZone", (o, n) => { (o as unknown as BookingAppointment).customerTimeZone = n.getStringValue(); }],
            ["duration", (o, n) => { (o as unknown as BookingAppointment).duration = n.getDurationValue(); }],
            ["endDateTime", (o, n) => { (o as unknown as BookingAppointment).endDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["filledAttendeesCount", (o, n) => { (o as unknown as BookingAppointment).filledAttendeesCount = n.getNumberValue(); }],
            ["isLocationOnline", (o, n) => { (o as unknown as BookingAppointment).isLocationOnline = n.getBooleanValue(); }],
            ["joinWebUrl", (o, n) => { (o as unknown as BookingAppointment).joinWebUrl = n.getStringValue(); }],
            ["maximumAttendeesCount", (o, n) => { (o as unknown as BookingAppointment).maximumAttendeesCount = n.getNumberValue(); }],
            ["optOutOfCustomerEmail", (o, n) => { (o as unknown as BookingAppointment).optOutOfCustomerEmail = n.getBooleanValue(); }],
            ["postBuffer", (o, n) => { (o as unknown as BookingAppointment).postBuffer = n.getDurationValue(); }],
            ["preBuffer", (o, n) => { (o as unknown as BookingAppointment).preBuffer = n.getDurationValue(); }],
            ["price", (o, n) => { (o as unknown as BookingAppointment).price = n.getNumberValue(); }],
            ["priceType", (o, n) => { (o as unknown as BookingAppointment).priceType = n.getEnumValue<BookingPriceType>(BookingPriceType); }],
            ["reminders", (o, n) => { (o as unknown as BookingAppointment).reminders = n.getCollectionOfObjectValues<BookingReminder>(BookingReminder); }],
            ["selfServiceAppointmentId", (o, n) => { (o as unknown as BookingAppointment).selfServiceAppointmentId = n.getStringValue(); }],
            ["serviceId", (o, n) => { (o as unknown as BookingAppointment).serviceId = n.getStringValue(); }],
            ["serviceLocation", (o, n) => { (o as unknown as BookingAppointment).serviceLocation = n.getObjectValue<Location>(Location); }],
            ["serviceName", (o, n) => { (o as unknown as BookingAppointment).serviceName = n.getStringValue(); }],
            ["serviceNotes", (o, n) => { (o as unknown as BookingAppointment).serviceNotes = n.getStringValue(); }],
            ["smsNotificationsEnabled", (o, n) => { (o as unknown as BookingAppointment).smsNotificationsEnabled = n.getBooleanValue(); }],
            ["staffMemberIds", (o, n) => { (o as unknown as BookingAppointment).staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); }],
            ["startDateTime", (o, n) => { (o as unknown as BookingAppointment).startDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("additionalInformation", this.additionalInformation);
        writer.writeCollectionOfObjectValues<BookingCustomerInformationBase>("customers", this.customers);
        writer.writeStringValue("customerTimeZone", this.customerTimeZone);
        writer.writeDurationValue("duration", this.duration);
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", this.endDateTime);
        writer.writeNumberValue("filledAttendeesCount", this.filledAttendeesCount);
        writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        writer.writeBooleanValue("optOutOfCustomerEmail", this.optOutOfCustomerEmail);
        writer.writeDurationValue("postBuffer", this.postBuffer);
        writer.writeDurationValue("preBuffer", this.preBuffer);
        writer.writeNumberValue("price", this.price);
        writer.writeEnumValue<BookingPriceType>("priceType", this.priceType);
        writer.writeCollectionOfObjectValues<BookingReminder>("reminders", this.reminders);
        writer.writeStringValue("selfServiceAppointmentId", this.selfServiceAppointmentId);
        writer.writeStringValue("serviceId", this.serviceId);
        writer.writeObjectValue<Location>("serviceLocation", this.serviceLocation);
        writer.writeStringValue("serviceName", this.serviceName);
        writer.writeStringValue("serviceNotes", this.serviceNotes);
        writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
    };
    /**
     * Sets the additionalInformation property value. Additional information that is sent to the customer when an appointment is confirmed.
     * @param value Value to set for the additionalInformation property.
     */
    public set additionalInformation(value: string | undefined) {
        this._additionalInformation = value;
    };
    /**
     * Sets the customers property value. It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.
     * @param value Value to set for the customers property.
     */
    public set customers(value: BookingCustomerInformationBase[] | undefined) {
        this._customers = value;
    };
    /**
     * Sets the customerTimeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @param value Value to set for the customerTimeZone property.
     */
    public set customerTimeZone(value: string | undefined) {
        this._customerTimeZone = value;
    };
    /**
     * Sets the duration property value. The length of the appointment, denoted in ISO8601 format.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        this._duration = value;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the filledAttendeesCount property value. The current number of customers in the appointment
     * @param value Value to set for the filledAttendeesCount property.
     */
    public set filledAttendeesCount(value: number | undefined) {
        this._filledAttendeesCount = value;
    };
    /**
     * Sets the isLocationOnline property value. If true, indicates that the appointment will be held online. Default value is false.
     * @param value Value to set for the isLocationOnline property.
     */
    public set isLocationOnline(value: boolean | undefined) {
        this._isLocationOnline = value;
    };
    /**
     * Sets the joinWebUrl property value. The URL of the online meeting for the appointment.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
    };
    /**
     * Sets the maximumAttendeesCount property value. The maximum number of customers allowed in an appointment.
     * @param value Value to set for the maximumAttendeesCount property.
     */
    public set maximumAttendeesCount(value: number | undefined) {
        this._maximumAttendeesCount = value;
    };
    /**
     * Sets the optOutOfCustomerEmail property value. If true indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.
     * @param value Value to set for the optOutOfCustomerEmail property.
     */
    public set optOutOfCustomerEmail(value: boolean | undefined) {
        this._optOutOfCustomerEmail = value;
    };
    /**
     * Sets the postBuffer property value. The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.
     * @param value Value to set for the postBuffer property.
     */
    public set postBuffer(value: Duration | undefined) {
        this._postBuffer = value;
    };
    /**
     * Sets the preBuffer property value. The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.
     * @param value Value to set for the preBuffer property.
     */
    public set preBuffer(value: Duration | undefined) {
        this._preBuffer = value;
    };
    /**
     * Sets the price property value. The regular price for an appointment for the specified bookingService.
     * @param value Value to set for the price property.
     */
    public set price(value: number | undefined) {
        this._price = value;
    };
    /**
     * Sets the priceType property value. A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @param value Value to set for the priceType property.
     */
    public set priceType(value: BookingPriceType | undefined) {
        this._priceType = value;
    };
    /**
     * Sets the reminders property value. The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.
     * @param value Value to set for the reminders property.
     */
    public set reminders(value: BookingReminder[] | undefined) {
        this._reminders = value;
    };
    /**
     * Sets the selfServiceAppointmentId property value. An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. Only supported for appointment if maxAttendeeCount is 1.
     * @param value Value to set for the selfServiceAppointmentId property.
     */
    public set selfServiceAppointmentId(value: string | undefined) {
        this._selfServiceAppointmentId = value;
    };
    /**
     * Sets the serviceId property value. The ID of the bookingService associated with this appointment.
     * @param value Value to set for the serviceId property.
     */
    public set serviceId(value: string | undefined) {
        this._serviceId = value;
    };
    /**
     * Sets the serviceLocation property value. The location where the service is delivered.
     * @param value Value to set for the serviceLocation property.
     */
    public set serviceLocation(value: Location | undefined) {
        this._serviceLocation = value;
    };
    /**
     * Sets the serviceName property value. The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.
     * @param value Value to set for the serviceName property.
     */
    public set serviceName(value: string | undefined) {
        this._serviceName = value;
    };
    /**
     * Sets the serviceNotes property value. Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.
     * @param value Value to set for the serviceNotes property.
     */
    public set serviceNotes(value: string | undefined) {
        this._serviceNotes = value;
    };
    /**
     * Sets the smsNotificationsEnabled property value. If true, indicates SMS notifications will be sent to the customers for the appointment. Default value is false.
     * @param value Value to set for the smsNotificationsEnabled property.
     */
    public set smsNotificationsEnabled(value: boolean | undefined) {
        this._smsNotificationsEnabled = value;
    };
    /**
     * Sets the staffMemberIds property value. The ID of each bookingStaffMember who is scheduled in this appointment.
     * @param value Value to set for the staffMemberIds property.
     */
    public set staffMemberIds(value: string[] | undefined) {
        this._staffMemberIds = value;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
}
