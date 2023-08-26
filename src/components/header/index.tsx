import Link from 'next/link'
import Image from 'next/image'

export default function header() {
	return (
    <header className="box-border top-0 right-0 flex-none h-20 px-5 w-full max-w-full justify-between bottom-auto items-center flex-row flex-nowrap fixed flex bg-white  scrollbar::display-none">
        <h1 className="box-border items-center flex-row flex-nowrap flex flex-none max-w-full justify-center ">
            <Link href="/" className="items-start bg-transparent flex-none flex-col flex-nowrap h-auto justify-center max-w-full flex">
                <Image
                 src="/kumitoru.webp"
                 alt="kimitoru"
                 width={120}
                 height={29}
                 className="flex-none max-w-full items-center flex-col flex-nowrap flex "
                />
            </Link>
        </h1>
        <div className="box-border items-center flex-1 flex-row flex-nowrap h-auto justify-end w-auto max-w-full flex">
            <Link href="/" className="rounded-md px-3 py-2 items-center bg-blue-500 flex-none flex-row flex-nowrap h-auto justify-center w-auto max-w-full flex">
                <i className="text-white text-sm mr-2 max-w-full items-center flex flex-row justify-center">mail</i>
                <p className="text-xs text-left justify-start text-white flex-none font-black h-7 w-auto items-center flex flex-row flex-nowrap pt-1">資料請求</p>
            </Link>
        </div>
    </header>
	)
}