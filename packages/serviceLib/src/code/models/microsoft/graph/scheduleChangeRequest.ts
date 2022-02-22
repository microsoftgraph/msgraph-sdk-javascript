import {ChangeTrackedEntity, ScheduleChangeRequestActor, ScheduleChangeState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleChangeRequest extends ChangeTrackedEntity implements Parsable {
    private _assignedTo?: ScheduleChangeRequestActor | undefined;
    private _managerActionDateTime?: Date | undefined;
    private _managerActionMessage?: string | undefined;
    private _managerUserId?: string | undefined;
    private _senderDateTime?: Date | undefined;
    private _senderMessage?: string | undefined;
    private _senderUserId?: string | undefined;
    private _state?: ScheduleChangeState | undefined;
    /**
     * Instantiates a new scheduleChangeRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignedTo property value. 
     * @returns a scheduleChangeRequestActor
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Gets the managerActionDateTime property value. 
     * @returns a Date
     */
    public get managerActionDateTime() {
        return this._managerActionDateTime;
    };
    /**
     * Gets the managerActionMessage property value. 
     * @returns a string
     */
    public get managerActionMessage() {
        return this._managerActionMessage;
    };
    /**
     * Gets the managerUserId property value. 
     * @returns a string
     */
    public get managerUserId() {
        return this._managerUserId;
    };
    /**
     * Gets the senderDateTime property value. 
     * @returns a Date
     */
    public get senderDateTime() {
        return this._senderDateTime;
    };
    /**
     * Gets the senderMessage property value. 
     * @returns a string
     */
    public get senderMessage() {
        return this._senderMessage;
    };
    /**
     * Gets the senderUserId property value. 
     * @returns a string
     */
    public get senderUserId() {
        return this._senderUserId;
    };
    /**
     * Gets the state property value. 
     * @returns a scheduleChangeState
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignedTo", (o, n) => { (o as unknown as ScheduleChangeRequest).assignedTo = n.getEnumValue<ScheduleChangeRequestActor>(ScheduleChangeRequestActor); }],
            ["managerActionDateTime", (o, n) => { (o as unknown as ScheduleChangeRequest).managerActionDateTime = n.getDateValue(); }],
            ["managerActionMessage", (o, n) => { (o as unknown as ScheduleChangeRequest).managerActionMessage = n.getStringValue(); }],
            ["managerUserId", (o, n) => { (o as unknown as ScheduleChangeRequest).managerUserId = n.getStringValue(); }],
            ["senderDateTime", (o, n) => { (o as unknown as ScheduleChangeRequest).senderDateTime = n.getDateValue(); }],
            ["senderMessage", (o, n) => { (o as unknown as ScheduleChangeRequest).senderMessage = n.getStringValue(); }],
            ["senderUserId", (o, n) => { (o as unknown as ScheduleChangeRequest).senderUserId = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as ScheduleChangeRequest).state = n.getEnumValue<ScheduleChangeState>(ScheduleChangeState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ScheduleChangeRequestActor>("assignedTo", this.assignedTo);
        writer.writeDateValue("managerActionDateTime", this.managerActionDateTime);
        writer.writeStringValue("managerActionMessage", this.managerActionMessage);
        writer.writeStringValue("managerUserId", this.managerUserId);
        writer.writeDateValue("senderDateTime", this.senderDateTime);
        writer.writeStringValue("senderMessage", this.senderMessage);
        writer.writeStringValue("senderUserId", this.senderUserId);
        writer.writeEnumValue<ScheduleChangeState>("state", this.state);
    };
    /**
     * Sets the assignedTo property value. 
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: ScheduleChangeRequestActor | undefined) {
        this._assignedTo = value;
    };
    /**
     * Sets the managerActionDateTime property value. 
     * @param value Value to set for the managerActionDateTime property.
     */
    public set managerActionDateTime(value: Date | undefined) {
        this._managerActionDateTime = value;
    };
    /**
     * Sets the managerActionMessage property value. 
     * @param value Value to set for the managerActionMessage property.
     */
    public set managerActionMessage(value: string | undefined) {
        this._managerActionMessage = value;
    };
    /**
     * Sets the managerUserId property value. 
     * @param value Value to set for the managerUserId property.
     */
    public set managerUserId(value: string | undefined) {
        this._managerUserId = value;
    };
    /**
     * Sets the senderDateTime property value. 
     * @param value Value to set for the senderDateTime property.
     */
    public set senderDateTime(value: Date | undefined) {
        this._senderDateTime = value;
    };
    /**
     * Sets the senderMessage property value. 
     * @param value Value to set for the senderMessage property.
     */
    public set senderMessage(value: string | undefined) {
        this._senderMessage = value;
    };
    /**
     * Sets the senderUserId property value. 
     * @param value Value to set for the senderUserId property.
     */
    public set senderUserId(value: string | undefined) {
        this._senderUserId = value;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: ScheduleChangeState | undefined) {
        this._state = value;
    };
}
