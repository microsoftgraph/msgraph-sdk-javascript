import {createIncompleteDataFromDiscriminatorValue} from './createIncompleteDataFromDiscriminatorValue';
import {createItemActionStatFromDiscriminatorValue} from './createItemActionStatFromDiscriminatorValue';
import {createItemActivityFromDiscriminatorValue} from './createItemActivityFromDiscriminatorValue';
import {Entity, IncompleteData, ItemActionStat, ItemActivity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActivityStat extends Entity implements Parsable {
    /** Statistics about the access actions in this interval. Read-only.  */
    private _access?: ItemActionStat | undefined;
    /** Exposes the itemActivities represented in this itemActivityStat resource.  */
    private _activities?: ItemActivity[] | undefined;
    /** Statistics about the create actions in this interval. Read-only.  */
    private _create?: ItemActionStat | undefined;
    /** Statistics about the delete actions in this interval. Read-only.  */
    private _delete?: ItemActionStat | undefined;
    /** Statistics about the edit actions in this interval. Read-only.  */
    private _edit?: ItemActionStat | undefined;
    /** When the interval ends. Read-only.  */
    private _endDateTime?: Date | undefined;
    /** Indicates that the statistics in this interval are based on incomplete data. Read-only.  */
    private _incompleteData?: IncompleteData | undefined;
    /** Indicates whether the item is 'trending.' Read-only.  */
    private _isTrending?: boolean | undefined;
    /** Statistics about the move actions in this interval. Read-only.  */
    private _move?: ItemActionStat | undefined;
    /** When the interval starts. Read-only.  */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the access property value. Statistics about the access actions in this interval. Read-only.
     * @returns a itemActionStat
     */
    public get access() {
        return this._access;
    };
    /**
     * Sets the access property value. Statistics about the access actions in this interval. Read-only.
     * @param value Value to set for the access property.
     */
    public set access(value: ItemActionStat | undefined) {
        this._access = value;
    };
    /**
     * Gets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
     * @returns a itemActivity
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ItemActivity[] | undefined) {
        this._activities = value;
    };
    /**
     * Instantiates a new itemActivityStat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the create property value. Statistics about the create actions in this interval. Read-only.
     * @returns a itemActionStat
     */
    public get create() {
        return this._create;
    };
    /**
     * Sets the create property value. Statistics about the create actions in this interval. Read-only.
     * @param value Value to set for the create property.
     */
    public set create(value: ItemActionStat | undefined) {
        this._create = value;
    };
    /**
     * Gets the delete property value. Statistics about the delete actions in this interval. Read-only.
     * @returns a itemActionStat
     */
    public get delete() {
        return this._delete;
    };
    /**
     * Sets the delete property value. Statistics about the delete actions in this interval. Read-only.
     * @param value Value to set for the delete property.
     */
    public set delete(value: ItemActionStat | undefined) {
        this._delete = value;
    };
    /**
     * Gets the edit property value. Statistics about the edit actions in this interval. Read-only.
     * @returns a itemActionStat
     */
    public get edit() {
        return this._edit;
    };
    /**
     * Sets the edit property value. Statistics about the edit actions in this interval. Read-only.
     * @param value Value to set for the edit property.
     */
    public set edit(value: ItemActionStat | undefined) {
        this._edit = value;
    };
    /**
     * Gets the endDateTime property value. When the interval ends. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. When the interval ends. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["access", (o, n) => { (o as unknown as ItemActivityStat).access = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); }],
            ["activities", (o, n) => { (o as unknown as ItemActivityStat).activities = n.getCollectionOfObjectValues<ItemActivity>(createItemActivityFromDiscriminatorValue); }],
            ["create", (o, n) => { (o as unknown as ItemActivityStat).create = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); }],
            ["delete", (o, n) => { (o as unknown as ItemActivityStat).delete = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); }],
            ["edit", (o, n) => { (o as unknown as ItemActivityStat).edit = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); }],
            ["endDateTime", (o, n) => { (o as unknown as ItemActivityStat).endDateTime = n.getDateValue(); }],
            ["incompleteData", (o, n) => { (o as unknown as ItemActivityStat).incompleteData = n.getObjectValue<IncompleteData>(createIncompleteDataFromDiscriminatorValue); }],
            ["isTrending", (o, n) => { (o as unknown as ItemActivityStat).isTrending = n.getBooleanValue(); }],
            ["move", (o, n) => { (o as unknown as ItemActivityStat).move = n.getObjectValue<ItemActionStat>(createItemActionStatFromDiscriminatorValue); }],
            ["startDateTime", (o, n) => { (o as unknown as ItemActivityStat).startDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Gets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
     * @returns a incompleteData
     */
    public get incompleteData() {
        return this._incompleteData;
    };
    /**
     * Sets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
     * @param value Value to set for the incompleteData property.
     */
    public set incompleteData(value: IncompleteData | undefined) {
        this._incompleteData = value;
    };
    /**
     * Gets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
     * @returns a boolean
     */
    public get isTrending() {
        return this._isTrending;
    };
    /**
     * Sets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
     * @param value Value to set for the isTrending property.
     */
    public set isTrending(value: boolean | undefined) {
        this._isTrending = value;
    };
    /**
     * Gets the move property value. Statistics about the move actions in this interval. Read-only.
     * @returns a itemActionStat
     */
    public get move() {
        return this._move;
    };
    /**
     * Sets the move property value. Statistics about the move actions in this interval. Read-only.
     * @param value Value to set for the move property.
     */
    public set move(value: ItemActionStat | undefined) {
        this._move = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemActionStat>("access", this.access);
        writer.writeCollectionOfObjectValues<ItemActivity>("activities", this.activities);
        writer.writeObjectValue<ItemActionStat>("create", this.create);
        writer.writeObjectValue<ItemActionStat>("delete", this.delete);
        writer.writeObjectValue<ItemActionStat>("edit", this.edit);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue<IncompleteData>("incompleteData", this.incompleteData);
        writer.writeBooleanValue("isTrending", this.isTrending);
        writer.writeObjectValue<ItemActionStat>("move", this.move);
        writer.writeDateValue("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. When the interval starts. Read-only.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. When the interval starts. Read-only.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
