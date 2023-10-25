"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = async () => {
  const router = useRouter();
  const Logout = async () => {
    const response = await fetch("/api/verify");
    const json = await response.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Page;
