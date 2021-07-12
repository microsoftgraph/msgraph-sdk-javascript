The authProviderOptions/ folders contains barrels for exporting Authentication Provider options such as MSAL and Azure Identity Token Credentials.

[tsconfig-sub-cjs.json](../tsconfig-sub-es.json) and [tsconfig-sub-cjs.json](../tsconfig-sub-es.json) contains the config for transpiling the files to authProviders/ output folder.

This approach is used because of the limitations of creating a submodule structure - References - https://github.com/microsoft/TypeScript/issues/8305 https://github.com/microsoft/TypeScript/issues/33079
