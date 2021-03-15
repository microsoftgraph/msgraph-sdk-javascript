/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * The purpose of this file is to export from src/browser/index.ts
 * and the src/browser/ImplicitMSALAuthenticationProvider.
 * No separate rollup entry point and bundled file is added for ImplicitMSALAuthenticationProvider as it is deprecated.
 * After the ImplicitMSALAuthenticationProvider feature is removed,
 * the entry point for rollup should point to src/browser/index.ts.
 */
export * from "./index";
export * from "./ImplicitMSALAuthenticationProvider";
