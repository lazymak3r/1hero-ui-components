import type { Meta, StoryObj } from '@storybook/react';

import { AppInput } from '../components/AppInput/AppInput';


const meta: Meta<typeof AppInput> = {

    title: 'AppInput',
    component: AppInput,
};

export default meta;
type Story = StoryObj<typeof AppInput>;

export const First: Story = {
    args: {
        placeholder: 'first'
    },
};


export const Second: Story = {
    args: {
        placeholder: 'second'
    },
};

