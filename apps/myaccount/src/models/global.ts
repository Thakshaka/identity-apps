/**
 * Copyright (c) 2019, WSO2 LLC. (https://www.wso2.com).
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

import { SupportedLanguagesMeta } from "@wso2is/i18n";
import { AlertInterface } from "./alert";

export interface GlobalInterface {
    alert: AlertInterface;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    alertSystem: any;
    isApplicationsPageVisible: boolean;
    isGlobalLoaderVisible: boolean;
    supportedI18nLanguages: SupportedLanguagesMeta;
    supportedLocaleExtensions: SupportedLanguagesMeta;
    activeForm: string;
}
