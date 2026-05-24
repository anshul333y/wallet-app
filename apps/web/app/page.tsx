"use client";

import { useBalance } from "@repo/store";

export default function Home() {
  const balance = useBalance();
  return (
    <>
      <div>your balance is : {balance}</div>
    </>
  );
}
