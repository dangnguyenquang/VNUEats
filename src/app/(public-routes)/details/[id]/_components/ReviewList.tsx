import { Comment } from "@/types/api/detail-page"

interface Props {
  reviews: Comment[]
}

const ReviewList = ({ reviews }: Props) => {
  console.log(reviews)
  return (
    <div className='p-4 max-w-2xl mx-auto'>
      {reviews.length != 0 ? (
        <div>
          <h2 className='text-2xl font-bold mb-4 text-center'>Đánh giá của khách hàng</h2>
          <div className='space-y-4'>
            {reviews.map((review) => (
              <div
                className='bg-white shadow rounded-lg p-4 flex flex-col gap-5'
                key={review._id}
              >
                <div key={review._id} className='flex items-start gap-4'>
                  <img
                    src={review.userAvatar.url}
                    alt={`${review.userName}'s avatar`}
                    className='w-12 h-12 rounded-full'
                  />
                  <div className='w-full'>
                    {/* User Name */}
                    <div className='flex justify-between items-center w-full sm:w-[500px]'>
                      <h3 className='text-lg font-semibold'>{review.userName}</h3>
                      <div className='flex justify-between items-center mb-2'>
                        <p className='text-gray-700 font-semibold max-sm:hidden'>
                          Đánh giá:
                        </p>
                        <span className='text-yellow-500 font-bold'>
                          {review.star.toFixed(1)} ⭐
                        </span>
                      </div>
                    </div>
                    {/* Comment Content */}
                    <p className='text-gray-700 mt-1'>{review.content}</p>
                    {/* Rating Stars */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ReviewList
