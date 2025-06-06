import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Tabs {...args} />,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account Settings</h4>
          <p className="text-muted-foreground text-sm">
            Configure how your account information is displayed and managed.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password Settings</h4>
          <p className="text-muted-foreground text-sm">
            Update your password and security preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Overview</h4>
          <p className="text-muted-foreground text-sm">
            Get a high-level view of your account status and recent activity.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Analytics</h4>
          <p className="text-muted-foreground text-sm">
            View detailed analytics and performance metrics.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Reports</h4>
          <p className="text-muted-foreground text-sm">Access and download your account reports.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="music">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="11" r="1" />
            <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
            <path d="M8 14a5 5 0 1 1 8 0" />
            <path d="M17 18.5a9 9 0 1 0-10 0" />
          </svg>
          Podcasts
        </TabsTrigger>
        <TabsTrigger value="live">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          Live
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Music Library</h4>
          <p className="text-muted-foreground text-sm">
            Browse and play your favorite music tracks.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="podcasts" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Podcast Library</h4>
          <p className="text-muted-foreground text-sm">
            Listen to your subscribed podcasts and discover new shows.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="live" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Live Streams</h4>
          <p className="text-muted-foreground text-sm">
            Watch live streaming content from your favorite creators.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Active Tab</h4>
          <p className="text-muted-foreground text-sm">This tab is currently active.</p>
        </div>
      </TabsContent>
      <TabsContent value="disabled" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Disabled Tab</h4>
          <p className="text-muted-foreground text-sm">
            This tab is disabled and cannot be accessed.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="pending" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Pending Tab</h4>
          <p className="text-muted-foreground text-sm">This tab contains pending items.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const CustomWidth: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="tab1" className="px-8">
          Wide Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="px-8">
          Wide Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Custom Width Tab 1</h4>
          <p className="text-muted-foreground text-sm">
            This tab uses custom width classes for a wider appearance.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="rounded-lg border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Custom Width Tab 2</h4>
          <p className="text-muted-foreground text-sm">
            This tab also uses custom width classes for consistency.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
