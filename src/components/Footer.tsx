import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">This Moment</h3>
            <p className="text-gray-400">连接人、空间和故事</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} This Moment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
