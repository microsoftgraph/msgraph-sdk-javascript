import {createFreeBusyErrorFromDiscriminatorValue} from './createFreeBusyErrorFromDiscriminatorValue';
import {createScheduleItemFromDiscriminatorValue} from './createScheduleItemFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {FreeBusyError, ScheduleItem, WorkingHours} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere.  */
    private _availabilityView?: string | undefined;
    /** Error information from attempting to get the availability of the user, distribution list, or resource.  */
    private _error_escaped?: FreeBusyError | undefined;
    /** An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.  */
    private _scheduleId?: string | undefined;
    /** Contains the items that describe the availability of the user or resource.  */
    private _scheduleItems?: ScheduleItem[] | undefined;
    /** The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings.  */
    private _workingHours?: WorkingHours | undefined;
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
     * Gets the availabilityView property value. Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere.
     * @returns a string
     */
    public get availabilityView() {
        return this._availabilityView;
    };
    /**
     * Sets the availabilityView property value. Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots. Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working elsewhere.
     * @param value Value to set for the availabilityView property.
     */
    public set availabilityView(value: string | undefined) {
        this._availabilityView = value;
    };
    /**
     * Instantiates a new scheduleInformation and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the error property value. Error information from attempting to get the availability of the user, distribution list, or resource.
     * @returns a freeBusyError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Error information from attempting to get the availability of the user, distribution list, or resource.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: FreeBusyError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["availabilityView", (o, n) => { (o as unknown as ScheduleInformation).availabilityView = n.getStringValue(); }],
            ["error", (o, n) => { (o as unknown as ScheduleInformation).error_escaped = n.getObjectValue<FreeBusyError>(createFreeBusyErrorFromDiscriminatorValue); }],
            ["scheduleId", (o, n) => { (o as unknown as ScheduleInformation).scheduleId = n.getStringValue(); }],
            ["scheduleItems", (o, n) => { (o as unknown as ScheduleInformation).scheduleItems = n.getCollectionOfObjectValues<ScheduleItem>(createScheduleItemFromDiscriminatorValue); }],
            ["workingHours", (o, n) => { (o as unknown as ScheduleInformation).workingHours = n.getObjectValue<WorkingHours>(createWorkingHoursFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the scheduleId property value. An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
     * @returns a string
     */
    public get scheduleId() {
        return this._scheduleId;
    };
    /**
     * Sets the scheduleId property value. An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
     * @param value Value to set for the scheduleId property.
     */
    public set scheduleId(value: string | undefined) {
        this._scheduleId = value;
    };
    /**
     * Gets the scheduleItems property value. Contains the items that describe the availability of the user or resource.
     * @returns a scheduleItem
     */
    public get scheduleItems() {
        return this._scheduleItems;
    };
    /**
     * Sets the scheduleItems property value. Contains the items that describe the availability of the user or resource.
     * @param value Value to set for the scheduleItems property.
     */
    public set scheduleItems(value: ScheduleItem[] | undefined) {
        this._scheduleItems = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("availabilityView", this.availabilityView);
        writer.writeObjectValue<FreeBusyError>("error", this.error_escaped);
        writer.writeStringValue("scheduleId", this.scheduleId);
        writer.writeCollectionOfObjectValues<ScheduleItem>("scheduleItems", this.scheduleItems);
        writer.writeObjectValue<WorkingHours>("workingHours", this.workingHours);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the workingHours property value. The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings.
     * @returns a workingHours
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The days of the week and hours in a specific time zone that the user works. These are set as part of the user's mailboxSettings.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        this._workingHours = value;
    };
}
