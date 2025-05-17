"use client";

import React, { Suspense } from "react";

import CallbackClient from "./_components/CallbackClient";

const Callback = () => {
  return (
    <Suspense fallback={<div>正在導向中...</div>}>
      <CallbackClient />
    </Suspense>
  );
};

export default Callback;
