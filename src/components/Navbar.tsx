import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <>
            <Link href="/sign-in">
              <li>Login</li>
            </Link>
            <Link href="/sign-up">
              <li>Sign Up</li>
            </Link>
          </>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;