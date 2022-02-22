import {Entity, IdentitySet, TeamsAppPublishingState, TeamworkBot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppDefinition extends Entity implements Parsable {
    /** The details of the bot specified in the Teams app manifest.  */
    private _bot?: TeamworkBot | undefined;
    private _createdBy?: IdentitySet | undefined;
    /** Verbose description of the application.  */
    private _description?: string | undefined;
    /** The name of the app provided by the app developer.  */
    private _displayName?: string | undefined;
    private _lastModifiedDateTime?: Date | undefined;
    /** The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.  */
    private _publishingState?: TeamsAppPublishingState | undefined;
    /** Short description of the application.  */
    private _shortDescription?: string | undefined;
    /** The ID from the Teams app manifest.  */
    private _teamsAppId?: string | undefined;
    /** The version number of the application.  */
    private _version?: string | undefined;
    /**
     * Instantiates a new teamsAppDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the bot property value. The details of the bot specified in the Teams app manifest.
     * @returns a teamworkBot
     */
    public get bot() {
        return this._bot;
    };
    /**
     * Gets the createdBy property value. 
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the description property value. Verbose description of the application.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The name of the app provided by the app developer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. 
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
     * @returns a teamsAppPublishingState
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Gets the shortDescription property value. Short description of the application.
     * @returns a string
     */
    public get shortDescription() {
        return this._shortDescription;
    };
    /**
     * Gets the teamsAppId property value. The ID from the Teams app manifest.
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Gets the version property value. The version number of the application.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["bot", (o, n) => { (o as unknown as TeamsAppDefinition).bot = n.getObjectValue<TeamworkBot>(TeamworkBot); }],
            ["createdBy", (o, n) => { (o as unknown as TeamsAppDefinition).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["description", (o, n) => { (o as unknown as TeamsAppDefinition).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as TeamsAppDefinition).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as TeamsAppDefinition).lastModifiedDateTime = n.getDateValue(); }],
            ["publishingState", (o, n) => { (o as unknown as TeamsAppDefinition).publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState); }],
            ["shortDescription", (o, n) => { (o as unknown as TeamsAppDefinition).shortDescription = n.getStringValue(); }],
            ["teamsAppId", (o, n) => { (o as unknown as TeamsAppDefinition).teamsAppId = n.getStringValue(); }],
            ["version", (o, n) => { (o as unknown as TeamsAppDefinition).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamworkBot>("bot", this.bot);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<TeamsAppPublishingState>("publishingState", this.publishingState);
        writer.writeStringValue("shortDescription", this.shortDescription);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the bot property value. The details of the bot specified in the Teams app manifest.
     * @param value Value to set for the bot property.
     */
    public set bot(value: TeamworkBot | undefined) {
        this._bot = value;
    };
    /**
     * Sets the createdBy property value. 
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the description property value. Verbose description of the application.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The name of the app provided by the app developer.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. 
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: TeamsAppPublishingState | undefined) {
        this._publishingState = value;
    };
    /**
     * Sets the shortDescription property value. Short description of the application.
     * @param value Value to set for the shortDescription property.
     */
    public set shortDescription(value: string | undefined) {
        this._shortDescription = value;
    };
    /**
     * Sets the teamsAppId property value. The ID from the Teams app manifest.
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        this._teamsAppId = value;
    };
    /**
     * Sets the version property value. The version number of the application.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
