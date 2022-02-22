import {AudioRoutingGroup, CallDirection, CallMediaState, CallOptions, CallRoute, CallState, CallTranscriptionInfo, ChatInfo, CommsOperation, Entity, IncomingContext, InvitationParticipantInfo, MediaConfig, MeetingInfo, Modality, Participant, ParticipantInfo, ResultInfo, ToneInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Call extends Entity implements Parsable {
    /** Read-only. Nullable.  */
    private _audioRoutingGroups?: AudioRoutingGroup[] | undefined;
    /** The callback URL on which callbacks will be delivered. Must be https.  */
    private _callbackUri?: string | undefined;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.  */
    private _callChainId?: string | undefined;
    private _callOptions?: CallOptions | undefined;
    /** The routing information on how the call was retargeted. Read-only.  */
    private _callRoutes?: CallRoute[] | undefined;
    /** The chat information. Required information for joining a meeting.  */
    private _chatInfo?: ChatInfo | undefined;
    /** The direction of the call. The possible value are incoming or outgoing. Read-only.  */
    private _direction?: CallDirection | undefined;
    /** The context associated with an incoming call. Read-only. Server generated.  */
    private _incomingContext?: IncomingContext | undefined;
    /** The media configuration. Required.  */
    private _mediaConfig?: MediaConfig | undefined;
    /** Read-only. The call media state.  */
    private _mediaState?: CallMediaState | undefined;
    /** The meeting information that's required for joining a meeting.  */
    private _meetingInfo?: MeetingInfo | undefined;
    private _myParticipantId?: string | undefined;
    /** Read-only. Nullable.  */
    private _operations?: CommsOperation[] | undefined;
    /** Read-only. Nullable.  */
    private _participants?: Participant[] | undefined;
    private _requestedModalities?: Modality[] | undefined;
    private _resultInfo?: ResultInfo | undefined;
    private _source?: ParticipantInfo | undefined;
    private _state?: CallState | undefined;
    private _subject?: string | undefined;
    private _targets?: InvitationParticipantInfo[] | undefined;
    private _tenantId?: string | undefined;
    private _toneInfo?: ToneInfo | undefined;
    /** The transcription information for the call. Read-only.  */
    private _transcription?: CallTranscriptionInfo | undefined;
    /**
     * Instantiates a new call and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the audioRoutingGroups property value. Read-only. Nullable.
     * @returns a audioRoutingGroup
     */
    public get audioRoutingGroups() {
        return this._audioRoutingGroups;
    };
    /**
     * Gets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Gets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @returns a string
     */
    public get callChainId() {
        return this._callChainId;
    };
    /**
     * Gets the callOptions property value. 
     * @returns a callOptions
     */
    public get callOptions() {
        return this._callOptions;
    };
    /**
     * Gets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @returns a callRoute
     */
    public get callRoutes() {
        return this._callRoutes;
    };
    /**
     * Gets the chatInfo property value. The chat information. Required information for joining a meeting.
     * @returns a chatInfo
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Gets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @returns a callDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Gets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @returns a incomingContext
     */
    public get incomingContext() {
        return this._incomingContext;
    };
    /**
     * Gets the mediaConfig property value. The media configuration. Required.
     * @returns a mediaConfig
     */
    public get mediaConfig() {
        return this._mediaConfig;
    };
    /**
     * Gets the mediaState property value. Read-only. The call media state.
     * @returns a callMediaState
     */
    public get mediaState() {
        return this._mediaState;
    };
    /**
     * Gets the meetingInfo property value. The meeting information that's required for joining a meeting.
     * @returns a meetingInfo
     */
    public get meetingInfo() {
        return this._meetingInfo;
    };
    /**
     * Gets the myParticipantId property value. 
     * @returns a string
     */
    public get myParticipantId() {
        return this._myParticipantId;
    };
    /**
     * Gets the operations property value. Read-only. Nullable.
     * @returns a commsOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Gets the participants property value. Read-only. Nullable.
     * @returns a participant
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Gets the requestedModalities property value. 
     * @returns a modality
     */
    public get requestedModalities() {
        return this._requestedModalities;
    };
    /**
     * Gets the resultInfo property value. 
     * @returns a resultInfo
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Gets the source property value. 
     * @returns a participantInfo
     */
    public get source() {
        return this._source;
    };
    /**
     * Gets the state property value. 
     * @returns a callState
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Gets the targets property value. 
     * @returns a invitationParticipantInfo
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Gets the tenantId property value. 
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Gets the toneInfo property value. 
     * @returns a toneInfo
     */
    public get toneInfo() {
        return this._toneInfo;
    };
    /**
     * Gets the transcription property value. The transcription information for the call. Read-only.
     * @returns a callTranscriptionInfo
     */
    public get transcription() {
        return this._transcription;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["audioRoutingGroups", (o, n) => { (o as unknown as Call).audioRoutingGroups = n.getCollectionOfObjectValues<AudioRoutingGroup>(AudioRoutingGroup); }],
            ["callbackUri", (o, n) => { (o as unknown as Call).callbackUri = n.getStringValue(); }],
            ["callChainId", (o, n) => { (o as unknown as Call).callChainId = n.getStringValue(); }],
            ["callOptions", (o, n) => { (o as unknown as Call).callOptions = n.getObjectValue<CallOptions>(CallOptions); }],
            ["callRoutes", (o, n) => { (o as unknown as Call).callRoutes = n.getCollectionOfObjectValues<CallRoute>(CallRoute); }],
            ["chatInfo", (o, n) => { (o as unknown as Call).chatInfo = n.getObjectValue<ChatInfo>(ChatInfo); }],
            ["direction", (o, n) => { (o as unknown as Call).direction = n.getEnumValue<CallDirection>(CallDirection); }],
            ["incomingContext", (o, n) => { (o as unknown as Call).incomingContext = n.getObjectValue<IncomingContext>(IncomingContext); }],
            ["mediaConfig", (o, n) => { (o as unknown as Call).mediaConfig = n.getObjectValue<MediaConfig>(MediaConfig); }],
            ["mediaState", (o, n) => { (o as unknown as Call).mediaState = n.getObjectValue<CallMediaState>(CallMediaState); }],
            ["meetingInfo", (o, n) => { (o as unknown as Call).meetingInfo = n.getObjectValue<MeetingInfo>(MeetingInfo); }],
            ["myParticipantId", (o, n) => { (o as unknown as Call).myParticipantId = n.getStringValue(); }],
            ["operations", (o, n) => { (o as unknown as Call).operations = n.getCollectionOfObjectValues<CommsOperation>(CommsOperation); }],
            ["participants", (o, n) => { (o as unknown as Call).participants = n.getCollectionOfObjectValues<Participant>(Participant); }],
            ["requestedModalities", (o, n) => { (o as unknown as Call).requestedModalities = n.getEnumValues<Modality>(Modality); }],
            ["resultInfo", (o, n) => { (o as unknown as Call).resultInfo = n.getObjectValue<ResultInfo>(ResultInfo); }],
            ["source", (o, n) => { (o as unknown as Call).source = n.getObjectValue<ParticipantInfo>(ParticipantInfo); }],
            ["state", (o, n) => { (o as unknown as Call).state = n.getEnumValue<CallState>(CallState); }],
            ["subject", (o, n) => { (o as unknown as Call).subject = n.getStringValue(); }],
            ["targets", (o, n) => { (o as unknown as Call).targets = n.getCollectionOfObjectValues<InvitationParticipantInfo>(InvitationParticipantInfo); }],
            ["tenantId", (o, n) => { (o as unknown as Call).tenantId = n.getStringValue(); }],
            ["toneInfo", (o, n) => { (o as unknown as Call).toneInfo = n.getObjectValue<ToneInfo>(ToneInfo); }],
            ["transcription", (o, n) => { (o as unknown as Call).transcription = n.getObjectValue<CallTranscriptionInfo>(CallTranscriptionInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AudioRoutingGroup>("audioRoutingGroups", this.audioRoutingGroups);
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeStringValue("callChainId", this.callChainId);
        writer.writeObjectValue<CallOptions>("callOptions", this.callOptions);
        writer.writeCollectionOfObjectValues<CallRoute>("callRoutes", this.callRoutes);
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeEnumValue<CallDirection>("direction", this.direction);
        writer.writeObjectValue<IncomingContext>("incomingContext", this.incomingContext);
        writer.writeObjectValue<MediaConfig>("mediaConfig", this.mediaConfig);
        writer.writeObjectValue<CallMediaState>("mediaState", this.mediaState);
        writer.writeObjectValue<MeetingInfo>("meetingInfo", this.meetingInfo);
        writer.writeStringValue("myParticipantId", this.myParticipantId);
        writer.writeCollectionOfObjectValues<CommsOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<Participant>("participants", this.participants);
        this.requestedModalities && writer.writeEnumValue<Modality>("requestedModalities", ...this.requestedModalities);
        writer.writeObjectValue<ResultInfo>("resultInfo", this.resultInfo);
        writer.writeObjectValue<ParticipantInfo>("source", this.source);
        writer.writeEnumValue<CallState>("state", this.state);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("targets", this.targets);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeObjectValue<ToneInfo>("toneInfo", this.toneInfo);
        writer.writeObjectValue<CallTranscriptionInfo>("transcription", this.transcription);
    };
    /**
     * Sets the audioRoutingGroups property value. Read-only. Nullable.
     * @param value Value to set for the audioRoutingGroups property.
     */
    public set audioRoutingGroups(value: AudioRoutingGroup[] | undefined) {
        this._audioRoutingGroups = value;
    };
    /**
     * Sets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Sets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @param value Value to set for the callChainId property.
     */
    public set callChainId(value: string | undefined) {
        this._callChainId = value;
    };
    /**
     * Sets the callOptions property value. 
     * @param value Value to set for the callOptions property.
     */
    public set callOptions(value: CallOptions | undefined) {
        this._callOptions = value;
    };
    /**
     * Sets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @param value Value to set for the callRoutes property.
     */
    public set callRoutes(value: CallRoute[] | undefined) {
        this._callRoutes = value;
    };
    /**
     * Sets the chatInfo property value. The chat information. Required information for joining a meeting.
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        this._chatInfo = value;
    };
    /**
     * Sets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @param value Value to set for the direction property.
     */
    public set direction(value: CallDirection | undefined) {
        this._direction = value;
    };
    /**
     * Sets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @param value Value to set for the incomingContext property.
     */
    public set incomingContext(value: IncomingContext | undefined) {
        this._incomingContext = value;
    };
    /**
     * Sets the mediaConfig property value. The media configuration. Required.
     * @param value Value to set for the mediaConfig property.
     */
    public set mediaConfig(value: MediaConfig | undefined) {
        this._mediaConfig = value;
    };
    /**
     * Sets the mediaState property value. Read-only. The call media state.
     * @param value Value to set for the mediaState property.
     */
    public set mediaState(value: CallMediaState | undefined) {
        this._mediaState = value;
    };
    /**
     * Sets the meetingInfo property value. The meeting information that's required for joining a meeting.
     * @param value Value to set for the meetingInfo property.
     */
    public set meetingInfo(value: MeetingInfo | undefined) {
        this._meetingInfo = value;
    };
    /**
     * Sets the myParticipantId property value. 
     * @param value Value to set for the myParticipantId property.
     */
    public set myParticipantId(value: string | undefined) {
        this._myParticipantId = value;
    };
    /**
     * Sets the operations property value. Read-only. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: CommsOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Sets the participants property value. Read-only. Nullable.
     * @param value Value to set for the participants property.
     */
    public set participants(value: Participant[] | undefined) {
        this._participants = value;
    };
    /**
     * Sets the requestedModalities property value. 
     * @param value Value to set for the requestedModalities property.
     */
    public set requestedModalities(value: Modality[] | undefined) {
        this._requestedModalities = value;
    };
    /**
     * Sets the resultInfo property value. 
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | undefined) {
        this._resultInfo = value;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: ParticipantInfo | undefined) {
        this._source = value;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: CallState | undefined) {
        this._state = value;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Sets the targets property value. 
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo[] | undefined) {
        this._targets = value;
    };
    /**
     * Sets the tenantId property value. 
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Sets the toneInfo property value. 
     * @param value Value to set for the toneInfo property.
     */
    public set toneInfo(value: ToneInfo | undefined) {
        this._toneInfo = value;
    };
    /**
     * Sets the transcription property value. The transcription information for the call. Read-only.
     * @param value Value to set for the transcription property.
     */
    public set transcription(value: CallTranscriptionInfo | undefined) {
        this._transcription = value;
    };
}
