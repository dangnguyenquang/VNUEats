"use client"

import dynamic from "next/dynamic"

const FroalaEditorNoSSR = dynamic(() => import("./FroalaEditor"), {
  ssr: false,
  loading: () => <p>Đang tải editor...</p>,
})

export default FroalaEditorNoSSR
