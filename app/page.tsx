import TodayDate from "./components/TodayDate";
import WarekiConverter from "./components/WarekiConverter";
import AgeTable from "./components/AgeTable";
import SeoContent from "./components/SeoContent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🗓️</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                和暦西暦変換ツール
              </h1>
              <p className="text-xs text-gray-500">
                令和・平成・昭和・大正・明治対応 | 年齢早見表・干支付き
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* 今日の日付 */}
        <TodayDate />

        {/* 変換ツール */}
        <WarekiConverter />

        {/* 年齢早見表 */}
        <AgeTable />

        {/* AdSense プレースホルダー */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
          広告スペース
        </div>

        {/* SEOコンテンツ */}
        <SeoContent />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} wareki - 和暦西暦変換ツール</p>
          <p className="mt-1">
            令和・平成・昭和・大正・明治の和暦西暦変換と年齢早見表
          </p>
        </div>
      </footer>
    </div>
  );
}
