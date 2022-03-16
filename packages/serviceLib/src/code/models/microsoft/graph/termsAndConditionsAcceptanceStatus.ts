import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {Entity, TermsAndConditions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditionsAcceptanceStatus extends Entity implements Parsable {
    /** DateTime when the terms were last accepted by the user.  */
    private _acceptedDateTime?: Date | undefined;
    /** Most recent version number of the T&C accepted by the user.  */
    private _acceptedVersion?: number | undefined;
    /** Navigation link to the terms and conditions that are assigned.  */
    private _termsAndConditions?: TermsAndConditions | undefined;
    /** Display name of the user whose acceptance the entity represents.  */
    private _userDisplayName?: string | undefined;
    /** The userPrincipalName of the User that accepted the term.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
     * @returns a Date
     */
    public get acceptedDateTime() {
        return this._acceptedDateTime;
    };
    /**
     * Sets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
     * @param value Value to set for the acceptedDateTime property.
     */
    public set acceptedDateTime(value: Date | undefined) {
        this._acceptedDateTime = value;
    };
    /**
     * Gets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
     * @returns a integer
     */
    public get acceptedVersion() {
        return this._acceptedVersion;
    };
    /**
     * Sets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
     * @param value Value to set for the acceptedVersion property.
     */
    public set acceptedVersion(value: number | undefined) {
        this._acceptedVersion = value;
    };
    /**
     * Instantiates a new termsAndConditionsAcceptanceStatus and sets the default values.
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
            ["acceptedDateTime", (o, n) => { (o as unknown as TermsAndConditionsAcceptanceStatus).acceptedDateTime = n.getDateValue(); }],
            ["acceptedVersion", (o, n) => { (o as unknown as TermsAndConditionsAcceptanceStatus).acceptedVersion = n.getNumberValue(); }],
            ["termsAndConditions", (o, n) => { (o as unknown as TermsAndConditionsAcceptanceStatus).termsAndConditions = n.getObjectValue<TermsAndConditions>(createTermsAndConditionsFromDiscriminatorValue); }],
            ["userDisplayName", (o, n) => { (o as unknown as TermsAndConditionsAcceptanceStatus).userDisplayName = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as TermsAndConditionsAcceptanceStatus).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("acceptedDateTime", this.acceptedDateTime);
        writer.writeNumberValue("acceptedVersion", this.acceptedVersion);
        writer.writeObjectValue<TermsAndConditions>("termsAndConditions", this.termsAndConditions);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
     * @returns a termsAndConditions
     */
    public get termsAndConditions() {
        return this._termsAndConditions;
    };
    /**
     * Sets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
     * @param value Value to set for the termsAndConditions property.
     */
    public set termsAndConditions(value: TermsAndConditions | undefined) {
        this._termsAndConditions = value;
    };
    /**
     * Gets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
