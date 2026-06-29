import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-300 to-blue-100 py-6 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 tracking-winder">Day</h1>
      <p className="text-sm text-gray-600 mt-1">機械学習で日常をよりよく</p>

      <nav className="mt-6">
        <ul className="flex justify-center space-x-8 text-gray-700 font-medium">
          <li className="border-b-2 border-blue-500 pb-1">
            <Link href="/">TOP</Link>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <Link href="/record">学習記録</Link>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <Link href="/record">日記</Link>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <Link href="/record">思い出マップ</Link>
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <Link href="/record">通知</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
