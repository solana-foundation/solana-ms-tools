import type { Meta, StoryObj } from '@storybook/react-vite'
import { BellIcon, HomeIcon, PlusIcon, SearchIcon, SettingsIcon, UserIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from './sidebar'

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[600px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
  render: (args) => <Sidebar {...args} />,
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

const DefaultSidebarContent = () => (
  <>
    <SidebarHeader>
      <SidebarTrigger />
      <SidebarInput placeholder="Search..." />
    </SidebarHeader>
    <SidebarContent className="overflow-hidden">
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive tooltip="Home">
                <HomeIcon />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Search">
                <SearchIcon />
                <span>Search</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>
          Projects
          <SidebarGroupAction>
            <PlusIcon className="h-4 w-4" aria-label="add project" />
          </SidebarGroupAction>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>Project A</span>
                <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>Project B</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <BellIcon />
            <span>Notifications</span>
            <SidebarMenuBadge>5</SidebarMenuBadge>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <UserIcon />
            <span>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </>
)

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const Floating: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const Inset: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset">
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const RightSide: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar side="right">
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const IconCollapsible: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const NonCollapsible: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="none">
        <DefaultSidebarContent />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar className="bg-gradient-to-b from-blue-500/10 to-purple-500/10">
        <SidebarHeader className="border-b">
          <SidebarTrigger className="text-primary" />
          <SidebarInput className="text-white backdrop-blur-sm" placeholder="Search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-primary">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <HomeIcon />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="hover:bg-primary/10">
                    <SearchIcon />
                    <span>Search</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-primary/10">
                <UserIcon />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  ),
}
