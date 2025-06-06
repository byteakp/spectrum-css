import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const ActionButtons = (args, context) => {
	return html`
		<div style="display: flex; column-gap: 13px; row-gap: 24px;">
			${Template(args, context)}
			${Template({
				...args,
				iconName: undefined,
			}, context)}
			${Template({
				...args,
				hideLabel: true,
			}, context)}
			${Template({
				...args,
				hasPopup: "true",
				hideLabel: true,
			}, context)}
			${Template({
				...args,
				iconName: undefined,
				hasPopup: "true",
			}, context)}
		</div>
	`;
};

const Truncation = (args, context) => {
	return html`
		${Template(args, context)}
		${Template({
			...args,
			iconName: undefined,
		}, context)}
	`;
};

export const ActionButtonGroup = Variants({
	Template: ActionButtons,
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Standard",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Quiet + emphasized",
			isEmphasized: true,
			isQuiet: true,
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static black - emphasized",
			staticColor: "black",
			isEmphasized: true,
		},
		{
			testHeading: "Static black - quiet",
			staticColor: "black",
			isQuiet: true,
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
		{
			testHeading: "Static white - emphasized",
			staticColor: "white",
			isEmphasized: true,
		},
		{
			testHeading: "Static white - quiet",
			staticColor: "white",
			isQuiet: true,
		},
		{
			Template: Truncation,
			testHeading: "Truncation",
			label: "Truncate this long content",
			customStyles: {
				maxInlineSize: "100px"
			},
			withStates: false,
		},
		{
			testHeading: "Internationalization (Thai)",
			label: "ล้างทั้งหมด",
		},
	],
	stateData: [{
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Selected",
		isSelected: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}, {
		testHeading: "Hovered",
		isHovered: true,
	}, {
		testHeading: "Active",
		isActive: true,
	}, {
		testHeading: "Disabled + selected",
		isDisabled: true,
		isSelected: true,
	}, {
		testHeading: "Hovered + selected",
		isHovered: true,
		isSelected: true,
	}, {
		testHeading: "Focused + selected",
		isFocused: true,
		isSelected: true,
	}, {
		testHeading: "Active + selected",
		isActive: true,
		isSelected: true,
	}]
});
