import {CallRecord} from './callRecords/';
import {createCallRecordFromDiscriminatorValue} from './callRecords/createCallRecordFromDiscriminatorValue';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {Call, Entity, OnlineMeeting, Presence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton.  */
export class CloudCommunications extends Entity implements Parsable {
    private _callRecords?: CallRecord[] | undefined;
    private _calls?: Call[] | undefined;
    private _onlineMeetings?: OnlineMeeting[] | undefined;
    private _presences?: Presence[] | undefined;
    /**
     * Gets the callRecords property value. 
     * @returns a callRecord
     */
    public get callRecords() {
        return this._callRecords;
    };
    /**
     * Sets the callRecords property value. 
     * @param value Value to set for the callRecords property.
     */
    public set callRecords(value: CallRecord[] | undefined) {
        this._callRecords = value;
    };
    /**
     * Gets the calls property value. 
     * @returns a call
     */
    public get calls() {
        return this._calls;
    };
    /**
     * Sets the calls property value. 
     * @param value Value to set for the calls property.
     */
    public set calls(value: Call[] | undefined) {
        this._calls = value;
    };
    /**
     * Instantiates a new cloudCommunications and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["callRecords", (o, n) => { (o as unknown as CloudCommunications).callRecords = n.getCollectionOfObjectValues<CallRecord>(createCallRecordFromDiscriminatorValue); }],
            ["calls", (o, n) => { (o as unknown as CloudCommunications).calls = n.getCollectionOfObjectValues<Call>(createCallFromDiscriminatorValue); }],
            ["onlineMeetings", (o, n) => { (o as unknown as CloudCommunications).onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); }],
            ["presences", (o, n) => { (o as unknown as CloudCommunications).presences = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the onlineMeetings property value. 
     * @returns a onlineMeeting
     */
    public get onlineMeetings() {
        return this._onlineMeetings;
    };
    /**
     * Sets the onlineMeetings property value. 
     * @param value Value to set for the onlineMeetings property.
     */
    public set onlineMeetings(value: OnlineMeeting[] | undefined) {
        this._onlineMeetings = value;
    };
    /**
     * Gets the presences property value. 
     * @returns a presence
     */
    public get presences() {
        return this._presences;
    };
    /**
     * Sets the presences property value. 
     * @param value Value to set for the presences property.
     */
    public set presences(value: Presence[] | undefined) {
        this._presences = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<CallRecord>("callRecords", this.callRecords);
        writer.writeCollectionOfObjectValues<Call>("calls", this.calls);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", this.onlineMeetings);
        writer.writeCollectionOfObjectValues<Presence>("presences", this.presences);
    };
}
