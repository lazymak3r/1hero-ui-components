import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from '../components/AppButton/AppButton';


const meta: Meta<typeof AppButton> = {

    title: 'AppButton',
    component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Secondary: Story = {
    args: {
        size: 'small',
    },
};


export const Primary: Story = {
    args: {
        size: 'default',
    },
};


export const Danger: Story = {
    args: {
        size: 'small',
    },
};