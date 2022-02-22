import {Entity, IdentitySet, ThreatAssessmentContentType, ThreatAssessmentRequestSource, ThreatAssessmentResult, ThreatAssessmentStatus, ThreatCategory, ThreatExpectedAssessment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThreatAssessmentRequest extends Entity implements Parsable {
    /** The threat category. Possible values are: spam, phishing, malware.  */
    private _category?: ThreatCategory | undefined;
    /** The content type of threat assessment. Possible values are: mail, url, file.  */
    private _contentType?: ThreatAssessmentContentType | undefined;
    /** The threat assessment request creator.  */
    private _createdBy?: IdentitySet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _createdDateTime?: Date | undefined;
    /** The expected assessment from submitter. Possible values are: block, unblock.  */
    private _expectedAssessment?: ThreatExpectedAssessment | undefined;
    /** The source of the threat assessment request. Possible values are: administrator.  */
    private _requestSource?: ThreatAssessmentRequestSource | undefined;
    /** A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.  */
    private _results?: ThreatAssessmentResult[] | undefined;
    /** The assessment process status. Possible values are: pending, completed.  */
    private _status?: ThreatAssessmentStatus | undefined;
    /**
     * Instantiates a new threatAssessmentRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the category property value. The threat category. Possible values are: spam, phishing, malware.
     * @returns a threatCategory
     */
    public get category() {
        return this._category;
    };
    /**
     * Gets the contentType property value. The content type of threat assessment. Possible values are: mail, url, file.
     * @returns a threatAssessmentContentType
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the createdBy property value. The threat assessment request creator.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the expectedAssessment property value. The expected assessment from submitter. Possible values are: block, unblock.
     * @returns a threatExpectedAssessment
     */
    public get expectedAssessment() {
        return this._expectedAssessment;
    };
    /**
     * Gets the requestSource property value. The source of the threat assessment request. Possible values are: administrator.
     * @returns a threatAssessmentRequestSource
     */
    public get requestSource() {
        return this._requestSource;
    };
    /**
     * Gets the results property value. A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
     * @returns a threatAssessmentResult
     */
    public get results() {
        return this._results;
    };
    /**
     * Gets the status property value. The assessment process status. Possible values are: pending, completed.
     * @returns a threatAssessmentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["category", (o, n) => { (o as unknown as ThreatAssessmentRequest).category = n.getEnumValue<ThreatCategory>(ThreatCategory); }],
            ["contentType", (o, n) => { (o as unknown as ThreatAssessmentRequest).contentType = n.getEnumValue<ThreatAssessmentContentType>(ThreatAssessmentContentType); }],
            ["createdBy", (o, n) => { (o as unknown as ThreatAssessmentRequest).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["createdDateTime", (o, n) => { (o as unknown as ThreatAssessmentRequest).createdDateTime = n.getDateValue(); }],
            ["expectedAssessment", (o, n) => { (o as unknown as ThreatAssessmentRequest).expectedAssessment = n.getEnumValue<ThreatExpectedAssessment>(ThreatExpectedAssessment); }],
            ["requestSource", (o, n) => { (o as unknown as ThreatAssessmentRequest).requestSource = n.getEnumValue<ThreatAssessmentRequestSource>(ThreatAssessmentRequestSource); }],
            ["results", (o, n) => { (o as unknown as ThreatAssessmentRequest).results = n.getCollectionOfObjectValues<ThreatAssessmentResult>(ThreatAssessmentResult); }],
            ["status", (o, n) => { (o as unknown as ThreatAssessmentRequest).status = n.getEnumValue<ThreatAssessmentStatus>(ThreatAssessmentStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ThreatCategory>("category", this.category);
        writer.writeEnumValue<ThreatAssessmentContentType>("contentType", this.contentType);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeEnumValue<ThreatExpectedAssessment>("expectedAssessment", this.expectedAssessment);
        writer.writeEnumValue<ThreatAssessmentRequestSource>("requestSource", this.requestSource);
        writer.writeCollectionOfObjectValues<ThreatAssessmentResult>("results", this.results);
        writer.writeEnumValue<ThreatAssessmentStatus>("status", this.status);
    };
    /**
     * Sets the category property value. The threat category. Possible values are: spam, phishing, malware.
     * @param value Value to set for the category property.
     */
    public set category(value: ThreatCategory | undefined) {
        this._category = value;
    };
    /**
     * Sets the contentType property value. The content type of threat assessment. Possible values are: mail, url, file.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ThreatAssessmentContentType | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the createdBy property value. The threat assessment request creator.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the expectedAssessment property value. The expected assessment from submitter. Possible values are: block, unblock.
     * @param value Value to set for the expectedAssessment property.
     */
    public set expectedAssessment(value: ThreatExpectedAssessment | undefined) {
        this._expectedAssessment = value;
    };
    /**
     * Sets the requestSource property value. The source of the threat assessment request. Possible values are: administrator.
     * @param value Value to set for the requestSource property.
     */
    public set requestSource(value: ThreatAssessmentRequestSource | undefined) {
        this._requestSource = value;
    };
    /**
     * Sets the results property value. A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.
     * @param value Value to set for the results property.
     */
    public set results(value: ThreatAssessmentResult[] | undefined) {
        this._results = value;
    };
    /**
     * Sets the status property value. The assessment process status. Possible values are: pending, completed.
     * @param value Value to set for the status property.
     */
    public set status(value: ThreatAssessmentStatus | undefined) {
        this._status = value;
    };
}
