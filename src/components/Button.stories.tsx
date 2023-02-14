import { Button } from "./Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default" };

export const Primary = Template.bind({});
Primary.args = { children: "Primary", color: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Secondary", color: "secondary" };

export const Danger = Template.bind({});
Danger.args = { children: "Danger", color: "danger" };

export const Disabled = Template.bind({});
Disabled.args = { children: "Disabled", disabled: true };
