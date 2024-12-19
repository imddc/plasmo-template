import type { PlasmoCSConfig } from 'plasmo'
import cssText from 'data-text:~/styles/global.css'

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
  return (
    <>
      <div className="text-red-50">plasmo template</div>

      <div>
        this is content
      </div>
    </>
  )
}

export default Content
