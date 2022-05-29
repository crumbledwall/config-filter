import Head from '@/components/common/head'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head />
      <div className="min-h-screen min-w-full flex flex-col items-center dark:bg-gray-900">
        {children}
      </div>
    </>
  )
}
