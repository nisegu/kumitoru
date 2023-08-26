import Link from 'next/link'

export default function Footer() {
	return (
    <footer className="overflow-x-hidden flex-col flex-nowrap items-center bg-whtie border-0 border-t-2 flex-none h-auto justify-between py-6 pr-12 pl-10 w-full max-w-full">
			<div className="items-center flex-row flex-nowrap justify-center flex flex-none max-w-full">
				<Link href="" className="mr-5 mb-2 max-w-full h-auto w-auto justify-center text-black text-xs font-light text-center">
					特定商法取引に基づく表記
				</Link>
				<Link href="" className="mb-2 max-w-full h-auto w-auto justify-center text-black text-xs font-light text-center">
					プライバシーポリシー
				</Link>
			</div>
			<p className="mt-1 max-w-full h-auto w-auto justify-center items-center flex flex-row text-gray-300 text-xs font-light text-center">
				Ⓒ 2022 合同会社 SasaTech
			</p>
		</footer>
	)
}