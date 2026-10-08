import { useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, ReactNode } from 'react'

export interface TabItem {
  id: string
  label: ReactNode
  content: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  className?: string
  label?: string
}

export default function Tabs({ tabs, className = '', label = 'Tabs' }: TabsProps) {
  const [activeId, setActiveId] = useState<string>(tabs[0]?.id ?? '')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  if (tabs.length === 0) return null

  const active = tabs.find(tab => tab.id === activeId) ?? tabs[0]
  const activeIndex = tabs.findIndex(tab => tab.id === active.id)

  function selectTab(index: number, focus: boolean) {
    const target = tabs[(index + tabs.length) % tabs.length]
    setActiveId(target.id)
    if (focus) tabRefs.current[index]?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case 'ArrowRight':
        selectTab(activeIndex + 1, true)
        break
      case 'ArrowLeft':
        selectTab(activeIndex - 1, true)
        break
      case 'Home':
        selectTab(0, true)
        break
      case 'End':
        selectTab(tabs.length - 1, true)
        break
      default:
        return
    }
    event.preventDefault()
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} className="tabs__list">
        {tabs.map((tab, index) => {
          const selected = tab.id === active.id
          return (
            <button
              key={tab.id}
              ref={element => {
                tabRefs.current[index] = element
              }}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={selected}
              aria-controls={`panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(index, false)}
              onKeyDown={handleKeyDown}
              className={`tab${selected ? ' active' : ''}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div
        key={active.id}
        role="tabpanel"
        id={`panel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
        className="tabs__panel animate-rise"
        style={{ '--d': '80ms' } as CSSProperties}
      >
        {active.content}
      </div>
    </div>
  )
}
