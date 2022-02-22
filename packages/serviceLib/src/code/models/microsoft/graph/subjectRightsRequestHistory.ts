import {IdentitySet, SubjectRightsRequestStage, SubjectRightsRequestStageStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestHistory implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Identity of the user who changed the  subject rights request.  */
    private _changedBy?: IdentitySet | undefined;
    /** Data and time when the entity was changed.  */
    private _eventDateTime?: Date | undefined;
    /** The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.  */
    private _stage?: SubjectRightsRequestStage | undefined;
    /** The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.  */
    private _stageStatus?: SubjectRightsRequestStageStatus | undefined;
    /** Type of history.  */
    private _type?: string | undefined;
    /**
     * Instantiates a new subjectRightsRequestHistory and sets the default values.
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
     * Gets the changedBy property value. Identity of the user who changed the  subject rights request.
     * @returns a identitySet
     */
    public get changedBy() {
        return this._changedBy;
    };
    /**
     * Gets the eventDateTime property value. Data and time when the entity was changed.
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Gets the stage property value. The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @returns a subjectRightsRequestStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Gets the stageStatus property value. The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @returns a subjectRightsRequestStageStatus
     */
    public get stageStatus() {
        return this._stageStatus;
    };
    /**
     * Gets the type property value. Type of history.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["changedBy", (o, n) => { (o as unknown as SubjectRightsRequestHistory).changedBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["eventDateTime", (o, n) => { (o as unknown as SubjectRightsRequestHistory).eventDateTime = n.getDateValue(); }],
            ["stage", (o, n) => { (o as unknown as SubjectRightsRequestHistory).stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); }],
            ["stageStatus", (o, n) => { (o as unknown as SubjectRightsRequestHistory).stageStatus = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); }],
            ["type", (o, n) => { (o as unknown as SubjectRightsRequestHistory).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("changedBy", this.changedBy);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", this.stage);
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("stageStatus", this.stageStatus);
        writer.writeStringValue("type", this.type);
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
     * Sets the changedBy property value. Identity of the user who changed the  subject rights request.
     * @param value Value to set for the changedBy property.
     */
    public set changedBy(value: IdentitySet | undefined) {
        this._changedBy = value;
    };
    /**
     * Sets the eventDateTime property value. Data and time when the entity was changed.
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
    /**
     * Sets the stage property value. The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: SubjectRightsRequestStage | undefined) {
        this._stage = value;
    };
    /**
     * Sets the stageStatus property value. The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     * @param value Value to set for the stageStatus property.
     */
    public set stageStatus(value: SubjectRightsRequestStageStatus | undefined) {
        this._stageStatus = value;
    };
    /**
     * Sets the type property value. Type of history.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
