import type { PlasmoCSConfig } from 'plasmo'
import cssText from 'data-text:~/styles/global.css'
import { Button } from '~/components/ui/button'
import { injectMainStyles } from '~/lib/utils'

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  all_frames: true,
}

// 引入tailwind
export function getStyle() {
  const style = document.createElement('style')
  style.textContent = cssText
  return style
}

function Content() {
  injectMainStyles(cssText)

  return (
    <div>
      <h1 className="text-blue-500">
        plasmo template
      </h1>

      <Button type="button">this is a button from shadcn</Button>
    </div>
  )
}

export default Content
