"use client"

import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FroalaEditor from "../../_components/FroalaEditorNoSSR"

const CreateBlog = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [uploadImages, setUploadImages] = useState<{ url: string; public_id: string }[]>(
    [],
  )
  const [description, setDescripttion] = useState("")
  const [uploading, setUploading] = useState(false)

  const config = {
    placeholderText: "Nhập nội dung...",
    heightMin: 250,
    heightMax: 400,
    toolbarButtons: [
      "bold",
      "italic",
      "underline",
      "strikeThrough",
      "|",
      "fontFamily",
      "fontSize",
      "color",
      "inlineStyle",
      "paragraphStyle",
      "|",
      "paragraphFormat",
      "align",
      "formatOL",
      "formatUL",
      "outdent",
      "indent",
      "|",
      "insertLink",
      "insertImage",
      "insertVideo",
      "insertTable",
      "|",
      "quote",
      "code",
      "specialCharacters",
      "emoticons",
      "|",
      "html",
      "fullscreen",
    ],
    paragraphFormat: {
      H1: "Heading 1",
      H2: "Heading 2",
      H3: "Heading 3",
      H4: "Heading 4",
      BLOCKQUOTE: "Blockquote",
      PRE: "Preformatted",
      DIV: "Div",
      SPAN: "Span",
    },
    enter: "P",
    htmlAllowedTags: [
      "p",
      "span",
      "div",
      "b",
      "i",
      "u",
      "a",
      "img",
      "br",
      "strong",
      "em",
    ],
    htmlAllowedAttrs: ["href", "src", "alt", "style", "class"],
    htmlDoNotWrapTags: ["span"],
    imageUploadURL: "https://duymao.id.vn/admin/api/upload",
    imageUploadParam: "image",
    imageUploadMethod: "POST",
    imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
    imageMaxSize: 10 * 1024 * 1024,
    charCounterCount: true,
    events: {
      "image.uploaded": function (response: string) {
        const data = JSON.parse(response)
        if (data.link && data.public_id) {
          setUploadImages((prev) => [
            ...prev,
            { url: data.link, public_id: data.public_id },
          ])
        }
      },
    },
  }

  const handleModelChange = (model: string) => {
    setContent(model)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUploading(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("author", author)
    formData.append("content", content)
    formData.append("description", description)
    formData.append("link", JSON.stringify(uploadImages))

    try {
      const response = await axios.post(
        "https://duymao.id.vn/admin/api/blogs",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        },
      )

      toast.success("Bài viết đã được đăng thành công!")

      setTitle("")
      setAuthor("")
      setContent("")
      setUploadImages([])
      setDescripttion("")
    } catch (error) {
      console.error("Lỗi khi đăng bài:", error)
      toast.error("Có lỗi xảy ra!")
    } finally {
      setUploading(false)
    }
  }

  const cleanContent = content.replace(/<\/?undefined>/g, "")

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10'>
      <ToastContainer />
      <h2 className='text-center text-2xl font-semibold mb-4'>Đăng Bài Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-1'>Tiêu đề:</label>
          <input
            type='text'
            className='w-full border rounded-lg p-2'
            placeholder='Nhập tiêu đề...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-1'>Tác giả:</label>
          <input
            type='text'
            className='w-full border rounded-lg p-2'
            placeholder='Nhập tên tác giả...'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>Mô tả:</label>
          <textarea
            className='w-full border rounded-lg p-2'
            placeholder='Nhập tên tác giả...'
            value={description}
            onChange={(e) => setDescripttion(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-1'>Nội dung:</label>
          <FroalaEditor
            tag='textarea'
            model={cleanContent}
            onModelChange={(newContent: string) => setContent(newContent)}
            config={config}
          />
        </div>

        <button
          type='submit'
          className='w-full bg-green-500 text-white py-2 rounded-lg text-lg hover:bg-green-600 transition'
          disabled={uploading}
        >
          {uploading ? "Đang tải ảnh..." : "Đăng bài"}
        </button>
      </form>
    </div>
  )
}

export default CreateBlog
