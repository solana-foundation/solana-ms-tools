import React, { useCallback, useEffect, useState } from 'react'

interface ColorCircleProps {
  color: string
}

interface ColorItemProps {
  name: string
}

interface ColorSectionProps {
  title: string
  colors: string[]
}

interface ThemeViewerProps {}

export const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: `var(--${color})`,
        border: '1px solid var(--border)',
      }}
    />
  )
}

export const ColorItem: React.FC<ColorItemProps> = ({ name }) => {
  const [colorValue, setColorValue] = useState('')

  const updateColorValue = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Small delay to ensure computed styles are updated after theme change
      setTimeout(() => {
        // Get computed style to extract the actual color value
        const computedStyle = getComputedStyle(document.documentElement)
        const value = computedStyle.getPropertyValue(`--${name}`).trim()
        setColorValue(value)
      }, 50)
    }
  }, [name])

  useEffect(() => {
    // Initial color value
    updateColorValue()

    // Set up a mutation observer to watch for class changes on document element
    // This will detect when Storybook's theme toggler changes the theme
    if (typeof window !== 'undefined' && window.MutationObserver) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            updateColorValue()
          }
        })
      })

      // Start observing document element for class changes
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })

      // Also listen for our custom theme change event for backward compatibility
      window.addEventListener('themeChange', updateColorValue)

      return () => {
        observer.disconnect()
        window.removeEventListener('themeChange', updateColorValue)
      }
    }

    return () => {
      window.removeEventListener('themeChange', updateColorValue)
    }
  }, [name, updateColorValue])

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0', gap: '16px' }}>
      <div style={{ width: '240px' }}>
        <code>--{name}</code>
      </div>
      <ColorCircle color={name} />
      <div style={{ fontSize: '14px', opacity: 0.8 }}>{colorValue}</div>
    </div>
  )
}

export const ColorSection: React.FC<ColorSectionProps> = ({ title, colors }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3>{title}</h3>
      <div>
        {colors.map((color) => (
          <ColorItem key={color} name={color} />
        ))}
      </div>
    </div>
  )
}

const ThemeViewer: React.FC<ThemeViewerProps> = () => {
  // Theme color categories
  const baseColors = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'border',
    'input',
    'ring',
  ]

  const uiColors = [
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'accent',
    'accent-secondary',
    'accent-foreground',
    'muted',
    'muted-foreground',
  ]

  const semanticColors = ['destructive', 'destructive-foreground', 'success', 'success-foreground']

  const alertColors = ['alert-success', 'alert-error', 'alert-warning', 'alert-info']

  const chartColors = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5']

  const sidebarColors = [
    'sidebar',
    'sidebar-foreground',
    'sidebar-primary',
    'sidebar-primary-foreground',
    'sidebar-accent',
    'sidebar-accent-foreground',
    'sidebar-border',
    'sidebar-ring',
  ]

  const otherUiElements = [
    'table-background',
    'table-head-background',
    'table-stroke',
    'switch-thumb-unchecked',
    'switch-track-unchecked',
  ]

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <ColorSection title="Base Colors" colors={baseColors} />
      <ColorSection title="UI Colors" colors={uiColors} />
      <ColorSection title="Semantic Colors" colors={semanticColors} />
      <ColorSection title="Alert Colors" colors={alertColors} />
      <ColorSection title="Chart Colors" colors={chartColors} />
      <ColorSection title="Sidebar Colors" colors={sidebarColors} />
      <ColorSection title="Other UI Elements" colors={otherUiElements} />
    </div>
  )
}

export default ThemeViewer
