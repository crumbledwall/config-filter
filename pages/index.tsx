import Layout from '@/components/common/layout'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function Home() {
  const [copyMessage, setCopyMessage] = useState('copy')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  function randTag() {
    return (Math.random() + 1).toString(36).substring(7)
  }

  const filter = () => {
    const reg = /.*?\"(.*)\".*?address\=(.*)\/(\d{1,2}).*?gateway=(.*)/g
    setOutput(
      input.replaceAll(reg, `ip route-static $2 $3 G0/0/5 $4 tag ${randTag()} description $1`)
    )
  }

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleOutputChange = (event) => {
    setInput(event.target.value)
  }

  const clear = () => {
    setInput('')
    setOutput('')
  }

  const copy = () => {
    setCopyMessage('copied')
    setTimeout(() => {
      setCopyMessage('copy')
    }, 1000)
  }
  return (
    <Layout>
      <div className="w-full h-full flex-1 flex items-center justify-center container px-4">
        <div className="flex-col w-full items-center flex gap-6 py-12">
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="text-gray-500">待转换文本</div>
            </div>
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <textarea
                id="editor"
                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder='例如： add check-gateway=arp comment="114514" disabled=yes distance=54 dst-address=0.0.0.0/0 gateway=0.0.0.0 （支持多行）'
                rows={5}
                value={input}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
              <div className="text-gray-500">转换结果</div>
              <CopyToClipboard onCopy={copy} text={output}>
                <button
                  type="button"
                  data-tooltip-target="tooltip-fullscreen"
                  className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 flex items-center"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2164"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path
                      d="M842.666667 285.866667l-187.733334-187.733334c-14.933333-14.933333-32-21.333333-53.333333-21.333333H234.666667C194.133333 74.666667 160 108.8 160 149.333333v725.333334c0 40.533333 34.133333 74.666667 74.666667 74.666666h554.666666c40.533333 0 74.666667-34.133333 74.666667-74.666666V337.066667c0-19.2-8.533333-38.4-21.333333-51.2z m-44.8 44.8c-2.133333 2.133333-4.266667 0-8.533334 0h-170.666666c-6.4 0-10.666667-4.266667-10.666667-10.666667V149.333333c0-2.133333 0-6.4-2.133333-8.533333 0 0 2.133333 0 2.133333 2.133333l189.866667 187.733334z m-8.533334 554.666666H234.666667c-6.4 0-10.666667-4.266667-10.666667-10.666666V149.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h311.466666c-2.133333 4.266667-2.133333 6.4-2.133333 10.666666v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h170.666666c4.266667 0 6.4 0 10.666667-2.133334V874.666667c0 6.4-4.266667 10.666667-10.666667 10.666666z"
                      p-id="2165"
                    ></path>
                    <path
                      d="M640 693.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h298.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM640 522.666667H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h298.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM341.333333 416h85.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-85.333334c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32z"
                      p-id="2166"
                    ></path>
                  </svg>
                  {copyMessage}
                </button>
              </CopyToClipboard>
            </div>
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <textarea
                id="editor"
                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="转换结果"
                value={output}
                rows={5}
                onChange={handleOutputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <button
              type="button"
              className="w-36 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={filter}
            >
              转换
            </button>
            <button
              type="button"
              className="w-36 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={clear}
            >
              重置
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
