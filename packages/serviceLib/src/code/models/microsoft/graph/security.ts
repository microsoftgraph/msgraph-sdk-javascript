import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {Alert, Entity, SecureScore, SecureScoreControlProfile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security singleton.  */
export class Security extends Entity implements Parsable {
    /** Read-only. Nullable.  */
    private _alerts?: Alert[] | undefined;
    private _secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    private _secureScores?: SecureScore[] | undefined;
    /**
     * Gets the alerts property value. Read-only. Nullable.
     * @returns a alert
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. Read-only. Nullable.
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        this._alerts = value;
    };
    /**
     * Instantiates a new security and sets the default values.
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
            ["alerts", (o, n) => { (o as unknown as Security).alerts = n.getCollectionOfObjectValues<Alert>(createAlertFromDiscriminatorValue); }],
            ["secureScoreControlProfiles", (o, n) => { (o as unknown as Security).secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); }],
            ["secureScores", (o, n) => { (o as unknown as Security).secureScores = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the secureScoreControlProfiles property value. 
     * @returns a secureScoreControlProfile
     */
    public get secureScoreControlProfiles() {
        return this._secureScoreControlProfiles;
    };
    /**
     * Sets the secureScoreControlProfiles property value. 
     * @param value Value to set for the secureScoreControlProfiles property.
     */
    public set secureScoreControlProfiles(value: SecureScoreControlProfile[] | undefined) {
        this._secureScoreControlProfiles = value;
    };
    /**
     * Gets the secureScores property value. 
     * @returns a secureScore
     */
    public get secureScores() {
        return this._secureScores;
    };
    /**
     * Sets the secureScores property value. 
     * @param value Value to set for the secureScores property.
     */
    public set secureScores(value: SecureScore[] | undefined) {
        this._secureScores = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Alert>("alerts", this.alerts);
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("secureScoreControlProfiles", this.secureScoreControlProfiles);
        writer.writeCollectionOfObjectValues<SecureScore>("secureScores", this.secureScores);
    };
}
