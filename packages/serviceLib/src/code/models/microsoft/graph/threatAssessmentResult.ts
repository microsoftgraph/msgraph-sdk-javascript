import {Entity, ThreatAssessmentResultType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThreatAssessmentResult extends Entity implements Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _createdDateTime?: Date | undefined;
    /** The result message for each threat assessment.  */
    private _message?: string | undefined;
    /** The threat assessment result type. Possible values are: checkPolicy, rescan.  */
    private _resultType?: ThreatAssessmentResultType | undefined;
    /**
     * Instantiates a new threatAssessmentResult and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the message property value. The result message for each threat assessment.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the resultType property value. The threat assessment result type. Possible values are: checkPolicy, rescan.
     * @returns a threatAssessmentResultType
     */
    public get resultType() {
        return this._resultType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as ThreatAssessmentResult).createdDateTime = n.getDateValue(); }],
            ["message", (o, n) => { (o as unknown as ThreatAssessmentResult).message = n.getStringValue(); }],
            ["resultType", (o, n) => { (o as unknown as ThreatAssessmentResult).resultType = n.getEnumValue<ThreatAssessmentResultType>(ThreatAssessmentResultType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("message", this.message);
        writer.writeEnumValue<ThreatAssessmentResultType>("resultType", this.resultType);
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the message property value. The result message for each threat assessment.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Sets the resultType property value. The threat assessment result type. Possible values are: checkPolicy, rescan.
     * @param value Value to set for the resultType property.
     */
    public set resultType(value: ThreatAssessmentResultType | undefined) {
        this._resultType = value;
    };
}
