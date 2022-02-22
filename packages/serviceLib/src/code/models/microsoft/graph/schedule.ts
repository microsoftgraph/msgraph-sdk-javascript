import {Entity, OfferShiftRequest, OpenShift, OpenShiftChangeRequest, OperationStatus, SchedulingGroup, Shift, SwapShiftsChangeRequest, TimeOff, TimeOffReason, TimeOffRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Schedule extends Entity implements Parsable {
    /** Indicates whether the schedule is enabled for the team. Required.  */
    private _enabled?: boolean | undefined;
    private _offerShiftRequests?: OfferShiftRequest[] | undefined;
    /** Indicates whether offer shift requests are enabled for the schedule.  */
    private _offerShiftRequestsEnabled?: boolean | undefined;
    private _openShiftChangeRequests?: OpenShiftChangeRequest[] | undefined;
    private _openShifts?: OpenShift[] | undefined;
    /** Indicates whether open shifts are enabled for the schedule.  */
    private _openShiftsEnabled?: boolean | undefined;
    /** The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.  */
    private _provisionStatus?: OperationStatus | undefined;
    /** Additional information about why schedule provisioning failed.  */
    private _provisionStatusCode?: string | undefined;
    /** The logical grouping of users in the schedule (usually by role).  */
    private _schedulingGroups?: SchedulingGroup[] | undefined;
    /** The shifts in the schedule.  */
    private _shifts?: Shift[] | undefined;
    private _swapShiftsChangeRequests?: SwapShiftsChangeRequest[] | undefined;
    /** Indicates whether swap shifts requests are enabled for the schedule.  */
    private _swapShiftsRequestsEnabled?: boolean | undefined;
    /** Indicates whether time clock is enabled for the schedule.  */
    private _timeClockEnabled?: boolean | undefined;
    /** The set of reasons for a time off in the schedule.  */
    private _timeOffReasons?: TimeOffReason[] | undefined;
    private _timeOffRequests?: TimeOffRequest[] | undefined;
    /** Indicates whether time off requests are enabled for the schedule.  */
    private _timeOffRequestsEnabled?: boolean | undefined;
    /** The instances of times off in the schedule.  */
    private _timesOff?: TimeOff[] | undefined;
    /** Indicates the time zone of the schedule team using tz database format. Required.  */
    private _timeZone?: string | undefined;
    private _workforceIntegrationIds?: string[] | undefined;
    /**
     * Instantiates a new schedule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Gets the offerShiftRequests property value. 
     * @returns a offerShiftRequest
     */
    public get offerShiftRequests() {
        return this._offerShiftRequests;
    };
    /**
     * Gets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @returns a boolean
     */
    public get offerShiftRequestsEnabled() {
        return this._offerShiftRequestsEnabled;
    };
    /**
     * Gets the openShiftChangeRequests property value. 
     * @returns a openShiftChangeRequest
     */
    public get openShiftChangeRequests() {
        return this._openShiftChangeRequests;
    };
    /**
     * Gets the openShifts property value. 
     * @returns a openShift
     */
    public get openShifts() {
        return this._openShifts;
    };
    /**
     * Gets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @returns a boolean
     */
    public get openShiftsEnabled() {
        return this._openShiftsEnabled;
    };
    /**
     * Gets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @returns a operationStatus
     */
    public get provisionStatus() {
        return this._provisionStatus;
    };
    /**
     * Gets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @returns a string
     */
    public get provisionStatusCode() {
        return this._provisionStatusCode;
    };
    /**
     * Gets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @returns a schedulingGroup
     */
    public get schedulingGroups() {
        return this._schedulingGroups;
    };
    /**
     * Gets the shifts property value. The shifts in the schedule.
     * @returns a shift
     */
    public get shifts() {
        return this._shifts;
    };
    /**
     * Gets the swapShiftsChangeRequests property value. 
     * @returns a swapShiftsChangeRequest
     */
    public get swapShiftsChangeRequests() {
        return this._swapShiftsChangeRequests;
    };
    /**
     * Gets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @returns a boolean
     */
    public get swapShiftsRequestsEnabled() {
        return this._swapShiftsRequestsEnabled;
    };
    /**
     * Gets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @returns a boolean
     */
    public get timeClockEnabled() {
        return this._timeClockEnabled;
    };
    /**
     * Gets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @returns a timeOffReason
     */
    public get timeOffReasons() {
        return this._timeOffReasons;
    };
    /**
     * Gets the timeOffRequests property value. 
     * @returns a timeOffRequest
     */
    public get timeOffRequests() {
        return this._timeOffRequests;
    };
    /**
     * Gets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @returns a boolean
     */
    public get timeOffRequestsEnabled() {
        return this._timeOffRequestsEnabled;
    };
    /**
     * Gets the timesOff property value. The instances of times off in the schedule.
     * @returns a timeOff
     */
    public get timesOff() {
        return this._timesOff;
    };
    /**
     * Gets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Gets the workforceIntegrationIds property value. 
     * @returns a string
     */
    public get workforceIntegrationIds() {
        return this._workforceIntegrationIds;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["enabled", (o, n) => { (o as unknown as Schedule).enabled = n.getBooleanValue(); }],
            ["offerShiftRequests", (o, n) => { (o as unknown as Schedule).offerShiftRequests = n.getCollectionOfObjectValues<OfferShiftRequest>(OfferShiftRequest); }],
            ["offerShiftRequestsEnabled", (o, n) => { (o as unknown as Schedule).offerShiftRequestsEnabled = n.getBooleanValue(); }],
            ["openShiftChangeRequests", (o, n) => { (o as unknown as Schedule).openShiftChangeRequests = n.getCollectionOfObjectValues<OpenShiftChangeRequest>(OpenShiftChangeRequest); }],
            ["openShifts", (o, n) => { (o as unknown as Schedule).openShifts = n.getCollectionOfObjectValues<OpenShift>(OpenShift); }],
            ["openShiftsEnabled", (o, n) => { (o as unknown as Schedule).openShiftsEnabled = n.getBooleanValue(); }],
            ["provisionStatus", (o, n) => { (o as unknown as Schedule).provisionStatus = n.getEnumValue<OperationStatus>(OperationStatus); }],
            ["provisionStatusCode", (o, n) => { (o as unknown as Schedule).provisionStatusCode = n.getStringValue(); }],
            ["schedulingGroups", (o, n) => { (o as unknown as Schedule).schedulingGroups = n.getCollectionOfObjectValues<SchedulingGroup>(SchedulingGroup); }],
            ["shifts", (o, n) => { (o as unknown as Schedule).shifts = n.getCollectionOfObjectValues<Shift>(Shift); }],
            ["swapShiftsChangeRequests", (o, n) => { (o as unknown as Schedule).swapShiftsChangeRequests = n.getCollectionOfObjectValues<SwapShiftsChangeRequest>(SwapShiftsChangeRequest); }],
            ["swapShiftsRequestsEnabled", (o, n) => { (o as unknown as Schedule).swapShiftsRequestsEnabled = n.getBooleanValue(); }],
            ["timeClockEnabled", (o, n) => { (o as unknown as Schedule).timeClockEnabled = n.getBooleanValue(); }],
            ["timeOffReasons", (o, n) => { (o as unknown as Schedule).timeOffReasons = n.getCollectionOfObjectValues<TimeOffReason>(TimeOffReason); }],
            ["timeOffRequests", (o, n) => { (o as unknown as Schedule).timeOffRequests = n.getCollectionOfObjectValues<TimeOffRequest>(TimeOffRequest); }],
            ["timeOffRequestsEnabled", (o, n) => { (o as unknown as Schedule).timeOffRequestsEnabled = n.getBooleanValue(); }],
            ["timesOff", (o, n) => { (o as unknown as Schedule).timesOff = n.getCollectionOfObjectValues<TimeOff>(TimeOff); }],
            ["timeZone", (o, n) => { (o as unknown as Schedule).timeZone = n.getStringValue(); }],
            ["workforceIntegrationIds", (o, n) => { (o as unknown as Schedule).workforceIntegrationIds = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeCollectionOfObjectValues<OfferShiftRequest>("offerShiftRequests", this.offerShiftRequests);
        writer.writeBooleanValue("offerShiftRequestsEnabled", this.offerShiftRequestsEnabled);
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequest>("openShiftChangeRequests", this.openShiftChangeRequests);
        writer.writeCollectionOfObjectValues<OpenShift>("openShifts", this.openShifts);
        writer.writeBooleanValue("openShiftsEnabled", this.openShiftsEnabled);
        writer.writeEnumValue<OperationStatus>("provisionStatus", this.provisionStatus);
        writer.writeStringValue("provisionStatusCode", this.provisionStatusCode);
        writer.writeCollectionOfObjectValues<SchedulingGroup>("schedulingGroups", this.schedulingGroups);
        writer.writeCollectionOfObjectValues<Shift>("shifts", this.shifts);
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequest>("swapShiftsChangeRequests", this.swapShiftsChangeRequests);
        writer.writeBooleanValue("swapShiftsRequestsEnabled", this.swapShiftsRequestsEnabled);
        writer.writeBooleanValue("timeClockEnabled", this.timeClockEnabled);
        writer.writeCollectionOfObjectValues<TimeOffReason>("timeOffReasons", this.timeOffReasons);
        writer.writeCollectionOfObjectValues<TimeOffRequest>("timeOffRequests", this.timeOffRequests);
        writer.writeBooleanValue("timeOffRequestsEnabled", this.timeOffRequestsEnabled);
        writer.writeCollectionOfObjectValues<TimeOff>("timesOff", this.timesOff);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", this.workforceIntegrationIds);
    };
    /**
     * Sets the enabled property value. Indicates whether the schedule is enabled for the team. Required.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * Sets the offerShiftRequests property value. 
     * @param value Value to set for the offerShiftRequests property.
     */
    public set offerShiftRequests(value: OfferShiftRequest[] | undefined) {
        this._offerShiftRequests = value;
    };
    /**
     * Sets the offerShiftRequestsEnabled property value. Indicates whether offer shift requests are enabled for the schedule.
     * @param value Value to set for the offerShiftRequestsEnabled property.
     */
    public set offerShiftRequestsEnabled(value: boolean | undefined) {
        this._offerShiftRequestsEnabled = value;
    };
    /**
     * Sets the openShiftChangeRequests property value. 
     * @param value Value to set for the openShiftChangeRequests property.
     */
    public set openShiftChangeRequests(value: OpenShiftChangeRequest[] | undefined) {
        this._openShiftChangeRequests = value;
    };
    /**
     * Sets the openShifts property value. 
     * @param value Value to set for the openShifts property.
     */
    public set openShifts(value: OpenShift[] | undefined) {
        this._openShifts = value;
    };
    /**
     * Sets the openShiftsEnabled property value. Indicates whether open shifts are enabled for the schedule.
     * @param value Value to set for the openShiftsEnabled property.
     */
    public set openShiftsEnabled(value: boolean | undefined) {
        this._openShiftsEnabled = value;
    };
    /**
     * Sets the provisionStatus property value. The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
     * @param value Value to set for the provisionStatus property.
     */
    public set provisionStatus(value: OperationStatus | undefined) {
        this._provisionStatus = value;
    };
    /**
     * Sets the provisionStatusCode property value. Additional information about why schedule provisioning failed.
     * @param value Value to set for the provisionStatusCode property.
     */
    public set provisionStatusCode(value: string | undefined) {
        this._provisionStatusCode = value;
    };
    /**
     * Sets the schedulingGroups property value. The logical grouping of users in the schedule (usually by role).
     * @param value Value to set for the schedulingGroups property.
     */
    public set schedulingGroups(value: SchedulingGroup[] | undefined) {
        this._schedulingGroups = value;
    };
    /**
     * Sets the shifts property value. The shifts in the schedule.
     * @param value Value to set for the shifts property.
     */
    public set shifts(value: Shift[] | undefined) {
        this._shifts = value;
    };
    /**
     * Sets the swapShiftsChangeRequests property value. 
     * @param value Value to set for the swapShiftsChangeRequests property.
     */
    public set swapShiftsChangeRequests(value: SwapShiftsChangeRequest[] | undefined) {
        this._swapShiftsChangeRequests = value;
    };
    /**
     * Sets the swapShiftsRequestsEnabled property value. Indicates whether swap shifts requests are enabled for the schedule.
     * @param value Value to set for the swapShiftsRequestsEnabled property.
     */
    public set swapShiftsRequestsEnabled(value: boolean | undefined) {
        this._swapShiftsRequestsEnabled = value;
    };
    /**
     * Sets the timeClockEnabled property value. Indicates whether time clock is enabled for the schedule.
     * @param value Value to set for the timeClockEnabled property.
     */
    public set timeClockEnabled(value: boolean | undefined) {
        this._timeClockEnabled = value;
    };
    /**
     * Sets the timeOffReasons property value. The set of reasons for a time off in the schedule.
     * @param value Value to set for the timeOffReasons property.
     */
    public set timeOffReasons(value: TimeOffReason[] | undefined) {
        this._timeOffReasons = value;
    };
    /**
     * Sets the timeOffRequests property value. 
     * @param value Value to set for the timeOffRequests property.
     */
    public set timeOffRequests(value: TimeOffRequest[] | undefined) {
        this._timeOffRequests = value;
    };
    /**
     * Sets the timeOffRequestsEnabled property value. Indicates whether time off requests are enabled for the schedule.
     * @param value Value to set for the timeOffRequestsEnabled property.
     */
    public set timeOffRequestsEnabled(value: boolean | undefined) {
        this._timeOffRequestsEnabled = value;
    };
    /**
     * Sets the timesOff property value. The instances of times off in the schedule.
     * @param value Value to set for the timesOff property.
     */
    public set timesOff(value: TimeOff[] | undefined) {
        this._timesOff = value;
    };
    /**
     * Sets the timeZone property value. Indicates the time zone of the schedule team using tz database format. Required.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
    /**
     * Sets the workforceIntegrationIds property value. 
     * @param value Value to set for the workforceIntegrationIds property.
     */
    public set workforceIntegrationIds(value: string[] | undefined) {
        this._workforceIntegrationIds = value;
    };
}
