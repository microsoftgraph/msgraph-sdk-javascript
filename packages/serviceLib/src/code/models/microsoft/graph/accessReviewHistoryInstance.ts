import {AccessReviewHistoryStatus, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryInstance extends Entity implements Parsable {
    /** Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required.  */
    private _downloadUri?: string | undefined;
    /** Timestamp when this instance and associated data expires and the history is deleted. Required.  */
    private _expirationDateTime?: Date | undefined;
    /** Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required.  */
    private _fulfilledDateTime?: Date | undefined;
    /** Timestamp, reviews ending on or before this date will be included in the fetched history data.  */
    private _reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** Timestamp, reviews starting on or after this date will be included in the fetched history data.  */
    private _reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** Timestamp when the instance's history data is scheduled to be generated.  */
    private _runDateTime?: Date | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method.  */
    private _status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryInstance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the downloadUri property value. Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required.
     * @returns a string
     */
    public get downloadUri() {
        return this._downloadUri;
    };
    /**
     * Gets the expirationDateTime property value. Timestamp when this instance and associated data expires and the history is deleted. Required.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the fulfilledDateTime property value. Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required.
     * @returns a Date
     */
    public get fulfilledDateTime() {
        return this._fulfilledDateTime;
    };
    /**
     * Gets the reviewHistoryPeriodEndDateTime property value. Timestamp, reviews ending on or before this date will be included in the fetched history data.
     * @returns a Date
     */
    public get reviewHistoryPeriodEndDateTime() {
        return this._reviewHistoryPeriodEndDateTime;
    };
    /**
     * Gets the reviewHistoryPeriodStartDateTime property value. Timestamp, reviews starting on or after this date will be included in the fetched history data.
     * @returns a Date
     */
    public get reviewHistoryPeriodStartDateTime() {
        return this._reviewHistoryPeriodStartDateTime;
    };
    /**
     * Gets the runDateTime property value. Timestamp when the instance's history data is scheduled to be generated.
     * @returns a Date
     */
    public get runDateTime() {
        return this._runDateTime;
    };
    /**
     * Gets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method.
     * @returns a accessReviewHistoryStatus
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
            ["downloadUri", (o, n) => { (o as unknown as AccessReviewHistoryInstance).downloadUri = n.getStringValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as AccessReviewHistoryInstance).expirationDateTime = n.getDateValue(); }],
            ["fulfilledDateTime", (o, n) => { (o as unknown as AccessReviewHistoryInstance).fulfilledDateTime = n.getDateValue(); }],
            ["reviewHistoryPeriodEndDateTime", (o, n) => { (o as unknown as AccessReviewHistoryInstance).reviewHistoryPeriodEndDateTime = n.getDateValue(); }],
            ["reviewHistoryPeriodStartDateTime", (o, n) => { (o as unknown as AccessReviewHistoryInstance).reviewHistoryPeriodStartDateTime = n.getDateValue(); }],
            ["runDateTime", (o, n) => { (o as unknown as AccessReviewHistoryInstance).runDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as AccessReviewHistoryInstance).status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("downloadUri", this.downloadUri);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("fulfilledDateTime", this.fulfilledDateTime);
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        writer.writeDateValue("runDateTime", this.runDateTime);
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
    };
    /**
     * Sets the downloadUri property value. Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required.
     * @param value Value to set for the downloadUri property.
     */
    public set downloadUri(value: string | undefined) {
        this._downloadUri = value;
    };
    /**
     * Sets the expirationDateTime property value. Timestamp when this instance and associated data expires and the history is deleted. Required.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the fulfilledDateTime property value. Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required.
     * @param value Value to set for the fulfilledDateTime property.
     */
    public set fulfilledDateTime(value: Date | undefined) {
        this._fulfilledDateTime = value;
    };
    /**
     * Sets the reviewHistoryPeriodEndDateTime property value. Timestamp, reviews ending on or before this date will be included in the fetched history data.
     * @param value Value to set for the reviewHistoryPeriodEndDateTime property.
     */
    public set reviewHistoryPeriodEndDateTime(value: Date | undefined) {
        this._reviewHistoryPeriodEndDateTime = value;
    };
    /**
     * Sets the reviewHistoryPeriodStartDateTime property value. Timestamp, reviews starting on or after this date will be included in the fetched history data.
     * @param value Value to set for the reviewHistoryPeriodStartDateTime property.
     */
    public set reviewHistoryPeriodStartDateTime(value: Date | undefined) {
        this._reviewHistoryPeriodStartDateTime = value;
    };
    /**
     * Sets the runDateTime property value. Timestamp when the instance's history data is scheduled to be generated.
     * @param value Value to set for the runDateTime property.
     */
    public set runDateTime(value: Date | undefined) {
        this._runDateTime = value;
    };
    /**
     * Sets the status property value. Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method.
     * @param value Value to set for the status property.
     */
    public set status(value: AccessReviewHistoryStatus | undefined) {
        this._status = value;
    };
}
