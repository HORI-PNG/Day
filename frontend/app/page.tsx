import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">HOME DASHBOARD</h2>
          <p className="text-gray-500 mt-2">ホームダッシュボード</p>
        </div>

        {/* カードのグリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 追加: 日次データ入力カード */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              日次データ入力（学習と集中度）
            </h3>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm">
                ※ここに学習時間スライダーを実装
              </p>
              <p className="text-gray-500 text-sm">
                ※ここに集中度（星評価）を実装
              </p>
              <p className="text-gray-500 text-sm">
                ※ここにタスク管理チェックボックスを実装
              </p>
            </div>
          </section>

          {/* 生活習慣入力カード */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              生活習慣入力
            </h3>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm">
                ※ここに睡眠時間入力フォームを実装
              </p>
              <p className="text-gray-500 text-sm">
                ※ここにカフェイン摂取セレクトボックスを実装
              </p>
              <p className="text-gray-500 text-sm">
                ※ここに今日の気分（絵文字）を実装
              </p>
            </div>
          </section>

          {/* AI分析インサイト概要カード */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              AI分析インサイト概要
            </h3>
            <div className="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-400 text-sm">
                AI分析データがここに表示される
              </p>
            </div>
          </section>

          {/* 日記ショートカットカード */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">
                日記ショートカット
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                ここに文字を書き込む？
              </p>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              今日の日記を入力してAI分析を実行
            </button>
          </section>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-gray-400">
        ※個人データは暗号化される
      </footer>
    </div>
  );
}
