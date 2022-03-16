import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationClass, EducationSchool, EducationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _classes?: EducationClass[] | undefined;
    private _me?: EducationUser | undefined;
    private _schools?: EducationSchool[] | undefined;
    private _users?: EducationUser[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the classes property value. 
     * @returns a educationClass
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. 
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        this._classes = value;
    };
    /**
     * Instantiates a new EducationRoot and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["classes", (o, n) => { (o as unknown as EducationRoot).classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); }],
            ["me", (o, n) => { (o as unknown as EducationRoot).me = n.getObjectValue<EducationUser>(createEducationUserFromDiscriminatorValue); }],
            ["schools", (o, n) => { (o as unknown as EducationRoot).schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); }],
            ["users", (o, n) => { (o as unknown as EducationRoot).users = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the me property value. 
     * @returns a educationUser
     */
    public get me() {
        return this._me;
    };
    /**
     * Sets the me property value. 
     * @param value Value to set for the me property.
     */
    public set me(value: EducationUser | undefined) {
        this._me = value;
    };
    /**
     * Gets the schools property value. 
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. 
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
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
     * Gets the users property value. 
     * @returns a educationUser
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. 
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        this._users = value;
    };
}
