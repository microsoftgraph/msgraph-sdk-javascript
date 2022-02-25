import {Entity, TeamsApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppCatalogs extends Entity implements Parsable {
    private _teamsApps?: TeamsApp[] | undefined;
    /**
     * Instantiates a new appCatalogs and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the teamsApps property value. 
     * @returns a teamsApp
     */
    public get teamsApps() {
        return this._teamsApps;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["teamsApps", (o, n) => { (o as unknown as AppCatalogs).teamsApps = n.getCollectionOfObjectValues<TeamsApp>(TeamsApp); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TeamsApp>("teamsApps", this.teamsApps);
    };
    /**
     * Sets the teamsApps property value. 
     * @param value Value to set for the teamsApps property.
     */
    public set teamsApps(value: TeamsApp[] | undefined) {
        this._teamsApps = value;
    };
}
