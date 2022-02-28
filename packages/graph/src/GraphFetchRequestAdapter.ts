import { BaseBearerTokenAuthenticationProvider, ParseNodeFactory, ParseNodeFactoryRegistry, SerializationWriterFactory, SerializationWriterFactoryRegistry } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter, HttpClient } from "@microsoft/kiota-http-fetchlibrary";

class GraphRequestAdapter extends FetchRequestAdapter {
    constructor(public readonly authenticationProvider: BaseBearerTokenAuthenticationProvider, parseNodeFactory: ParseNodeFactory = ParseNodeFactoryRegistry.defaultInstance, serializationWriterFactory: SerializationWriterFactory = SerializationWriterFactoryRegistry.defaultInstance, readonly httpClient: HttpClient){
        super(authenticationProvider, parseNodeFactory, serializationWriterFactory, httpClient);
    }   

    
}   