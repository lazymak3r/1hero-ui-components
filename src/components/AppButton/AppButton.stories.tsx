import type { Meta, StoryObj } from '@storybook/react';

import AppButton from './AppButton';


const meta: Meta<typeof AppButton> = {

    title: 'AppButton',
    component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Secondary: Story = {
    args: {
        size: 'small',
        text: 'Secondary',
        variant: 'secondary'
    },
};


export const Primary: Story = {
    args: {
        size: 'default',
        text: 'Primary',
        variant: 'primary'
    },
};


export const Danger: Story = {
    args: {
        size: 'small',
        text: 'Danger',
        variant: 'danger'
    },
};

export const Success: Story = {
    args: {
        size: 'small',
        text: 'Success',
        variant: 'success'
    },
};