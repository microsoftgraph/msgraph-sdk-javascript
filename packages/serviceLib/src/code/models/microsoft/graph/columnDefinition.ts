import {ColumnTypes} from './columnTypes';
import {createBooleanColumnFromDiscriminatorValue} from './createBooleanColumnFromDiscriminatorValue';
import {createCalculatedColumnFromDiscriminatorValue} from './createCalculatedColumnFromDiscriminatorValue';
import {createChoiceColumnFromDiscriminatorValue} from './createChoiceColumnFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createColumnValidationFromDiscriminatorValue} from './createColumnValidationFromDiscriminatorValue';
import {createContentApprovalStatusColumnFromDiscriminatorValue} from './createContentApprovalStatusColumnFromDiscriminatorValue';
import {createCurrencyColumnFromDiscriminatorValue} from './createCurrencyColumnFromDiscriminatorValue';
import {createDateTimeColumnFromDiscriminatorValue} from './createDateTimeColumnFromDiscriminatorValue';
import {createDefaultColumnValueFromDiscriminatorValue} from './createDefaultColumnValueFromDiscriminatorValue';
import {createGeolocationColumnFromDiscriminatorValue} from './createGeolocationColumnFromDiscriminatorValue';
import {createHyperlinkOrPictureColumnFromDiscriminatorValue} from './createHyperlinkOrPictureColumnFromDiscriminatorValue';
import {createLookupColumnFromDiscriminatorValue} from './createLookupColumnFromDiscriminatorValue';
import {createNumberColumnFromDiscriminatorValue} from './createNumberColumnFromDiscriminatorValue';
import {createPersonOrGroupColumnFromDiscriminatorValue} from './createPersonOrGroupColumnFromDiscriminatorValue';
import {createTermColumnFromDiscriminatorValue} from './createTermColumnFromDiscriminatorValue';
import {createTextColumnFromDiscriminatorValue} from './createTextColumnFromDiscriminatorValue';
import {createThumbnailColumnFromDiscriminatorValue} from './createThumbnailColumnFromDiscriminatorValue';
import {BooleanColumn, CalculatedColumn, ChoiceColumn, ColumnValidation, ContentApprovalStatusColumn, CurrencyColumn, DateTimeColumn, DefaultColumnValue, Entity, GeolocationColumn, HyperlinkOrPictureColumn, LookupColumn, NumberColumn, PersonOrGroupColumn, TermColumn, TextColumn, ThumbnailColumn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnDefinition extends Entity implements Parsable {
    /** This column stores boolean values.  */
    private _boolean?: BooleanColumn | undefined;
    /** This column's data is calculated based on other columns.  */
    private _calculated?: CalculatedColumn | undefined;
    /** This column stores data from a list of choices.  */
    private _choice?: ChoiceColumn | undefined;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns.  */
    private _columnGroup?: string | undefined;
    /** This column stores content approval status.  */
    private _contentApprovalStatus?: ContentApprovalStatusColumn | undefined;
    /** This column stores currency values.  */
    private _currency?: CurrencyColumn | undefined;
    /** This column stores DateTime values.  */
    private _dateTime?: DateTimeColumn | undefined;
    /** The default value for this column.  */
    private _defaultValue?: DefaultColumnValue | undefined;
    /** The user-facing description of the column.  */
    private _description?: string | undefined;
    /** The user-facing name of the column.  */
    private _displayName?: string | undefined;
    /** If true, no two list items may have the same value for this column.  */
    private _enforceUniqueValues?: boolean | undefined;
    /** This column stores a geolocation.  */
    private _geolocation?: GeolocationColumn | undefined;
    /** Specifies whether the column is displayed in the user interface.  */
    private _hidden?: boolean | undefined;
    /** This column stores hyperlink or picture values.  */
    private _hyperlinkOrPicture?: HyperlinkOrPictureColumn | undefined;
    /** Specifies whether the column values can be used for sorting and searching.  */
    private _indexed?: boolean | undefined;
    /** Indicates whether this column can be deleted.  */
    private _isDeletable?: boolean | undefined;
    /** Indicates whether values in the column can be reordered. Read-only.  */
    private _isReorderable?: boolean | undefined;
    /** Specifies whether the column can be changed.  */
    private _isSealed?: boolean | undefined;
    /** This column's data is looked up from another source in the site.  */
    private _lookup?: LookupColumn | undefined;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.  */
    private _name?: string | undefined;
    /** This column stores number values.  */
    private _number?: NumberColumn | undefined;
    /** This column stores Person or Group values.  */
    private _personOrGroup?: PersonOrGroupColumn | undefined;
    /** If 'true', changes to this column will be propagated to lists that implement the column.  */
    private _propagateChanges?: boolean | undefined;
    /** Specifies whether the column values can be modified.  */
    private _readOnly?: boolean | undefined;
    /** Specifies whether the column value isn't optional.  */
    private _required?: boolean | undefined;
    /** The source column for the content type column.  */
    private _sourceColumn?: ColumnDefinition | undefined;
    /** This column stores taxonomy terms.  */
    private _term?: TermColumn | undefined;
    /** This column stores text values.  */
    private _text?: TextColumn | undefined;
    /** This column stores thumbnail values.  */
    private _thumbnail?: ThumbnailColumn | undefined;
    /** For site columns, the type of column. Read-only.  */
    private _type?: ColumnTypes | undefined;
    /** This column stores validation formula and message for the column.  */
    private _validation?: ColumnValidation | undefined;
    /**
     * Gets the boolean property value. This column stores boolean values.
     * @returns a booleanColumn
     */
    public get boolean() {
        return this._boolean;
    };
    /**
     * Sets the boolean property value. This column stores boolean values.
     * @param value Value to set for the boolean property.
     */
    public set boolean(value: BooleanColumn | undefined) {
        this._boolean = value;
    };
    /**
     * Gets the calculated property value. This column's data is calculated based on other columns.
     * @returns a calculatedColumn
     */
    public get calculated() {
        return this._calculated;
    };
    /**
     * Sets the calculated property value. This column's data is calculated based on other columns.
     * @param value Value to set for the calculated property.
     */
    public set calculated(value: CalculatedColumn | undefined) {
        this._calculated = value;
    };
    /**
     * Gets the choice property value. This column stores data from a list of choices.
     * @returns a choiceColumn
     */
    public get choice() {
        return this._choice;
    };
    /**
     * Sets the choice property value. This column stores data from a list of choices.
     * @param value Value to set for the choice property.
     */
    public set choice(value: ChoiceColumn | undefined) {
        this._choice = value;
    };
    /**
     * Gets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @returns a string
     */
    public get columnGroup() {
        return this._columnGroup;
    };
    /**
     * Sets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @param value Value to set for the columnGroup property.
     */
    public set columnGroup(value: string | undefined) {
        this._columnGroup = value;
    };
    /**
     * Instantiates a new columnDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentApprovalStatus property value. This column stores content approval status.
     * @returns a contentApprovalStatusColumn
     */
    public get contentApprovalStatus() {
        return this._contentApprovalStatus;
    };
    /**
     * Sets the contentApprovalStatus property value. This column stores content approval status.
     * @param value Value to set for the contentApprovalStatus property.
     */
    public set contentApprovalStatus(value: ContentApprovalStatusColumn | undefined) {
        this._contentApprovalStatus = value;
    };
    /**
     * Gets the currency property value. This column stores currency values.
     * @returns a currencyColumn
     */
    public get currency() {
        return this._currency;
    };
    /**
     * Sets the currency property value. This column stores currency values.
     * @param value Value to set for the currency property.
     */
    public set currency(value: CurrencyColumn | undefined) {
        this._currency = value;
    };
    /**
     * Gets the dateTime property value. This column stores DateTime values.
     * @returns a dateTimeColumn
     */
    public get dateTime() {
        return this._dateTime;
    };
    /**
     * Sets the dateTime property value. This column stores DateTime values.
     * @param value Value to set for the dateTime property.
     */
    public set dateTime(value: DateTimeColumn | undefined) {
        this._dateTime = value;
    };
    /**
     * Gets the defaultValue property value. The default value for this column.
     * @returns a defaultColumnValue
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Sets the defaultValue property value. The default value for this column.
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: DefaultColumnValue | undefined) {
        this._defaultValue = value;
    };
    /**
     * Gets the description property value. The user-facing description of the column.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The user-facing description of the column.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The user-facing name of the column.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The user-facing name of the column.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @returns a boolean
     */
    public get enforceUniqueValues() {
        return this._enforceUniqueValues;
    };
    /**
     * Sets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @param value Value to set for the enforceUniqueValues property.
     */
    public set enforceUniqueValues(value: boolean | undefined) {
        this._enforceUniqueValues = value;
    };
    /**
     * Gets the geolocation property value. This column stores a geolocation.
     * @returns a geolocationColumn
     */
    public get geolocation() {
        return this._geolocation;
    };
    /**
     * Sets the geolocation property value. This column stores a geolocation.
     * @param value Value to set for the geolocation property.
     */
    public set geolocation(value: GeolocationColumn | undefined) {
        this._geolocation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["boolean", (o, n) => { (o as unknown as ColumnDefinition).boolean = n.getObjectValue<BooleanColumn>(createBooleanColumnFromDiscriminatorValue); }],
            ["calculated", (o, n) => { (o as unknown as ColumnDefinition).calculated = n.getObjectValue<CalculatedColumn>(createCalculatedColumnFromDiscriminatorValue); }],
            ["choice", (o, n) => { (o as unknown as ColumnDefinition).choice = n.getObjectValue<ChoiceColumn>(createChoiceColumnFromDiscriminatorValue); }],
            ["columnGroup", (o, n) => { (o as unknown as ColumnDefinition).columnGroup = n.getStringValue(); }],
            ["contentApprovalStatus", (o, n) => { (o as unknown as ColumnDefinition).contentApprovalStatus = n.getObjectValue<ContentApprovalStatusColumn>(createContentApprovalStatusColumnFromDiscriminatorValue); }],
            ["currency", (o, n) => { (o as unknown as ColumnDefinition).currency = n.getObjectValue<CurrencyColumn>(createCurrencyColumnFromDiscriminatorValue); }],
            ["dateTime", (o, n) => { (o as unknown as ColumnDefinition).dateTime = n.getObjectValue<DateTimeColumn>(createDateTimeColumnFromDiscriminatorValue); }],
            ["defaultValue", (o, n) => { (o as unknown as ColumnDefinition).defaultValue = n.getObjectValue<DefaultColumnValue>(createDefaultColumnValueFromDiscriminatorValue); }],
            ["description", (o, n) => { (o as unknown as ColumnDefinition).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ColumnDefinition).displayName = n.getStringValue(); }],
            ["enforceUniqueValues", (o, n) => { (o as unknown as ColumnDefinition).enforceUniqueValues = n.getBooleanValue(); }],
            ["geolocation", (o, n) => { (o as unknown as ColumnDefinition).geolocation = n.getObjectValue<GeolocationColumn>(createGeolocationColumnFromDiscriminatorValue); }],
            ["hidden", (o, n) => { (o as unknown as ColumnDefinition).hidden = n.getBooleanValue(); }],
            ["hyperlinkOrPicture", (o, n) => { (o as unknown as ColumnDefinition).hyperlinkOrPicture = n.getObjectValue<HyperlinkOrPictureColumn>(createHyperlinkOrPictureColumnFromDiscriminatorValue); }],
            ["indexed", (o, n) => { (o as unknown as ColumnDefinition).indexed = n.getBooleanValue(); }],
            ["isDeletable", (o, n) => { (o as unknown as ColumnDefinition).isDeletable = n.getBooleanValue(); }],
            ["isReorderable", (o, n) => { (o as unknown as ColumnDefinition).isReorderable = n.getBooleanValue(); }],
            ["isSealed", (o, n) => { (o as unknown as ColumnDefinition).isSealed = n.getBooleanValue(); }],
            ["lookup", (o, n) => { (o as unknown as ColumnDefinition).lookup = n.getObjectValue<LookupColumn>(createLookupColumnFromDiscriminatorValue); }],
            ["name", (o, n) => { (o as unknown as ColumnDefinition).name = n.getStringValue(); }],
            ["number", (o, n) => { (o as unknown as ColumnDefinition).number = n.getObjectValue<NumberColumn>(createNumberColumnFromDiscriminatorValue); }],
            ["personOrGroup", (o, n) => { (o as unknown as ColumnDefinition).personOrGroup = n.getObjectValue<PersonOrGroupColumn>(createPersonOrGroupColumnFromDiscriminatorValue); }],
            ["propagateChanges", (o, n) => { (o as unknown as ColumnDefinition).propagateChanges = n.getBooleanValue(); }],
            ["readOnly", (o, n) => { (o as unknown as ColumnDefinition).readOnly = n.getBooleanValue(); }],
            ["required", (o, n) => { (o as unknown as ColumnDefinition).required = n.getBooleanValue(); }],
            ["sourceColumn", (o, n) => { (o as unknown as ColumnDefinition).sourceColumn = n.getObjectValue<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); }],
            ["term", (o, n) => { (o as unknown as ColumnDefinition).term = n.getObjectValue<TermColumn>(createTermColumnFromDiscriminatorValue); }],
            ["text", (o, n) => { (o as unknown as ColumnDefinition).text = n.getObjectValue<TextColumn>(createTextColumnFromDiscriminatorValue); }],
            ["thumbnail", (o, n) => { (o as unknown as ColumnDefinition).thumbnail = n.getObjectValue<ThumbnailColumn>(createThumbnailColumnFromDiscriminatorValue); }],
            ["type", (o, n) => { (o as unknown as ColumnDefinition).type = n.getEnumValue<ColumnTypes>(ColumnTypes); }],
            ["validation", (o, n) => { (o as unknown as ColumnDefinition).validation = n.getObjectValue<ColumnValidation>(createColumnValidationFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Gets the hyperlinkOrPicture property value. This column stores hyperlink or picture values.
     * @returns a hyperlinkOrPictureColumn
     */
    public get hyperlinkOrPicture() {
        return this._hyperlinkOrPicture;
    };
    /**
     * Sets the hyperlinkOrPicture property value. This column stores hyperlink or picture values.
     * @param value Value to set for the hyperlinkOrPicture property.
     */
    public set hyperlinkOrPicture(value: HyperlinkOrPictureColumn | undefined) {
        this._hyperlinkOrPicture = value;
    };
    /**
     * Gets the indexed property value. Specifies whether the column values can be used for sorting and searching.
     * @returns a boolean
     */
    public get indexed() {
        return this._indexed;
    };
    /**
     * Sets the indexed property value. Specifies whether the column values can be used for sorting and searching.
     * @param value Value to set for the indexed property.
     */
    public set indexed(value: boolean | undefined) {
        this._indexed = value;
    };
    /**
     * Gets the isDeletable property value. Indicates whether this column can be deleted.
     * @returns a boolean
     */
    public get isDeletable() {
        return this._isDeletable;
    };
    /**
     * Sets the isDeletable property value. Indicates whether this column can be deleted.
     * @param value Value to set for the isDeletable property.
     */
    public set isDeletable(value: boolean | undefined) {
        this._isDeletable = value;
    };
    /**
     * Gets the isReorderable property value. Indicates whether values in the column can be reordered. Read-only.
     * @returns a boolean
     */
    public get isReorderable() {
        return this._isReorderable;
    };
    /**
     * Sets the isReorderable property value. Indicates whether values in the column can be reordered. Read-only.
     * @param value Value to set for the isReorderable property.
     */
    public set isReorderable(value: boolean | undefined) {
        this._isReorderable = value;
    };
    /**
     * Gets the isSealed property value. Specifies whether the column can be changed.
     * @returns a boolean
     */
    public get isSealed() {
        return this._isSealed;
    };
    /**
     * Sets the isSealed property value. Specifies whether the column can be changed.
     * @param value Value to set for the isSealed property.
     */
    public set isSealed(value: boolean | undefined) {
        this._isSealed = value;
    };
    /**
     * Gets the lookup property value. This column's data is looked up from another source in the site.
     * @returns a lookupColumn
     */
    public get lookup() {
        return this._lookup;
    };
    /**
     * Sets the lookup property value. This column's data is looked up from another source in the site.
     * @param value Value to set for the lookup property.
     */
    public set lookup(value: LookupColumn | undefined) {
        this._lookup = value;
    };
    /**
     * Gets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the number property value. This column stores number values.
     * @returns a numberColumn
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. This column stores number values.
     * @param value Value to set for the number property.
     */
    public set number(value: NumberColumn | undefined) {
        this._number = value;
    };
    /**
     * Gets the personOrGroup property value. This column stores Person or Group values.
     * @returns a personOrGroupColumn
     */
    public get personOrGroup() {
        return this._personOrGroup;
    };
    /**
     * Sets the personOrGroup property value. This column stores Person or Group values.
     * @param value Value to set for the personOrGroup property.
     */
    public set personOrGroup(value: PersonOrGroupColumn | undefined) {
        this._personOrGroup = value;
    };
    /**
     * Gets the propagateChanges property value. If 'true', changes to this column will be propagated to lists that implement the column.
     * @returns a boolean
     */
    public get propagateChanges() {
        return this._propagateChanges;
    };
    /**
     * Sets the propagateChanges property value. If 'true', changes to this column will be propagated to lists that implement the column.
     * @param value Value to set for the propagateChanges property.
     */
    public set propagateChanges(value: boolean | undefined) {
        this._propagateChanges = value;
    };
    /**
     * Gets the readOnly property value. Specifies whether the column values can be modified.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Sets the readOnly property value. Specifies whether the column values can be modified.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        this._readOnly = value;
    };
    /**
     * Gets the required property value. Specifies whether the column value isn't optional.
     * @returns a boolean
     */
    public get required() {
        return this._required;
    };
    /**
     * Sets the required property value. Specifies whether the column value isn't optional.
     * @param value Value to set for the required property.
     */
    public set required(value: boolean | undefined) {
        this._required = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<BooleanColumn>("boolean", this.boolean);
        writer.writeObjectValue<CalculatedColumn>("calculated", this.calculated);
        writer.writeObjectValue<ChoiceColumn>("choice", this.choice);
        writer.writeStringValue("columnGroup", this.columnGroup);
        writer.writeObjectValue<ContentApprovalStatusColumn>("contentApprovalStatus", this.contentApprovalStatus);
        writer.writeObjectValue<CurrencyColumn>("currency", this.currency);
        writer.writeObjectValue<DateTimeColumn>("dateTime", this.dateTime);
        writer.writeObjectValue<DefaultColumnValue>("defaultValue", this.defaultValue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enforceUniqueValues", this.enforceUniqueValues);
        writer.writeObjectValue<GeolocationColumn>("geolocation", this.geolocation);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<HyperlinkOrPictureColumn>("hyperlinkOrPicture", this.hyperlinkOrPicture);
        writer.writeBooleanValue("indexed", this.indexed);
        writer.writeBooleanValue("isDeletable", this.isDeletable);
        writer.writeBooleanValue("isReorderable", this.isReorderable);
        writer.writeBooleanValue("isSealed", this.isSealed);
        writer.writeObjectValue<LookupColumn>("lookup", this.lookup);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<NumberColumn>("number", this.number);
        writer.writeObjectValue<PersonOrGroupColumn>("personOrGroup", this.personOrGroup);
        writer.writeBooleanValue("propagateChanges", this.propagateChanges);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("required", this.required);
        writer.writeObjectValue<ColumnDefinition>("sourceColumn", this.sourceColumn);
        writer.writeObjectValue<TermColumn>("term", this.term);
        writer.writeObjectValue<TextColumn>("text", this.text);
        writer.writeObjectValue<ThumbnailColumn>("thumbnail", this.thumbnail);
        writer.writeEnumValue<ColumnTypes>("type", this.type);
        writer.writeObjectValue<ColumnValidation>("validation", this.validation);
    };
    /**
     * Gets the sourceColumn property value. The source column for the content type column.
     * @returns a columnDefinition
     */
    public get sourceColumn() {
        return this._sourceColumn;
    };
    /**
     * Sets the sourceColumn property value. The source column for the content type column.
     * @param value Value to set for the sourceColumn property.
     */
    public set sourceColumn(value: ColumnDefinition | undefined) {
        this._sourceColumn = value;
    };
    /**
     * Gets the term property value. This column stores taxonomy terms.
     * @returns a termColumn
     */
    public get term() {
        return this._term;
    };
    /**
     * Sets the term property value. This column stores taxonomy terms.
     * @param value Value to set for the term property.
     */
    public set term(value: TermColumn | undefined) {
        this._term = value;
    };
    /**
     * Gets the text property value. This column stores text values.
     * @returns a textColumn
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. This column stores text values.
     * @param value Value to set for the text property.
     */
    public set text(value: TextColumn | undefined) {
        this._text = value;
    };
    /**
     * Gets the thumbnail property value. This column stores thumbnail values.
     * @returns a thumbnailColumn
     */
    public get thumbnail() {
        return this._thumbnail;
    };
    /**
     * Sets the thumbnail property value. This column stores thumbnail values.
     * @param value Value to set for the thumbnail property.
     */
    public set thumbnail(value: ThumbnailColumn | undefined) {
        this._thumbnail = value;
    };
    /**
     * Gets the type property value. For site columns, the type of column. Read-only.
     * @returns a columnTypes
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. For site columns, the type of column. Read-only.
     * @param value Value to set for the type property.
     */
    public set type(value: ColumnTypes | undefined) {
        this._type = value;
    };
    /**
     * Gets the validation property value. This column stores validation formula and message for the column.
     * @returns a columnValidation
     */
    public get validation() {
        return this._validation;
    };
    /**
     * Sets the validation property value. This column stores validation formula and message for the column.
     * @param value Value to set for the validation property.
     */
    public set validation(value: ColumnValidation | undefined) {
        this._validation = value;
    };
}
