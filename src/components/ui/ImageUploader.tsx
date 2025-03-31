import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import { Button } from '@mui/material'
import { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'

type ImageUploaderProps = {
  maxImages: number
  handleAvatarChange: (file: File | null) => void
  handleImagesChange: (files: File[]) => void
}

export function ImageUploader({
  maxImages,
  handleAvatarChange,
  handleImagesChange,
}: ImageUploaderProps) {
  const [images, setImages] = useState<ImageListType>([])

  const onChange = (imageList: ImageListType) => {
    setImages(imageList)

    if (maxImages === 1) {
      handleAvatarChange(imageList[0]?.file || null)
    } else {
      handleImagesChange(imageList.map((image) => image.file as File))
    }
  }

  return (
    <ImageUploading
      multiple={maxImages > 1}
      value={images}
      onChange={onChange}
      maxNumber={maxImages}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }: {
        imageList: ImageListType
        onImageUpload: () => void
        onImageUpdate: (index: number) => void
        onImageRemove: (index: number) => void
        isDragging: boolean
        dragProps: any
      }) => (
        <div className="text-center">
          <Button
            variant="outlined"
            startIcon={<PhotoCameraIcon />}
            onClick={onImageUpload}
            {...dragProps}
            className={`rounded-full ${
              isDragging ? 'border-dashed border-4 border-indigo-600' : ''
            }`}
            sx={{
              color: '#000',
              borderColor: '#ccc',
              padding: '8px 16px',
              borderRadius: '24px',
              fontWeight: 'bold',
              fontSize: '14px',
              textTransform: 'none',
            }}
          >
            Thêm ảnh
          </Button>

          {imageList.map((image, index) => (
            <div key={index} className="my-5">
              <img src={image['data_url']} alt="Uploaded" width="100%" />
              <div className="flex justify-center mt-2 gap-4">
                <Button
                  variant="outlined"
                  onClick={() => onImageUpdate(index)}
                  sx={{ color: '#000', borderColor: '#ccc' }}
                >
                  Cập nhật
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onImageRemove(index)}
                  sx={{ color: '#000', borderColor: '#ccc' }}
                >
                  Xóa
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploader
