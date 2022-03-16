import {createLocationConstraintItemFromDiscriminatorValue} from './createLocationConstraintItemFromDiscriminatorValue';
import {LocationConstraintItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocationConstraint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations.  */
    private _isRequired?: boolean | undefined;
    /** Constraint information for one or more locations that the client requests for the meeting.  */
    private _locations?: LocationConstraintItem[] | undefined;
    /** The client requests the service to suggest one or more meeting locations.  */
    private _suggestLocation?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new locationConstraint and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["isRequired", (o, n) => { (o as unknown as LocationConstraint).isRequired = n.getBooleanValue(); }],
            ["locations", (o, n) => { (o as unknown as LocationConstraint).locations = n.getCollectionOfObjectValues<LocationConstraintItem>(createLocationConstraintItemFromDiscriminatorValue); }],
            ["suggestLocation", (o, n) => { (o as unknown as LocationConstraint).suggestLocation = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the isRequired property value. The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Sets the isRequired property value. The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
    };
    /**
     * Gets the locations property value. Constraint information for one or more locations that the client requests for the meeting.
     * @returns a locationConstraintItem
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. Constraint information for one or more locations that the client requests for the meeting.
     * @param value Value to set for the locations property.
     */
    public set locations(value: LocationConstraintItem[] | undefined) {
        this._locations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeCollectionOfObjectValues<LocationConstraintItem>("locations", this.locations);
        writer.writeBooleanValue("suggestLocation", this.suggestLocation);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the suggestLocation property value. The client requests the service to suggest one or more meeting locations.
     * @returns a boolean
     */
    public get suggestLocation() {
        return this._suggestLocation;
    };
    /**
     * Sets the suggestLocation property value. The client requests the service to suggest one or more meeting locations.
     * @param value Value to set for the suggestLocation property.
     */
    public set suggestLocation(value: boolean | undefined) {
        this._suggestLocation = value;
    };
}
