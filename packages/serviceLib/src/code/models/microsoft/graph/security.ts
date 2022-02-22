import {Alert, Entity, SecureScore, SecureScoreControlProfile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Security extends Entity implements Parsable {
    /** Read-only. Nullable.  */
    private _alerts?: Alert[] | undefined;
    private _secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    private _secureScores?: SecureScore[] | undefined;
    /**
     * Instantiates a new security and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the alerts property value. Read-only. Nullable.
     * @returns a alert
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Gets the secureScoreControlProfiles property value. 
     * @returns a secureScoreControlProfile
     */
    public get secureScoreControlProfiles() {
        return this._secureScoreControlProfiles;
    };
    /**
     * Gets the secureScores property value. 
     * @returns a secureScore
     */
    public get secureScores() {
        return this._secureScores;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["alerts", (o, n) => { (o as unknown as Security).alerts = n.getCollectionOfObjectValues<Alert>(Alert); }],
            ["secureScoreControlProfiles", (o, n) => { (o as unknown as Security).secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(SecureScoreControlProfile); }],
            ["secureScores", (o, n) => { (o as unknown as Security).secureScores = n.getCollectionOfObjectValues<SecureScore>(SecureScore); }],
        ]);
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
    /**
     * Sets the alerts property value. Read-only. Nullable.
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: Alert[] | undefined) {
        this._alerts = value;
    };
    /**
     * Sets the secureScoreControlProfiles property value. 
     * @param value Value to set for the secureScoreControlProfiles property.
     */
    public set secureScoreControlProfiles(value: SecureScoreControlProfile[] | undefined) {
        this._secureScoreControlProfiles = value;
    };
    /**
     * Sets the secureScores property value. 
     * @param value Value to set for the secureScores property.
     */
    public set secureScores(value: SecureScore[] | undefined) {
        this._secureScores = value;
    };
}
