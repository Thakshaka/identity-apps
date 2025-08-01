/**
 * Copyright (c) 2020-2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { InitOptions } from "i18next";

/**
 * Model for locale meta information.
 */
export interface LocaleMeta {
    /**
     * Whether the language is enabled in the application.
     */
    enabled?: boolean;
    /**
     * Whether to show this language in the language switcher UI.
     * Defaults to true if `enabled` is true.
     */
    showOnLanguageSwitcher?: boolean;
    /**
     * ISO language code.
     */
    code: string;
    /**
     * Flag to be used on the switcher.
     */
    flag?: any;
    /**
     * Display name for the language.
     */
    name: string;
    /**
     * Text direction for the language.
     */
    direction?: string;
    /**
     * Set of available namespaces
     */
    namespaces: string[];
    /**
     * Set of namespace paths.
     */
    paths?: NamespacePathInterface;
}

/**
 * Namespace path interface.
 */
interface NamespacePathInterface {
    [ ns: string ]: string;
}

/**
 * Model for locale bundle.
 */
export interface LocaleBundle {
    /**
     * Meta information regarding the locale.
     */
    meta: LocaleMeta;
    /**
     * Resource bundle for the locale.
     */
    resources: any;
}

/**
 * Model for set of locale bundle.
 */
export interface LocaleBundles {
    [ language: string ]: LocaleBundle;
}

/**
 * Model for supported languages metadata.
 */
export interface SupportedLanguagesMeta {
    [ language: string ]: LocaleMeta;
}

/**
 * Type for i18n module init options.
 */
export type I18nModuleInitOptions = InitOptions

/**
 * Model for defining i18n module options.
 */
export interface I18nModuleOptionsInterface {
    initOptions?: I18nModuleInitOptions;
    langAutoDetectEnabled?: boolean;
    namespaceDirectories?: Map<string, string>;
    overrideOptions?: boolean;
    resourcePath?: string;
    resourceExtensionsPath: string;
    xhrBackendPluginEnabled?: boolean;
}
