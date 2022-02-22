import {EducationClass} from './educationClass';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Education implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _classes?: EducationClass[] | undefined;
    private _me?: EducationUser | undefined;
    private _schools?: EducationSchool[] | undefined;
    private _users?: EducationUser[] | undefined;
    /**
     * Instantiates a new education and sets the default values.
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
     * Gets the classes property value. 
     * @returns a educationClass
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Gets the me property value. 
     * @returns a educationUser
     */
    public get me() {
        return this._me;
    };
    /**
     * Gets the schools property value. 
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Gets the users property value. 
     * @returns a educationUser
     */
    public get users() {
        return this._users;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["classes", (o, n) => { (o as unknown as Education).classes = n.getCollectionOfObjectValues<EducationClass>(EducationClass); }],
            ["me", (o, n) => { (o as unknown as Education).me = n.getObjectValue<EducationUser>(EducationUser); }],
            ["schools", (o, n) => { (o as unknown as Education).schools = n.getCollectionOfObjectValues<EducationSchool>(EducationSchool); }],
            ["users", (o, n) => { (o as unknown as Education).users = n.getCollectionOfObjectValues<EducationUser>(EducationUser); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<EducationClass>("classes", this.classes);
        writer.writeObjectValue<EducationUser>("me", this.me);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", this.schools);
        writer.writeCollectionOfObjectValues<EducationUser>("users", this.users);
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
     * Sets the classes property value. 
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        this._classes = value;
    };
    /**
     * Sets the me property value. 
     * @param value Value to set for the me property.
     */
    public set me(value: EducationUser | undefined) {
        this._me = value;
    };
    /**
     * Sets the schools property value. 
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
    };
    /**
     * Sets the users property value. 
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        this._users = value;
    };
}
