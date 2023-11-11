import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">8tako8tako8 Calender</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link
            href="/schedules/new"
            className="bg-blue-500 px-3 py-3 rounded-md text-white"
          >
            予定を追加する
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
