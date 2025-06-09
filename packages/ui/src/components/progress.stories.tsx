import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta = {
  title: 'Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => (
    <div className="w-[60%] min-w-40">
      <Progress aria-label="progress" value={45} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[60%] min-w-40 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>45%</span>
      </div>
      <Progress aria-label="progress" value={45} />
    </div>
  ),
}

export const CustomHeight: Story = {
  render: () => (
    <div className="w-[60%] min-w-40 space-y-4">
      <Progress aria-label="progress" value={45} className="h-1" />
      <Progress aria-label="progress-1" value={45} className="h-3" />
      <Progress aria-label="progress-2" value={45} className="h-4" />
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="w-[60%] min-w-40 space-y-4">
      <Progress aria-label="progress" value={45} className="bg-blue-100 [&>div]:bg-blue-500" />
      <Progress aria-label="progress-1" value={65} className="bg-green-100 [&>div]:bg-green-500" />
      <Progress aria-label="progress-2" value={85} className="bg-red-100 [&>div]:bg-red-500" />
    </div>
  ),
}

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [progress])

  return (
    <div className="w-[60%] min-w-40 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress aria-label="progress" value={progress} />
    </div>
  )
}

export const Loading: Story = {
  render: () => <LoadingProgress />,
}

export const States: Story = {
  render: () => (
    <div className="w-[60%] min-w-40 space-y-4">
      <div className="space-y-1.5">
        <span className="text-sm">Empty</span>
        <Progress aria-label="progress" value={0} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm">Quarter</span>
        <Progress aria-label="progress-1" value={25} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm">Half</span>
        <Progress aria-label="progress-2" value={50} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm">Three Quarters</span>
        <Progress aria-label="progress-3" value={75} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm">Full</span>
        <Progress aria-label="progress-4" value={100} />
      </div>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="w-[60%] min-w-40">
      <Progress
        aria-label="progress"
        value={65}
        className="h-3 rounded-xl bg-gradient-to-b from-blue-500 to-purple-500 [&>div]:bg-cyan-500 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500"
      />
    </div>
  ),
}
