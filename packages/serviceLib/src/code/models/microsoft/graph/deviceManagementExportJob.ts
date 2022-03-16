import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementExportJob extends Entity implements Parsable {
    /** Time that the exported report expires  */
    private _expirationDateTime?: Date | undefined;
    /** Filters applied on the report  */
    private _filter?: string | undefined;
    /** Format of the exported report. Possible values are: csv, pdf.  */
    private _format?: DeviceManagementReportFileFormat | undefined;
    /** Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues.  */
    private _localizationType?: DeviceManagementExportJobLocalizationType | undefined;
    /** Name of the report  */
    private _reportName?: string | undefined;
    /** Time that the exported report was requested  */
    private _requestDateTime?: Date | undefined;
    /** Columns selected from the report  */
    private _select?: string[] | undefined;
    /** A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.  */
    private _snapshotId?: string | undefined;
    /** Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed.  */
    private _status?: DeviceManagementReportStatus | undefined;
    /** Temporary location of the exported report  */
    private _url?: string | undefined;
    /**
     * Instantiates a new deviceManagementExportJob and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the expirationDateTime property value. Time that the exported report expires
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Time that the exported report expires
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Gets the filter property value. Filters applied on the report
     * @returns a string
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Sets the filter property value. Filters applied on the report
     * @param value Value to set for the filter property.
     */
    public set filter(value: string | undefined) {
        this._filter = value;
    };
    /**
     * Gets the format property value. Format of the exported report. Possible values are: csv, pdf.
     * @returns a deviceManagementReportFileFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Format of the exported report. Possible values are: csv, pdf.
     * @param value Value to set for the format property.
     */
    public set format(value: DeviceManagementReportFileFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["expirationDateTime", (o, n) => { (o as unknown as DeviceManagementExportJob).expirationDateTime = n.getDateValue(); }],
            ["filter", (o, n) => { (o as unknown as DeviceManagementExportJob).filter = n.getStringValue(); }],
            ["format", (o, n) => { (o as unknown as DeviceManagementExportJob).format = n.getEnumValue<DeviceManagementReportFileFormat>(DeviceManagementReportFileFormat); }],
            ["localizationType", (o, n) => { (o as unknown as DeviceManagementExportJob).localizationType = n.getEnumValue<DeviceManagementExportJobLocalizationType>(DeviceManagementExportJobLocalizationType); }],
            ["reportName", (o, n) => { (o as unknown as DeviceManagementExportJob).reportName = n.getStringValue(); }],
            ["requestDateTime", (o, n) => { (o as unknown as DeviceManagementExportJob).requestDateTime = n.getDateValue(); }],
            ["select", (o, n) => { (o as unknown as DeviceManagementExportJob).select = n.getCollectionOfPrimitiveValues<string>(); }],
            ["snapshotId", (o, n) => { (o as unknown as DeviceManagementExportJob).snapshotId = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as DeviceManagementExportJob).status = n.getEnumValue<DeviceManagementReportStatus>(DeviceManagementReportStatus); }],
            ["url", (o, n) => { (o as unknown as DeviceManagementExportJob).url = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the localizationType property value. Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues.
     * @returns a deviceManagementExportJobLocalizationType
     */
    public get localizationType() {
        return this._localizationType;
    };
    /**
     * Sets the localizationType property value. Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues.
     * @param value Value to set for the localizationType property.
     */
    public set localizationType(value: DeviceManagementExportJobLocalizationType | undefined) {
        this._localizationType = value;
    };
    /**
     * Gets the reportName property value. Name of the report
     * @returns a string
     */
    public get reportName() {
        return this._reportName;
    };
    /**
     * Sets the reportName property value. Name of the report
     * @param value Value to set for the reportName property.
     */
    public set reportName(value: string | undefined) {
        this._reportName = value;
    };
    /**
     * Gets the requestDateTime property value. Time that the exported report was requested
     * @returns a Date
     */
    public get requestDateTime() {
        return this._requestDateTime;
    };
    /**
     * Sets the requestDateTime property value. Time that the exported report was requested
     * @param value Value to set for the requestDateTime property.
     */
    public set requestDateTime(value: Date | undefined) {
        this._requestDateTime = value;
    };
    /**
     * Gets the select property value. Columns selected from the report
     * @returns a string
     */
    public get select() {
        return this._select;
    };
    /**
     * Sets the select property value. Columns selected from the report
     * @param value Value to set for the select property.
     */
    public set select(value: string[] | undefined) {
        this._select = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("filter", this.filter);
        writer.writeEnumValue<DeviceManagementReportFileFormat>("format", this.format);
        writer.writeEnumValue<DeviceManagementExportJobLocalizationType>("localizationType", this.localizationType);
        writer.writeStringValue("reportName", this.reportName);
        writer.writeDateValue("requestDateTime", this.requestDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        writer.writeStringValue("snapshotId", this.snapshotId);
        writer.writeEnumValue<DeviceManagementReportStatus>("status", this.status);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Gets the snapshotId property value. A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.
     * @returns a string
     */
    public get snapshotId() {
        return this._snapshotId;
    };
    /**
     * Sets the snapshotId property value. A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.
     * @param value Value to set for the snapshotId property.
     */
    public set snapshotId(value: string | undefined) {
        this._snapshotId = value;
    };
    /**
     * Gets the status property value. Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed.
     * @returns a deviceManagementReportStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: DeviceManagementReportStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the url property value. Temporary location of the exported report
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. Temporary location of the exported report
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
