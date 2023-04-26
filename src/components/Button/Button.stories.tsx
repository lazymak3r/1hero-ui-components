// import React from "react";
// import { ComponentMeta, ComponentStory } from "@storybook/react";
// import Button from "./Button";

// export default {
//   title: "Components/Button",
//   component: Button,
// } as ComponentMeta<typeof Button>;

// // Create a master template for mapping args to render the Button component
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// // Reuse that template for creating different stories
// export const Primary = Template.bind({});

// export const Secondary = Template.bind({});





// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
Primary.args = { label: "Primary 😃", size: "large", type: "primary" };


export const Secondary: Story = {};
Secondary.args = { ...Primary.args, type: "secondary", label: "Secondary 😇" };