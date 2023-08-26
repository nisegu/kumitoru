import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mt-24 max-full items-center bg-white overflow-x-hidden">

      {/* mainvisual */}
      <section className="overflow-x-hidden flex items-end border-b-0 border-l-0 border-r-0 border-t-0 flex-none flex-row flex-nowrap h-auto justify-between w-full max-w-full z-10">
        <div className="flex-none w-10 max-w-full items-center flex-col flex-nowrap h-auto justify-end z-10 flex">
          <Image
            src="/scroll.webp"
            alt="scroll"
            width={14}
            height={87}
            className="flex-none h-auto z-10 items-center flex flex-col felx-nowrap relative"
          />
        </div>
        <div className="flex-none w-full max-w-full items-end rounded-xl flex-col flex-nowrap h-auoto justify-center flex relative">
          <div className="before:content-[''] before:bg-smartphone before:bg-cover before:brightness-75 before:bg-center before:absolute before:top-0 before:left-0 before:w-full before:-z-20 before:h-full before:rounded-2xl pt-10 pr-14 pb-7 pl-6 items-start flex-none flex-col flex-nowrap h-auto justify-center w-full max-w-full z-0 relative">
            <div className="items-start flex-col flex-nowrap justify-center max-w-full flex none ">
              <div className="hidden mb-2 flex-none h-auto w-full max-w-full text-lefttext-base text-white">
                <p className="mb-2 block text-sm font-black ">
                  制作費0円!
                </p>
                <p className="mb-2 block text-sm font-black ">
                  サブスクで目的に最適化されたホームページを制作します。
                </p>
              </div>
              <div className="mb-1 w-full max-w-full text-base font-black text-white flex-none h-auto text-left">
                <p className="mb-2 block text-xl font-black leading-">
                  初期費用無料。サブスクリプションで
                </p>
                <p className="mb-2 block text-xl font-black ">
                  お客様に合ったオリジナルのホームページを制作します。
                </p>
              </div>
              <p className="hidden mb-5 flex-none max-w-full text-xs text-white text-left">
                私たちはお客様の力になることを目的としています。煩雑な手続きや処理は全てこちらで代行します。
                <br />また、コンテンツに関してもこちらで意汲み取り、良いホームページを制作いたします。
                <br />まずはお気軽に無料ホームページ制作相談をご利用ください。
              </p>
              <p className="flex mb-5 flex-none h-auto max-w-full justify-start text-xs text-white text-left leading-5">
                私たちは、お客様の力になる事のみを目的としています。そのため、煩雑な手続きや処理は全てこちらで代行します。
                <br />安心して私たちにご依頼ください。ご連絡をお待ちしています。
              </p>
              <Link href="" className="px-4 py-2 bg-blue-500 border-b-0 border-l-0 border-r-0 border-t-0 rounded-md flex-none flex-col flex-nowrap h-auto justify-center w-auto max-w-full">
                <p className="justify-start flex-none h-7 relative w-auto z-20 max-w-full text-left text-white text-lg font-bold">
                  資料請求
                </p>
                <div className="bg-white -bottom-0.5 flex-none h-auto -left-0.5 absolute right-auto -top-0.5 w-0 max-w-full"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="overflow-x-hidden mb-5 w-full max-w-full items-end bg-white border-b-0 border-l-0 border-r-0 border-t-0 flex-none flex-row flex-nowrap h-auto justify-end ">
        <div className="flex-1 ml-12 py-5 w-auto max-w-full  items-center bg-white border-b-2 border-l-0 border-r-0 border-t-0 flex-row flex-nowrap h-auto justify-between ">
          <div className="items-start flex-col flex-nowrap flex-none h-auto justify-center mr-5 w-auto max-w-full">
            <p className="mr-14 mb-2 max-w-full flex-none h-auto w-auto justify-start text-black text-base text-left ">
              News
            </p>
            <Link href="" className="mr-5 mb-1 max-w-full flex-none h-auto w-auto justify-start text-gray-400 text-sm text-left leading-6">
              2022.08.31
            </Link>
            <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex flex-row text-black text-sm text-left leading-6">
              9月1日よりプラン内容を変更いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="py-10 items-start bg-white flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full text-black">
        <div className="pr-14 pl-10 w-full max-w-full flex-none justify-start items-start flex-row flex-nowrap z-0">
          <div className="flex-none relative  w-auto -z-10 max-w-full text-5xl text-white text-left">
            <p className=" block text-left text-black text-5xl">
              a
            </p>
          </div>
          <p className="flesx-none h-auto max-w-full justify-start text-lg font-black text-left">
            「ホームページを作りたいけど、よく分からない。」
            <br />
            「初期費用が高い。」「いいサイトができない。」
            <br />
            分からなくても構いません。全てお任せください。
          </p>
        </div>
        <div className="p-11 items-center flex-none flex-row flex-nowrap h-auto justify-start  overflow-x-auto overflow-y-hidden flex w-full max-w-full">
          
          <div className="px-10 py-7 items-start bg-red-100 rounded-md flex-none flex-col flex-nowrap h-auto justify-center mr-10 w-96 max-w-full">
            <div className="flex-none h-auto mb-2 w-64 max-w-full text-red-700 text-lg font-black text-left ">
              <p className="rounded-none block font-bold text-left">相談は完全無料</p>
            </div>
            <p className="flex-none h-auto w-96 max-w-full justify-start text-sm text-red-700 font-bold">
              お問い合わせ・相談の段階では一切お代を頂きません。
              <br />サイト制作自体を検討している段階でも構いませんので、気になることなどあれば気楽にご相談ください。
            </p>
          </div>

          <div className="px-10 py-7 items-start bg-orange-100 rounded-md flex-none flex-col flex-nowrap h-auto justify-center mr-10 w-96 max-w-full">
            <div className="flex-none h-auto mb-2 w-64 max-w-full text-yellow-700 text-lg font-black text-left ">
              <p className="rounded-none block font-bold text-left">
                全てをお任せ
              </p>
            </div>
            <p className="flex-none h-auto w-96 max-w-full justify-start text-yellow-700 text-sm font-bold">
              よく分からない、お任せしたいというお客様の場合、ご要望を汲み取って最適な形に仕上げてさせていただきます。
              <br />面倒なやり取りや、専門的な手続きなどは全てこちらで負担いたします。
            </p>
          </div>
          <div className="px-10 py-7 items-start bg-green-100 rounded-md flex-none flex-col flex-nowrap h-auto justify-center mr-10 w-96 max-w-full">
            <div className="flex-none h-auto mb-2 w-64 max-w-full text-green-700 text-lg font-black text-left" >
              <p className="rounded-none block font-bold text-left">
                初期費用が無料
              </p>
            </div>
            <p className="flex-none h-auto w-96 max-w-full justify-start text-green-700 font-bold text-sm">
              依頼する際は初期費用がある程度必要ですが、それでは負担が大きくなってしまいます。
              そこで、気軽にホームページ制作の依頼ができるように初期費用は頂いていません。
            </p>
          </div>
          <div className="px-10 py-7 items-start bg-indigo-100 rounded-md flex-none flex-col flex-nowrap h-auto justify-center mr-10 w-96 max-w-full">
            <div className="flex-none h-auto mb-2 w-64 max-w-full text-indigo-700 text-lg font-black text-left" >
              <p className="rounded-none block font-bold text-left">
                業界トップクラスのデザイン
              </p>
            </div>
            <p className="flex-none h-auto w-96 max-w-full justify-start text-indigo-700 font-bold text-sm">
              無駄な工程を削減し、相場よりも格安の料金で業界トップクラスのデザインを実現しています。
              <br />お客様のご要望・イメージに寄り添う形でデザインさせて頂きます。
            </p>
          </div>
        </div>
        <div className="items-center bg-white flex-none flex-col flex-nowrap h-auto justify-center w-full max-w-full">
          <div className="hidden">
            <p>
              高いクオリティのホームページを、安価に制作できます。
            </p>
            <p>
              高いクオリティのホームページを、安価に制作できます。
            </p>
          </div>
          <div className="flex max-w-full flex-col items-center flex-nowrap justify-center flex-none">
            <p className="mb-5 w-auto max-w-full justify-center flex-none text-xl leading-6 font-black text-orange-500 text-center z-0 transform translate-x-0 translate-y-0 skew-x-0 skew-y-0">
              高いクオリティのホームページを、
              <br/>安価に制作できます。
            </p>
            <p className="bg-yellow-300 flex-none h-auto w-auto max-w-full justify-center text-xl leading-4 text-yellow-400 text-center transform -translate-x-1 -translate-y-14 scale-x-105 scale-y-50 opacity-60 skew-x-0 skew-y-0">
              高いクオリティのホームページを
            </p>
            <p className="bg-yellow-300 flex-none h-auto w-auto max-w-full justify-center text-xl leading-4 text-yellow-400 text-center transform -translate-x-1 -translate-y-12 scale-x-105 scale-y-50 opacity-60 skew-x-0 skew-y-0">
              安価に制作できます
            </p>
          </div>
          <Link href="" className="mx-auto items-center bg-blue-600 rounded-xl flex-none flex-row flex-nowrap h-auto justify-center p-6 w-80 max-w-full overflow-visible flex">
            <div className="items-center flex-col flex-nowrap justify-center flex flex-none max-w-full relative">
              <div className="items-center bg-white border-2  border-blue-600 rounded-md flex-none flex-col flex-nowrap h-10 justify-center -mt-10 mb-4 px-5 py-3 w-auto max-w-full" >
                <p className="justify-start flex-none h-auto relative w-auto z-10 max-w-full text-left text-blue-500 text-xs font-bold ">
                  1~3営業日内に返信いたします
                </p>
              </div>
              <div className="items-center flex-row flex-nowrap justify-center flex flex-none max-w-full relative">
                <i className="mr-2 max-w-full items-center flex flex-row justify-center text-white text-base">
                  mail
                </i>
                <p className="flex-none justify-start h-auto relative w-auto max-w-full z-20 text-left text-white text-base font-black ">
                  資料請求
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* elect */}
      <section className="z-0 pt-14 px-6 pb-5 items-center flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full relative 
      before:content-[''] before:bg-blackpc before:brightness-75 before:bg-center before:bg-cover before:h-full before:left-0 before:absolute before:top-0 before:w-full before:-z-10">
        <div className="mb-7 w-full max-w-full items-center flex-none flex-col flex-nowrap h-12 justify-center flex">
          <p className="flex-none h-auto mb-2 w-full max-w-full justify-center text-xl text-white font-black text-center">
            私たちが選ばれる、3つの理由
          </p>
          <div className="bg-white rounded-sm flex-none h-0.5 w-24 max-w-full items-center flex flex-col flex-nowrap relative"/>
        </div>
        <div className="flex-col flex-nowrap items-stretch flex-none justify-center max-w-full ">
          <div className="flex-col flex-nowrap mb-7 w-full max-w-full items-center flex-1 justify-start ">
            <div className="rounded-md flex-none h-48 mb-5 w-full max-w-full relative items-center flex flex-col flex-nowrap bg-campas bg-center bg-cover"/>
            <div className="items-start w-full flex-none flex-row flex-nowrap justify-between max-w-full">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex relative">
                <p className="flex-none h-auto mb-2 w-full max-w-full justify-start text-white text-lg font-bold text-left">
                  格安なのに最高品質のデザイン
                </p>
                <p className="flex-none h-auto mb-5 w-full max-w-full justify-start text-white text-sm text-left">
                  私たちは、ノーコードでサイトを制作しています。
                  <br/>そのため、無駄な工数を発生させず、安く提供しています。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex-nowrap mb-7 w-full max-w-full items-center flex-1 justify-start ">
            <div className="rounded-md flex-none h-48 mb-5 w-full max-w-full relative items-center flex flex-col flex-nowrap bg-maiking bg-center bg-cover "/>
            <div className="items-start w-full flex-none flex-row flex-nowrap justify-between max-w-full">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex relative">
                <p className="flex-none h-auto mb-2 w-full max-w-full justify-start text-white text-lg font-bold text-left">
                  お客様のご要望を「汲み取り」ます
                </p>
                <p className="flex-none h-auto mb-5 w-full max-w-full justify-start text-white text-sm text-left">
                  何よりもお客様のご要望を重要視しています。お任せしたい、デザインに拘りたい、記事を更新したい、などお客様ごとのニーズをヒアリングでお聞きし、ご要望を汲み取ります。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex-nowrap mb-7 w-full max-w-full items-center flex-1 justify-start ">
            <div className="rounded-md flex-none h-48 mb-5 w-full max-w-full relative items-center flex flex-col flex-nowrap bg-pc bg-center bg-cover"/>
            <div className="items-start w-full flex-none flex-row flex-nowrap justify-between max-w-full">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex relative">
                <p className="flex-none h-auto mb-2 w-full max-w-full justify-start text-white text-lg font-bold text-left">
                  サブスクリプションだから制作から保守管理まで全てお任せ
                </p>
                <p className="flex-none h-auto mb-5 w-full max-w-full justify-start text-white text-sm text-left">
                  お客様の負担を極力減らすため、当社では面倒な雑務や細々とした作業を引き受けています。
                  <br/>そのため、お客様は煩わしいことでお時間を奪われることはありません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* flow */}
      <section className="pt-14 px-6 pb-10 items-center bg-white flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full">
        <p className="flex-none h-auto mb-2 w-full max-w-full justify-center text-sm text-black font-black text-center ">
          制作の流れ
        </p>
        <div className="mb-7 max-w-full bg-black rounded-sm flex-none h-1 w-20 items-center flex flex-col flex-nowrap relative"/>
        <main className="flex-none max-w-full items-center flex flex-col flex-nowrap relative">
          
          <div className="items-start flex-col flex-nowrap px-10 py-6 border-spacing-1 rounded-xl flex-none justify-start mb-5 w-full max-w-full">
            <div className="mb-3 max-w-full items-center flex-none flex-row flex-nowrap h-auto justify-start p-0 w-60 ">
              <p className="flex-none w-12 max-w-full h-auto justify-start text-base font-black text-left text-transparent">
                01
              </p>
              <p className="h-auto w-auto max-w-full justify-start flex-none text-base text-black font-bold ">
                お問い合わせ
              </p>
            </div>
            <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex flex-row text-black text-xs text-left">
              このサイトのフォームからお問い合わせ下さい。
              <br/>
              気軽な質問でも勿論構いませんので、何か気になることが一つでもあ
              ればご連絡ください。
              <br/>
              休日・祝日を除き、基本的に3営業日内に返信させていただきます。
              <br/>
            </p>
          </div>

          <div className="items-start flex-col flex-nowrap px-10 py-6 border-spacing-1 rounded-xl flex-none justify-start mb-5 w-full max-w-full">
            <div className="mb-3 max-w-full items-center flex-none flex-row flex-nowrap h-auto justify-start p-0 w-60 ">
              <p className="flex-none w-12 max-w-full h-auto justify-start text-base font-black text-left text-transparent">
                02
              </p>
              <p className="h-auto w-auto max-w-full justify-start flex-none text-base text-black font-bold ">
                無料相談
              </p>
            </div>
            <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex flex-row text-black text-xs text-left">
              チャットやビデオ通話、電話などお客様に適した形で無料相談を承っています。
              <br/>
              制作に関することから、料金やオプション、契約内容など様々なご質問に お答えいたします。
              <br/>
            </p>
          </div>

          <div className="items-start flex-col flex-nowrap px-10 py-6 border-spacing-1 rounded-xl flex-none justify-start mb-5 w-full max-w-full">
            <div className="mb-3 max-w-full items-center flex-none flex-row flex-nowrap h-auto justify-start p-0 w-60 ">
              <p className="flex-none w-12 max-w-full h-auto justify-start text-base font-black text-left text-transparent">
                03
              </p>
              <p className="h-auto w-auto max-w-full justify-start flex-none text-base text-black font-bold ">
                ヒアリング
              </p>
            </div>
            <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex flex-row text-black text-xs text-left">
              サイトのイメージや納期、入れたいコンテンツなどをお聞きいたします。
              <br/>
              拘りたい方には勿論対応致しますし、任せたいという場合はこちらでニュアンスを汲み取らせて頂きます。
              <br/>
            </p>
          </div>

          <div className="items-start flex-col flex-nowrap px-10 py-6 border-spacing-1 rounded-xl flex-none justify-start mb-5 w-full max-w-full">
            <div className="mb-3 max-w-full items-center flex-none flex-row flex-nowrap h-auto justify-start p-0 w-60 ">
              <p className="flex-none w-12 max-w-full h-auto justify-start text-base font-black text-left text-transparent">
                04
              </p>
              <p className="h-auto w-auto max-w-full justify-start flex-none text-base text-black font-bold ">
                制作開始
              </p>
            </div>
            <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex flex-row text-black text-xs text-left">
              ヒアリングを元にサイトの構成イメージを送らせて頂きますので、もし問題無いようでしたらそれを元にホームページの制作を始めさせて頂きます。
            </p>
          </div>
        </main>
      </section>

      {/* consultation */}
      <section className="px-6 py10 items-center bg-blue-500 flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full">1.
        <div className="flex-none h-full opacity-40 absolute top-0 w-full -z-10 max-w-full flex flex-col flex-nowrap "/>
        <p className="mb-2 max-w-full flex-none h-auto w-auto justify-center text-sm text-white font-black text-center ">
          無料でご相談承っております。
          <br/>
        </p>
        <p className="mb-5 max-w-full flex-none h-auto w-auto justify-center text-base text-center">
          何も決まっていない状況でも構いません。お気軽にお問い合わせください。
          <br/>
        </p>
        <Link href="" className="items-center bg-white border rounded-md flex-none flex-row flex-nowrap h-auto justify-center px-6 py-3 w-auto max-w-full">
          <i className="bg-blue-500 mb-2 max-w-full items-center flex flex-row justify-center">mail</i>
          <p className="justify-start flex-none h-auto relative w-auto z-20 max-w-full text-left text-blue-500 text-base ">
            資料請求
          </p>
        </Link>
      </section>

      {/* Fee */}
      <section className="px-10 py-14 items-center bg-white flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full">
        <p className="flex-none h-auto mb-3 w-full max-w-full justify-center text-sm text-black font-black text-center">
          料金表
        </p>
        <p className="flex-none h-auto mb-2 w-full max-w-full justify-center text-xl text-black font-black text-center">
          月額定額（サブスクリプション）で安心!
        </p>
        <div className="mb-7 max-w-full bg-black rounded-sm flex-none h-1 w-13 items-center flex flex-col felx-nowrap relative"/>
        <div className="hidden">
          <div></div>
          <div>
            <div></div>
            <p>
              おすすめのプラン
            </p>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="mb-8 max-w-full content-start items-start flex-none flex-row flex-wrap">
          <div className="flex mb-3 w-full max-w-full items-center flex-none flex-row flex-nowrap justify-center ">
            <div className="bg-transparent flex-1 h-10 m-7 w-auto max-w-full items-center flex flex-col flex-nowrap relative"/>
            <div className="flex flex-none w-auto items-center bg-transparent flex-row flex-nowrap h-10 justify-center m-3 max-w-full">
              <div className=" bg-blue-500 rounded-sm flex-none h-1 transform rotate-45 w-8 max-w-full items-center flex flex-col flex-nowrap relative"/>
              <p className="flex-none h-auto mb-2 w-auto justify-start font-bold text-blue-500 text-base text-left">
                おすすめのプラン
              </p>
              <div/>
            </div>
            <div/>
          </div>
          <div className="flex-none w-full max-w-full items-center bg-black border-spacing-2 rounded-xl flex-col flex-nowrap h-auto justify-start ">
            <p className="bg-transparent rounded-none flex-none h-14 p-2 w-full justify-center text-white text-lg font-black text-center ">エンタープライズ</p>
            <div className="items-center bg-white rounded-md felx-none flex-col flex-nowrap h-auto justify-start pt-6 px-4 pb-3 w-full max-w-full relative">
              <p className="flex-1 h-auto mr-2 mb-1 w-auto max-w-full justify-start text-black text-sm font-medium text-left ">
                大規模なサイトなど
              </p>
              <div className="items-end flex-row flex-nowrap justify-center mb-2 max-w-full flex flex-none relative">
                <p className="h-auto w-auto max-w-full justify-center flex-none text-black text-base font-black text-center">
                  応相談
                </p>
              </div>
              <p className="flex-none h-auto mb-4 w-auto max-w-full justify-center text-gray text-sm text-center">
                お気軽にご連絡ください
                <br/>
              </p>
              <div className="items-center flex-none flex-col flex-nowrap justify-center w-full max-w-full flex relative">
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    最適なページ数
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    オリジナルデザイン
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    レスポンシブ対応
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お問い合わせフォーム
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    ドメイン取得代行
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    検索エンジン最適化（SEO）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    画像・テキスト修正５回 / 月
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    デザイン修正１回 / 月
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アニメーション
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お知らせ・ブログ機能（CMS）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アクセス解析
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    写真撮影
                  </p>
                </div>
              </div>
            </div>
          </div> 

          <div className="flex-none w-full max-w-full items-center bg-blue border-spacing-2 rounded-xl flex-col flex-nowrap h-auto justify-start ">
            <p className="bg-transparent rounded-none flex-none h-14 p-2 w-full justify-center text-white text-lg font-black text-center ">
              スタンダード
            </p>
            <div className="items-center bg-white rounded-md felx-none flex-col flex-nowrap h-auto justify-start pt-6 px-4 pb-3 w-full max-w-full relative">
              <p className="flex-1 h-auto mr-2 mb-1 w-auto max-w-full justify-start text-blue text-sm font-medium text-left ">
                オリジナルデザインが希望の方へ
              </p>
              <div className="items-end flex-row flex-nowrap justify-center mb-2 max-w-full flex flex-none relative">
                <p className="h-auto w-auto max-w-full justify-center flex-none mr-1 text-black text-base font-black text-center">
                  14,800円
                </p>
                <p className="flex-none w-auto max-w-full h-auto justify-center text-black text-xl font-medium text-center ">
                  &nbsp;/ 月
                </p>
              </div>
              <p className="flex-none h-auto mb-4 w-auto max-w-full justify-center text-gray text-sm text-center">
                16,280円（税込み）
                <br/>
              </p>
              <div className="items-center flex-none flex-col flex-nowrap justify-center w-full max-w-full flex relative">
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    １～４ページ
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    オリジナルデザイン
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    レスポンシブ対応
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お問い合わせフォーム
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    ドメイン取得代行
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    検索エンジン最適化（SEO）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    画像・テキスト修正３回 / 月
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    デザイン修正１回 / 半年
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アニメーション
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お知らせ・ブログ機能（CMS）
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アクセス解析
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    写真撮影
                  </p>
                </div>
              </div>
            </div>
          </div> 

          <div className="flex-none w-full max-w-full items-center text-cyan-600 border-spacing-2 rounded-xl flex-col flex-nowrap h-auto justify-start ">
            <p className="bg-transparent rounded-none flex-none h-14 p-2 w-full justify-center text-white text-lg font-black text-center ">
              ライト
            </p>
            <div className="items-center bg-white rounded-md felx-none flex-col flex-nowrap h-auto justify-start pt-6 px-4 pb-3 w-full max-w-full relative">
              <p className="flex-1 h-auto mr-2 mb-1 w-auto max-w-full justify-start text-blue text-sm font-medium text-left ">
                サクっとホームページが欲しい
              </p>
              <div className="items-end flex-row flex-nowrap justify-center mb-2 max-w-full flex flex-none relative">
                <p className="h-auto w-auto max-w-full justify-center flex-none mr-1 text-black text-base font-black text-center">
                  7,700円
                </p>
                <p className="flex-none w-auto max-w-full h-auto justify-center text-black text-xl font-medium text-center ">
                  &nbsp;/ 月
                </p>
              </div>
              <p className="flex-none h-auto mb-4 w-auto max-w-full justify-center text-gray text-sm text-center">
                8,470円（税込み）
                <br/>
              </p>
              <div className="items-center flex-none flex-col flex-nowrap justify-center w-full max-w-full flex relative">
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    １～４ページ
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    テンプレートデザイン
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    レスポンシブ対応
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お問い合わせフォーム
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    ドメイン取得代行
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    検索エンジン最適化（SEO）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    画像・テキスト修正１回 / 月
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アニメーション
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    デザイン修正
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お知らせ・ブログ機能（CMS）
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アクセス解析
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    写真撮影
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden flex-none w-full max-w-full items-center bg-blue border-spacing-2 rounded-xl flex-col flex-nowrap h-auto justify-start ">
            <p className="bg-transparent rounded-none flex-none h-14 p-2 w-full justify-center text-white text-lg font-black text-center ">
              スタンダード
            </p>
            <div className="items-center bg-white rounded-md felx-none flex-col flex-nowrap h-auto justify-start pt-6 px-4 pb-3 w-full max-w-full relative">
              <p className="flex-1 h-auto mr-2 mb-1 w-auto max-w-full justify-start text-blue text-sm font-medium text-left ">
                オリジナルデザインが希望の方へ
              </p>
              <div className="items-end flex-row flex-nowrap justify-center mb-2 max-w-full flex flex-none relative">
                <p className="h-auto w-auto max-w-full justify-center flex-none mr-1 text-black text-base font-black text-center">
                  14,800円
                </p>
                <p className="flex-none w-auto max-w-full h-auto justify-center text-black text-xl font-medium text-center ">
                  &nbsp;/ 月
                </p>
              </div>
              <p className="flex-none h-auto mb-4 w-auto max-w-full justify-center text-gray text-sm text-center">
                16,280円（税込み）
                <br/>
              </p>
              <div className="items-center flex-none flex-col flex-nowrap justify-center w-full max-w-full flex relative">
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    １～４ページ
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    オリジナルデザイン
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    レスポンシブ対応
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お問い合わせフォーム
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    ドメイン取得代行
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    検索エンジン最適化（SEO）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    画像・テキスト修正３回 / 月
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    デザイン修正１回 / 半年
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アニメーション
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お知らせ・ブログ機能（CMS）
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アクセス解析
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    写真撮影
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none w-full max-w-full items-center text-blue-800 border-spacing-2 rounded-xl flex-col flex-nowrap h-auto justify-start ">
            <p className="bg-transparent rounded-none flex-none h-14 p-2 w-full justify-center text-white text-lg font-black text-center ">
              プレミアム
            </p>
            <div className="items-center bg-white rounded-md felx-none flex-col flex-nowrap h-auto justify-start pt-6 px-4 pb-3 w-full max-w-full relative">
              <p className="flex-1 h-auto mr-2 mb-1 w-auto max-w-full justify-start text-blue text-sm font-medium text-left ">
                サイト内ブログも持ちたい
              </p>
              <div className="items-end flex-row flex-nowrap justify-center mb-2 max-w-full flex flex-none relative">
                <p className="h-auto w-auto max-w-full justify-center flex-none mr-1 text-black text-base font-black text-center">
                  22,400円
                </p>
                <p className="flex-none w-auto max-w-full h-auto justify-center text-black text-xl font-medium text-center ">
                  &nbsp;/ 月
                </p>
              </div>
              <p className="flex-none h-auto mb-4 w-auto max-w-full justify-center text-gray text-sm text-center">
                24,640円（税込み）
                <br/>
              </p>
              <div className="items-center flex-none flex-col flex-nowrap justify-center w-full max-w-full flex relative">
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    １～８ページ
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    オリジナルデザイン
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    レスポンシブ対応
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お問い合わせフォーム
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    ドメイン取得代行
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    検索エンジン最適化（SEO）
                  </p>
                </div>
                <div className="items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    画像・テキスト修正５回 / 月
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    デザイン修正１回 / 月
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アニメーション
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-cyan-600 text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    お知らせ・ブログ機能（CMS）
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    アクセス解析
                  </p>
                </div>
                <div className="opacity-20 items-center flex-none flex-row flex-nowrap h-aoto justify-start mb-2 w-full max-w-full flex relative">
                  <i className="center flex flex-row justify-center border-0 mr-2 mb-1 max-w-full text-black text-2xl ">check</i>
                  <p className="flex-1 h-auto w-auto max-w-full justify-start items-center flex-flex-row text-black text-sm text-left">
                    写真撮影
                  </p>
                </div>
              </div>
            </div>
          </div> 

        </div>
        <p className="flex-none h-auto w-auto justify-center text-gray text-sm text-center">
          ※契約の最低期間は1年です
        </p>
      </section>

      {/* experience */}
      <section className="pt-12 items-center bg-cyan-500 flex-none flex-col flex-nowrap h-auto justify-start w-full max-w-full">
        <div className="items-center flex-none flex-col flex-nowrap h-auto justify-center mb-10 px-4 max-w-full flex ">
          <p className="flex-none h-auto w-full max-w-full justify-center text-2xl text-white text-center">
            制作実績
          </p>
          <div className="bg-white rounded-sm flex-none h-1 w-10 max-w-full items-center flesx flex-col flex-nowrap "/>
        </div>
        <ul className="items-start px-8 flex-none flex-row flex-nowrap justify-start overflow-x-auto overflow-y-hidden w-auto max-w-full">
          <Link href="" className="flex-none w-60 max-w-full items-start bg-transparent rounded-none flex-col flex-nowrap h-auto justify-start mx-4 mb-6">
            <Image
            src="/scroll.webp"
            alt="scroll"
            width={40}
            height={87}
            className="border-0 rounded-sm flex-none h-auto mb-4 w-full max-w-full items-center flex flex-col flex-nowrap "
            />
            <div className="items-end flex-none flex-nowrap justify-between w-full max-w-full flex">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex">
                <div className="items-center bg-white rounded-sm flex-none flex-col flex-nowrap h-auto justify-center mb-3 px-3 py-1 w-auto max-w-full flex">
                  <p className="flex-none h-auto w-auto max-w-full justify-start items-center flex text-cyan-400 text-xs font-bold text-left">
                    サービスサイト
                  </p>
                </div>
                <p className="flex-none h-auto w-full max-w-full justify-start text-white text-base font-bold text-left">
                  サウナファクトリー様 サービスHP
                </p>
              </div>
            </div>
          </Link>
          <Link href="" className="flex-none w-60 max-w-full items-start bg-transparent rounded-none flex-col flex-nowrap h-auto justify-start mx-4 mb-6">
            <Image
            src="/scroll.webp"
            alt="scroll"
            width={40}
            height={87}
            className="border-0 rounded-sm flex-none h-auto mb-4 w-full max-w-full items-center flex flex-col flex-nowrap "
            />
            <div className="items-end flex-none flex-nowrap justify-between w-full max-w-full flex">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex">
                <div className="items-center bg-white rounded-sm flex-none flex-col flex-nowrap h-auto justify-center mb-3 px-3 py-1 w-auto max-w-full flex">
                  <p className="flex-none h-auto w-auto max-w-full justify-start items-center flex text-cyan-400 text-xs font-bold text-left">
                    コーポレートサイト
                  </p>
                </div>
                <p className="flex-none h-auto w-full max-w-full justify-start text-white text-base font-bold text-left">
                  日本維新の会 大平まさひろ様 公式ホームページ
                </p>
              </div>
            </div>
          </Link>
          <Link href="" className="flex-none w-60 max-w-full items-start bg-transparent rounded-none flex-col flex-nowrap h-auto justify-start mx-4 mb-6">
            <Image
            src="/scroll.webp"
            alt="scroll"
            width={40}
            height={87}
            className="border-0 rounded-sm flex-none h-auto mb-4 w-full max-w-full items-center flex flex-col flex-nowrap "
            />
            <div className="items-end flex-none flex-nowrap justify-between w-full max-w-full flex">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex">
                <div className="items-center bg-white rounded-sm flex-none flex-col flex-nowrap h-auto justify-center mb-3 px-3 py-1 w-auto max-w-full flex">
                  <p className="flex-none h-auto w-auto max-w-full justify-start items-center flex text-cyan-400 text-xs font-bold text-left">
                    コーポレートサイト
                  </p>
                </div>
                <p className="flex-none h-auto w-full max-w-full justify-start text-white text-base font-bold text-left">
                  株式会社うぷ様 コーポレートHP
                </p>
              </div>
            </div>
          </Link>
          <Link href="" className="flex-none w-60 max-w-full items-start bg-transparent rounded-none flex-col flex-nowrap h-auto justify-start mx-4 mb-6">
            <Image
            src="/scroll.webp"
            alt="scroll"
            width={40}
            height={87}
            className="border-0 rounded-sm flex-none h-auto mb-4 w-full max-w-full items-center flex flex-col flex-nowrap "
            />
            <div className="items-end flex-none flex-nowrap justify-between w-full max-w-full flex">
              <div className="items-start flex-1 flex-col flex-nowrap justify-center w-auto max-w-full flex">
                <div className="items-center bg-white rounded-sm flex-none flex-col flex-nowrap h-auto justify-center mb-3 px-3 py-1 w-auto max-w-full flex">
                  <p className="flex-none h-auto w-auto max-w-full justify-start items-center flex text-cyan-400 text-xs font-bold text-left">
                    コーポレートサイト
                  </p>
                </div>
                <p className="flex-none h-auto w-full max-w-full justify-start text-white text-base font-bold text-left">
                  有限会社北谷造園土木様 コーポレートHP
                </p>
              </div>
            </div>
          </Link>
        </ul>
        <Link href="" className="items-center bg-white border-0 rounded-3xl flex-none flex-row flex-nowrap h-auto justify-center mt-3 mb-8 p-4 pl-7 w-auto max-w-full">
          <p className="justify-start flex-none h-auto mr-1 relative w-auto z-20 max-w-full text-left text-cyan-400 text-sm font-bold ">
            制作実績の一覧
          </p>
          <i className="items-center flex flex-row justify-center text-cyan-400 text-base flex-none flex-nowrap max-w-full ">
            keyboard_arrow_right
          </i>
        </Link>
      </section>

      {/* Q & A */}
      <section className="pt-12 px-10 pb-14 items-center flex-none bg-white flex-col flex-nowrap h-auto justify-start w-full max-w-full">
        <p className="flex-none h-auto mb-2 w-full max-w-full justify-center text-2xl font-black text-center">
          よくある質問
        </p>

        <ul className="flex-none w-full max-w-full items-center flex flex-col flex-nowrap">

          <li className="w-full max-w-full items-start bg-white border-2 rounded-lg flex-none flex-col flex-nowrap justify-center ">
            <div className="flex-none px-6 py-5 items-center flex-row flex-nowrap justify-center w-full max-w-full">
              <div className="flex-none h-9 mr-3 w-9 max-w-full items-center bg-blue-600 rounded-3xl flex-col flex-nowrap justify-center">
                <p className="bg-transparent rounded-0 flex-none h-auto mb-1 w-auto max-w-full justify-start text-white text-xl font-black text-left">
                  ?
                </p>
              </div>
              <p className="bg-white border-0 flex-1 h-auto mb-1 w-auto max-w-full justify-start text-transparent text-left text-sm font-normal">
                デザインイメージはどのように伝えれば良いでしょうか?
              </p>
            </div>
            <p className="px-6 pb-5 flex-1 h-auto w-auto max-w-full justify-start text-blue-600 text-left text-base font-bold">
              基本的には、ヒアリング時に弊社担当者からのご質問にご回答頂ければ問題ございません。事前に参考ホームページを何点かピックアップしていただけるとスムーズにお打合せが進行出来るかと思います。
              <br/>
              <br/>
              またヒアリングに関しては、基本的にWeb会議（Google Meets）でお願いしております。
            </p>
          </li>
          <li className="w-full max-w-full items-start bg-white border-2 rounded-lg flex-none flex-col flex-nowrap justify-center ">
            <div className="flex-none px-6 py-5 items-center flex-row flex-nowrap justify-center w-full max-w-full">
              <div className="flex-none h-9 mr-3 w-9 max-w-full items-center bg-blue-600 rounded-3xl flex-col flex-nowrap justify-center">
                <p className="bg-transparent rounded-0 flex-none h-auto mb-1 w-auto max-w-full justify-start text-white text-xl font-black text-left">
                  ?
                </p>
              </div>
              <p className="bg-white border-0 flex-1 h-auto mb-1 w-auto max-w-full justify-start text-transparent text-left text-sm font-normal">
              ブログ記事の数はページ数に含まれますか？
              </p>
            </div>
            <p className="px-6 pb-5 flex-1 h-auto w-auto max-w-full justify-start text-blue-600 text-left text-base font-bold">
              ブログ記事はプラン規定のページ数には含まれておりません。ブログ記事の制限数につきましてはプラン毎に異なりますのでTOPページの料金表をご確認ください。
              <br/>
              またヒアリングに関しましては、基本的にWeb会議（Google Meets）でお願いしております。
            </p>
          </li>

          <li className="w-full max-w-full items-start bg-white border-2 rounded-lg flex-none flex-col flex-nowrap justify-center ">
            <div className="flex-none px-6 py-5 items-center flex-row flex-nowrap justify-center w-full max-w-full">
              <div className="flex-none h-9 mr-3 w-9 max-w-full items-center bg-blue-600 rounded-3xl flex-col flex-nowrap justify-center">
                <p className="bg-transparent rounded-0 flex-none h-auto mb-1 w-auto max-w-full justify-start text-white text-xl font-black text-left">
                  ?
                </p>
              </div>
              <p className="bg-white border-0 flex-1 h-auto mb-1 w-auto max-w-full justify-start text-transparent text-left text-sm font-normal"> 
                  ホームページのデザインは、何パターンか案を出してもらえますか？
              </p>
            </div>
            <p className="px-6 pb-5 flex-1 h-auto w-auto max-w-full justify-start text-blue-600 text-left text-base font-bold">
              申し訳ございません。Kumitoruは格安でホームページをご提供させていただいておりますので、ご提案数は1案になります。
              <br/>
              <br/>
              その為、色合いや雰囲気など、ご要望をしっかりとヒアリングさせていただきます。弊社のデザイナーがヒアリングさせていただいた内容を反映して完全オリジナルなデザインを制作させていただきます
              <br/>
              <br/>
              初稿提出後の気になる部分の微調整、カラーの変更などといった修正は無料です。
              <br/>
              <br/>
              また、別途で30,000円（税別）お支払いいただくことでもう1パターンご提案させていただくことが可能です。
            </p>
          </li>

          <li className="w-full max-w-full items-start bg-white border-2 rounded-lg flex-none flex-col flex-nowrap justify-center ">
            <div className="flex-none px-6 py-5 items-center flex-row flex-nowrap justify-center w-full max-w-full">
              <div className="flex-none h-9 mr-3 w-9 max-w-full items-center bg-blue-600 rounded-3xl flex-col flex-nowrap justify-center">
                <p className="bg-transparent rounded-0 flex-none h-auto mb-1 w-auto max-w-full justify-start text-white text-xl font-black text-left">
                  ?
                </p>
              </div>
              <p className="bg-white border-0 flex-1 h-auto mb-1 w-auto max-w-full justify-start text-transparent text-left text-sm font-normal"> 
                ホームページ公開後も修正してもらうことはできますか？
              </p>
            </div>
            <p className="px-6 pb-5 flex-1 h-auto w-auto max-w-full justify-start text-blue-600 text-left text-base font-bold">
              ホームページ制作が完了しましたら、1度お客様にご確認いただいてから公開させていただきます。その際に、修正してほしい箇所があればお気軽にお申し付けください。
              <br/>
              <br/>
              また、公開後もホームページ内のテキストや画像の差し替えなど、簡易的な作業であればプラン毎に指定された回数内でご対応させていただきます。ただし、公開後に大規模な修正をご希望される場合は、別途料金を頂戴致します。ご了承くださいませ。
            </p>
          </li>
        </ul>
        <Link href="" className="items-center bg-blue-600 border-0 rounded-3xl felx-none flex-row flex-nowrap h-auto justify-center my-6 p-4 pb-7 w-auto max-w-full">
          <p className="justiyf-start flex-none h-auto mr-1 relative w-auto z-20 max-w-full text-left text-white text-sm font-bold ">
            よくある質問
          </p>
          <i className="items-center flex flex-row justify-center text-white text-base">
            Keyboard_arrow_right
          </i>
        </Link>
      </section>

      {/* Form */}
      <section>
        <p>
          資料請求
        </p>
        <div></div>
        <div></div>
        
      </section>
    </main>
  )
}
