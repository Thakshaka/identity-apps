/**
 * Copyright (c) 2022-2025, WSO2 LLC. (https://www.wso2.com).
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

import { fireEvent,render, screen, waitFor, within } from "@wso2is/unit-testing/utils";
import React from "react";
import {
    addOrganizationMockResponse,
    getOrganizationsEmptyMockResponse,
    getOrganizationsFilterMockResponse
} from "../__mocks__/organization";
import "@testing-library/jest-dom";
import * as api from "../api/organization";
import { AddOrganizationModal, AddOrganizationModalPropsInterface } from "../components";

const onUpdateMock: jest.Mock<any, any> = jest.fn();
const addComponentModalProps: AddOrganizationModalPropsInterface = {
    closeWizard: jest.fn(),
    onUpdate: onUpdateMock,
    parent: {
        id: "1",
        name: "Parent Organization",
        ref: "ref",
        status: "ACTIVE"
    }
};

describe("UTC-1.0 - [Organization Management Feature] - Add Organization Modal", () => {
    const addOrganizationMock: jest.SpyInstance = jest.spyOn(api, "addOrganization");
    const getOrganizationsMock: jest.SpyInstance = jest.spyOn(api, "getOrganizations");
    const checkOrgHandleAvailability: jest.SpyInstance = jest.spyOn(api, "checkOrgHandleAvailability");

    addOrganizationMock.mockImplementation(() => Promise.resolve(addOrganizationMockResponse));

    getOrganizationsMock.mockImplementation((filter: string) => {
        if (filter === "name eq Organization One") {
            return Promise.resolve(getOrganizationsFilterMockResponse);
        }

        return Promise.resolve(getOrganizationsEmptyMockResponse);
    });

    checkOrgHandleAvailability.mockImplementation(() => Promise.resolve({ available: true }));

    test("UTC-1.1 - Test if the parent name is shown in the subheading", () => {
        render(
            <AddOrganizationModal { ...addComponentModalProps } />
        );

        expect(screen.getByTestId("organization-create-wizard-subheading").innerHTML).toContain("Parent Organization");
    });

    test("UTC-1.2 - Test if the needed fields are shown", () => {
        render(
            <AddOrganizationModal { ...addComponentModalProps } />
        );

        expect(screen.getByTestId("organization-create-wizard-organization-name-input")).toBeInTheDocument();
        expect(screen.getByTestId("organization-create-wizard-description-input")).toBeInTheDocument();
        expect(screen.getByTestId("organization-create-wizard-next-button")).toBeInTheDocument();
    });

    test("UTC-1.3 - Test if name requirement validation is working", async () => {
        render(
            <AddOrganizationModal { ...addComponentModalProps } />
        );

        fireEvent.change(
            within(screen.getByTestId("organization-create-wizard-organization-name-input")).getByRole("textbox"),
            { target: { value: "" } }
        );

        fireEvent.click(screen.getByTestId("organization-create-wizard-next-button"));

        expect(
            await screen.findByText("organizations:forms.addOrganization.name.validation.empty")
        ).toBeInTheDocument();
    });

    test("UTC-1.4 - Test if the form can be submitted", async () => {
        render(
            <AddOrganizationModal { ...addComponentModalProps } />
        );

        fireEvent.change(
            within(screen.getByTestId("organization-create-wizard-organization-name-input")).getByRole("textbox"),
            { target: { value: "Organization Two" } }
        );

        const orgHandleInput: HTMLInputElement
            = within(screen.getByTestId("organization-create-wizard-organization-handle-input")).getByRole("textbox");

        await waitFor(() => {
            expect(orgHandleInput.value).toEqual(expect.stringContaining("organizationtwo"));
        });

        fireEvent.click(screen.getByTestId("organization-create-wizard-next-button"));

        await waitFor(() => {
            expect(addOrganizationMock).toHaveBeenCalledTimes(1);
        });

        expect(onUpdateMock.mock.calls.length).toBe(1);
    });
});
