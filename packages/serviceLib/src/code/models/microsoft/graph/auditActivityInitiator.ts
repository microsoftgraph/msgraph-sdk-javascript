import {AppIdentity, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditActivityInitiator implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.  */
    private _app?: AppIdentity | undefined;
    /** If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.  */
    private _user?: UserIdentity | undefined;
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
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
     * Gets the app property value. If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.
     * @returns a appIdentity
     */
    public get app() {
        return this._app;
    };
    /**
     * Gets the user property value. If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.
     * @returns a userIdentity
     */
    public get user() {
        return this._user;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["app", (o, n) => { (o as unknown as AuditActivityInitiator).app = n.getObjectValue<AppIdentity>(AppIdentity); }],
            ["user", (o, n) => { (o as unknown as AuditActivityInitiator).user = n.getObjectValue<UserIdentity>(UserIdentity); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AppIdentity>("app", this.app);
        writer.writeObjectValue<UserIdentity>("user", this.user);
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
     * Sets the app property value. If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.
     * @param value Value to set for the app property.
     */
    public set app(value: AppIdentity | undefined) {
        this._app = value;
    };
    /**
     * Sets the user property value. If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.
     * @param value Value to set for the user property.
     */
    public set user(value: UserIdentity | undefined) {
        this._user = value;
    };
}
