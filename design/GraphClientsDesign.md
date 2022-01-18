
### Graph JS Deliverables:

Note: Package names yet to be decided

1. `microsoftgraph/microsoft-graph-javascript-service`: 

    - Generated library which the request builders. Generated using Kiota builder.

    - Will have dependencies on :
        - @microsoftgraph/microsoft-graph-javascript-core
        - @microsoft/kiota-abstractions
        - @microsoft/kiota-http-fetchlibrary
        - @microsoft/kiota-serialization-json
        
2. `microsoftgraph/microsoft-graph-javascript-core`:

    - Contains Graph customizations and tasks such as PageIteration, LargeFileUpload.

    - Will have dependencies on :
      - @microsoft/kiota-abstractions
      - @microsoft/kiota-http-fetchlibrary
        
### Usage of the two libraries :

As mentioned in PR: #558

Goals: 

- A Graph JS SDK user should not be required to create separate client instances for Graph Service library or the Graph Core library.
- To achieve this, the `Graph Service Client` should also expose the features of `Graph Core Client`.

Design:

1. `Graph Service client` should extend from `Graph Core Client`:

```

import { Client as GraphCoreClient } from `@microsoft/microsoft-graph-javascript-core`;


class GraphServiceClient extends GraphCoreClient {

    public api(){
        super.api();
    }
}
```

- To acheive the above design we will need to customize the auto-generated `GraphServiceClient`.


