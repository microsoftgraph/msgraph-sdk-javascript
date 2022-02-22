import {PublicError, SubjectRightsRequestStage, SubjectRightsRequestStageStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestStageDetail implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Describes the error, if any, for the current stage.  */
    private _error_escaped?: PublicError | undefined;
    /** The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.  */
    private _stage?: SubjectRightsRequestStage | undefined;
    /** Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.  */
    private _status?: SubjectRightsRequestStageStatus | undefined;
    /**
     * Instantiates a new subjectRightsRequestStageDetail and sets the default values.
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
     * Gets the error property value. Describes the error, if any, for the current stage.
     * @returns a publicError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Gets the stage property value. The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @returns a subjectRightsRequestStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Gets the status property value. Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @returns a subjectRightsRequestStageStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["error", (o, n) => { (o as unknown as SubjectRightsRequestStageDetail).error_escaped = n.getObjectValue<PublicError>(PublicError); }],
            ["stage", (o, n) => { (o as unknown as SubjectRightsRequestStageDetail).stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); }],
            ["status", (o, n) => { (o as unknown as SubjectRightsRequestStageDetail).status = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PublicError>("error", this.error_escaped);
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", this.stage);
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("status", this.status);
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
     * Sets the error property value. Describes the error, if any, for the current stage.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        this._error_escaped = value;
    };
    /**
     * Sets the stage property value. The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: SubjectRightsRequestStage | undefined) {
        this._stage = value;
    };
    /**
     * Sets the status property value. Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SubjectRightsRequestStageStatus | undefined) {
        this._status = value;
    };
}
