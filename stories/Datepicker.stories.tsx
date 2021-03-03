import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Datepicker, DatepickerProps } from '../src'
import { withChakra } from './utils/withChakra'

const startDate = new Date()
const endDate = new Date()
endDate.setDate(endDate.getDate() + 5)

const meta: Meta = {
  title: 'Datepicker',
  component: Datepicker,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [withChakra],
}
export default meta

const Template: Story<DatepickerProps> = args => <Datepicker {...args} />

export const Default = Template.bind({})
Default.args = {
  onDayRender: undefined,
  overwriteDefaultStyles: true,
}
