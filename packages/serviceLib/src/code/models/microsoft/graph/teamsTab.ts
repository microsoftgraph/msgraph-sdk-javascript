import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {createTeamsTabConfigurationFromDiscriminatorValue} from './createTeamsTabConfigurationFromDiscriminatorValue';
import {Entity, TeamsApp, TeamsTabConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTab extends Entity implements Parsable {
    /** Container for custom settings applied to a tab. The tab is considered configured only once this property is set.  */
    private _configuration?: TeamsTabConfiguration | undefined;
    /** Name of the tab.  */
    private _displayName?: string | undefined;
    /** The application that is linked to the tab. This cannot be changed after tab creation.  */
    private _teamsApp?: TeamsApp | undefined;
    /** Deep link URL of the tab instance. Read only.  */
    private _webUrl?: string | undefined;
    /**
     * Gets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
     * @returns a teamsTabConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: TeamsTabConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new teamsTab and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Name of the tab.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the tab.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["configuration", (o, n) => { (o as unknown as TeamsTab).configuration = n.getObjectValue<TeamsTabConfiguration>(createTeamsTabConfigurationFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as TeamsTab).displayName = n.getStringValue(); }],
            ["teamsApp", (o, n) => { (o as unknown as TeamsTab).teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); }],
            ["webUrl", (o, n) => { (o as unknown as TeamsTab).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamsTabConfiguration>("configuration", this.configuration);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<TeamsApp>("teamsApp", this.teamsApp);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the teamsApp property value. The application that is linked to the tab. This cannot be changed after tab creation.
     * @returns a teamsApp
     */
    public get teamsApp() {
        return this._teamsApp;
    };
    /**
     * Sets the teamsApp property value. The application that is linked to the tab. This cannot be changed after tab creation.
     * @param value Value to set for the teamsApp property.
     */
    public set teamsApp(value: TeamsApp | undefined) {
        this._teamsApp = value;
    };
    /**
     * Gets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
