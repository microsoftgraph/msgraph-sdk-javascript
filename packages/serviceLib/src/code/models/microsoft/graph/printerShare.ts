import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Group, Printer, PrinterBase, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterShare extends PrinterBase implements Parsable {
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.  */
    private _allowAllUsers?: boolean | undefined;
    /** The groups whose users have access to print using the printer.  */
    private _allowedGroups?: Group[] | undefined;
    /** The users who have access to print using the printer.  */
    private _allowedUsers?: User[] | undefined;
    /** The DateTimeOffset when the printer share was created. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The printer that this printer share is related to.  */
    private _printer?: Printer | undefined;
    /**
     * Gets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @returns a boolean
     */
    public get allowAllUsers() {
        return this._allowAllUsers;
    };
    /**
     * Sets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @param value Value to set for the allowAllUsers property.
     */
    public set allowAllUsers(value: boolean | undefined) {
        this._allowAllUsers = value;
    };
    /**
     * Gets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @returns a group
     */
    public get allowedGroups() {
        return this._allowedGroups;
    };
    /**
     * Sets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @param value Value to set for the allowedGroups property.
     */
    public set allowedGroups(value: Group[] | undefined) {
        this._allowedGroups = value;
    };
    /**
     * Gets the allowedUsers property value. The users who have access to print using the printer.
     * @returns a user
     */
    public get allowedUsers() {
        return this._allowedUsers;
    };
    /**
     * Sets the allowedUsers property value. The users who have access to print using the printer.
     * @param value Value to set for the allowedUsers property.
     */
    public set allowedUsers(value: User[] | undefined) {
        this._allowedUsers = value;
    };
    /**
     * Instantiates a new printerShare and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowAllUsers", (o, n) => { (o as unknown as PrinterShare).allowAllUsers = n.getBooleanValue(); }],
            ["allowedGroups", (o, n) => { (o as unknown as PrinterShare).allowedGroups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); }],
            ["allowedUsers", (o, n) => { (o as unknown as PrinterShare).allowedUsers = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as PrinterShare).createdDateTime = n.getDateValue(); }],
            ["printer", (o, n) => { (o as unknown as PrinterShare).printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the printer property value. The printer that this printer share is related to.
     * @returns a printer
     */
    public get printer() {
        return this._printer;
    };
    /**
     * Sets the printer property value. The printer that this printer share is related to.
     * @param value Value to set for the printer property.
     */
    public set printer(value: Printer | undefined) {
        this._printer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowAllUsers", this.allowAllUsers);
        writer.writeCollectionOfObjectValues<Group>("allowedGroups", this.allowedGroups);
        writer.writeCollectionOfObjectValues<User>("allowedUsers", this.allowedUsers);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<Printer>("printer", this.printer);
    };
}
