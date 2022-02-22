import {ScheduleEntityTheme} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleEntity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _endDateTime?: Date | undefined;
    private _startDateTime?: Date | undefined;
    private _theme?: ScheduleEntityTheme | undefined;
    /**
     * Instantiates a new scheduleEntity and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the theme property value. 
     * @returns a scheduleEntityTheme
     */
    public get theme() {
        return this._theme;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endDateTime", (o, n) => { (o as unknown as ScheduleEntity).endDateTime = n.getDateValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as ScheduleEntity).startDateTime = n.getDateValue(); }],
            ["theme", (o, n) => { (o as unknown as ScheduleEntity).theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the theme property value. 
     * @param value Value to set for the theme property.
     */
    public set theme(value: ScheduleEntityTheme | undefined) {
        this._theme = value;
    };
}
