import {Entity} from '../';
import {ConnectionState} from './connectionState';
import {createConfigurationFromDiscriminatorValue} from './createConfigurationFromDiscriminatorValue';
import {createConnectionOperationFromDiscriminatorValue} from './createConnectionOperationFromDiscriminatorValue';
import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import {createSchemaFromDiscriminatorValue} from './createSchemaFromDiscriminatorValue';
import {Configuration, ConnectionOperation, ExternalGroup, ExternalItem, Schema} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalConnection extends Entity implements Parsable {
    /** Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.  */
    private _configuration?: Configuration | undefined;
    /** Description of the connection displayed in the Microsoft 365 admin center. Optional.  */
    private _description?: string | undefined;
    /** Read-only. Nullable.  */
    private _groups?: ExternalGroup[] | undefined;
    /** Read-only. Nullable.  */
    private _items?: ExternalItem[] | undefined;
    /** The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.  */
    private _name?: string | undefined;
    /** Read-only. Nullable.  */
    private _operations?: ConnectionOperation[] | undefined;
    /** Read-only. Nullable.  */
    private _schema?: Schema | undefined;
    /** Indicates the current state of the connection. Possible values are: draft, ready, obsolete, limitExceeded, unknownFutureValue.  */
    private _state?: ConnectionState | undefined;
    /**
     * Gets the configuration property value. Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.
     * @returns a configuration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: Configuration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new externalConnection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the connection displayed in the Microsoft 365 admin center. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the connection displayed in the Microsoft 365 admin center. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["configuration", (o, n) => { (o as unknown as ExternalConnection).configuration = n.getObjectValue<Configuration>(createConfigurationFromDiscriminatorValue); }],
            ["description", (o, n) => { (o as unknown as ExternalConnection).description = n.getStringValue(); }],
            ["groups", (o, n) => { (o as unknown as ExternalConnection).groups = n.getCollectionOfObjectValues<ExternalGroup>(createExternalGroupFromDiscriminatorValue); }],
            ["items", (o, n) => { (o as unknown as ExternalConnection).items = n.getCollectionOfObjectValues<ExternalItem>(createExternalItemFromDiscriminatorValue); }],
            ["name", (o, n) => { (o as unknown as ExternalConnection).name = n.getStringValue(); }],
            ["operations", (o, n) => { (o as unknown as ExternalConnection).operations = n.getCollectionOfObjectValues<ConnectionOperation>(createConnectionOperationFromDiscriminatorValue); }],
            ["schema", (o, n) => { (o as unknown as ExternalConnection).schema = n.getObjectValue<Schema>(createSchemaFromDiscriminatorValue); }],
            ["state", (o, n) => { (o as unknown as ExternalConnection).state = n.getEnumValue<ConnectionState>(ConnectionState); }],
        ]);
    };
    /**
     * Gets the groups property value. Read-only. Nullable.
     * @returns a externalGroup
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. Read-only. Nullable.
     * @param value Value to set for the groups property.
     */
    public set groups(value: ExternalGroup[] | undefined) {
        this._groups = value;
    };
    /**
     * Gets the items property value. Read-only. Nullable.
     * @returns a externalItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Read-only. Nullable.
     * @param value Value to set for the items property.
     */
    public set items(value: ExternalItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the name property value. The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the operations property value. Read-only. Nullable.
     * @returns a connectionOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. Read-only. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: ConnectionOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the schema property value. Read-only. Nullable.
     * @returns a schema
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Sets the schema property value. Read-only. Nullable.
     * @param value Value to set for the schema property.
     */
    public set schema(value: Schema | undefined) {
        this._schema = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Configuration>("configuration", this.configuration);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<ExternalGroup>("groups", this.groups);
        writer.writeCollectionOfObjectValues<ExternalItem>("items", this.items);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<ConnectionOperation>("operations", this.operations);
        writer.writeObjectValue<Schema>("schema", this.schema);
        writer.writeEnumValue<ConnectionState>("state", this.state);
    };
    /**
     * Gets the state property value. Indicates the current state of the connection. Possible values are: draft, ready, obsolete, limitExceeded, unknownFutureValue.
     * @returns a connectionState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Indicates the current state of the connection. Possible values are: draft, ready, obsolete, limitExceeded, unknownFutureValue.
     * @param value Value to set for the state property.
     */
    public set state(value: ConnectionState | undefined) {
        this._state = value;
    };
}
