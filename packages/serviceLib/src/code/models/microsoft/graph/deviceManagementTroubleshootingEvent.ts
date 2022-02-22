import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementTroubleshootingEvent extends Entity implements Parsable {
    /** Id used for tracing the failure in the service.  */
    private _correlationId?: string | undefined;
    /** Time when the event occurred .  */
    private _eventDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceManagementTroubleshootingEvent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationId property value. Id used for tracing the failure in the service.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Gets the eventDateTime property value. Time when the event occurred .
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["correlationId", (o, n) => { (o as unknown as DeviceManagementTroubleshootingEvent).correlationId = n.getStringValue(); }],
            ["eventDateTime", (o, n) => { (o as unknown as DeviceManagementTroubleshootingEvent).eventDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
    };
    /**
     * Sets the correlationId property value. Id used for tracing the failure in the service.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Sets the eventDateTime property value. Time when the event occurred .
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
}
