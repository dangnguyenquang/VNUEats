'use client'
import { Pagination } from '@mui/material'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import SearchBar from '../../../components/ui/SearchBar'
// import authApi from '~/apis/auth'
import authApi from '@/services/axios/actions/auth.action'
import { SelectChangeEvent } from '@mui/material'
import { Suspense } from 'react'
import CategroryFilter from './_components/CategroryFilter'
import DistrictFilter from './_components/DistrictFilter'
import RestaurantList from './_components/RestaurantList'

const MenuPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MenuContent />
    </Suspense>
  )
}

const MenuContent = () => {
  const debounceRef = useRef(null)
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [isFilterRating, setIsFilterRating] = useState(false)
  // lấy dữ liệu kết quả Restaurant trả về
  const [Restaurants, setRestaurants] = useState()
  // Lấy số trang,...
  const [numberPages, setNumberPages] = useState({
    currentPage: 1,
    limit: 1,
    skip: 0,
    numberPages: 0,
  })
  // Filter
  const [filterList, setFilterList] = useState<{
    boroughRestaurant: string[]
    nameRestaurant: string
    nameFood: string
    categories: string[]
    starMedium: string
    typeSort: string
  }>({
    boroughRestaurant: [],
    nameRestaurant: '',
    nameFood: '',
    categories: [],
    starMedium: '0',
    typeSort: 'Best seller',
  })

  const handleSearch = async () => {
    try {
      const res = await authApi.Search(filterList, page)
      setRestaurants(res.data.restaurants)
      if (res.data.objectPagination === null || res.data.objectPagination === undefined) {
        setNumberPages({
          currentPage: 0,
          limit: 20,
          skip: 0,
          numberPages: 0,
        })
      } else {
        setNumberPages(res.data.objectPagination)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // render lại web khi thay đổi giá trị của filter hoặc page
  useEffect(() => {
    setPage(1)
    handleSubmitSearch()
    handleSearch()
  }, [filterList, page])

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    scrollToTop()
    setPage(page)
  }

  // Search Bar value
  const [searchValue, setSearchValue] = useState<string>('')
  // Kiểu search
  const [currencyValue, setcurrencyValue] = useState('restaurant')

  const handleChangeCurrencies = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    const newCurrencyValue = event.target.value as string
    setcurrencyValue(newCurrencyValue)
    setFilterList((prevFilterList) => {
      const newFilterList = { ...prevFilterList }
      if (newCurrencyValue === 'restaurant') {
        newFilterList.nameRestaurant = searchValue
        newFilterList.nameFood = ''
      } else {
        newFilterList.nameFood = searchValue
        newFilterList.nameRestaurant = ''
      }
      return newFilterList
    })
  }

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = event.target.value
    setSearchValue(newSearchValue)
  }

  // xử lý submitSearch và cập nhật Param
  const handleSubmitSearch = () => {
    setPage(1)
    if (debounceRef.current !== null) {
      clearTimeout(debounceRef.current)
    }
    const queryParams = new URLSearchParams()
    if (searchValue) {
      queryParams.append('search', searchValue)
      queryParams.append('type', currencyValue)
    }
    const selectedCategoriesString = selectedCategories.join(',')
    if (selectedCategoriesString) {
      queryParams.append('categories', selectedCategoriesString)
    }
    const newUrl = `/menu?${queryParams.toString()}`
    const currentUrl = `${window.location.pathname}${window.location.search}`

    if (newUrl !== currentUrl) {
      router.push(newUrl)
    }
  }

  // lấy giá trị của search từ param
  const searchParams = useSearchParams()
  useEffect(() => {
    if (!searchParams) return
    const search = searchParams.get('search') || ''
    const typeSearch = searchParams.get('type') || 'restaurant'
    const categoriesParam = searchParams.get('categories') || ''
    const decodedCategories = decodeURIComponent(categoriesParam) //giải mã
    const categoriesArray = decodedCategories ? decodedCategories.split(',') : [] //tạo thành bảng để lưu cho đúng định dạng
    setSearchValue(search)
    setcurrencyValue(typeSearch)
    setSelectedCategories(categoriesArray)
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      categories: categoriesArray,
      [typeSearch === 'restaurant' ? 'nameRestaurant' : 'nameFood']: search,
    }))
  }, [searchParams])

  // District
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([])
  const handleSelectDistricts = (event: SelectChangeEvent<string>) => {
    const district = event.target.value
    setSelectedDistricts((prevSelected) =>
      prevSelected.includes(district)
        ? prevSelected.filter((d) => d !== district)
        : [...prevSelected, district],
    )

    setFilterList((prevFilterList) => {
      const updatedDistricts = selectedDistricts.includes(district)
        ? selectedDistricts.filter((d) => d !== district)
        : [...selectedDistricts, district]

      return {
        ...prevFilterList,
        boroughRestaurant: updatedDistricts.length > 0 ? updatedDistricts : [],
      }
    })
  }

  // categrory
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const handleSelectCategories = (event: SelectChangeEvent<string>) => {
    const category = event.target.value
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((d) => d !== category)
        : [...prevSelected, category],
    )
    setFilterList((prevFilterList) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((d) => d !== category)
        : [...selectedCategories, category]
      return {
        ...prevFilterList,
        categories: updatedCategories.length > 0 ? updatedCategories : [],
      }
    })
  }

  // hook xử lý select filter quán bán chạy nhất/ quán mới nhất
  const [selectedRestaurantFilter, setSelectedRestaurantFilter] = useState('Best seller')
  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    setSelectedRestaurantFilter(event.target.value)
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      typeSort: event.target.value,
    }))
  }

  // hook xử lý filter lọc theo số sao
  const [countStar, setCountStar] = useState(3)
  const handleRating = (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      setCountStar(newValue)
      setFilterList((prevFilterList) => ({
        ...prevFilterList,
        starMedium: newValue.toString(),
      }))
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilterRating(event.target.checked)
  }

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full justify-items-center px-5 lg:px-10 xl:px-16 py-8">
      {/* Thanh Search */}
      <div className="w-full">
        {/* ================================================= */}
        <div className=" w-full flex flex-wrap items-center min-w-[355px] justify-end mb-10">
          {/* Search Bar */}
          <div className="w-full md:w-[50%] mb-4 md:mb-0 mr-[100px]">
            <SearchBar
              searchValue={searchValue}
              handleChangeSearch={handleChangeSearch}
              currencyValue={currencyValue}
              handleChangeCurrencies={handleChangeCurrencies}
              handleSubmit={handleSubmitSearch}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="w-full md:w-auto flex justify-end">
            <FormControl
              sx={{ m: 1 }}
              className="w-[80px] sm:w-[100px] lg:w-[170px] xl:w-[200px]"
            >
              <Select
                value={selectedRestaurantFilter}
                onChange={handleChangeSelect}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="Best seller">Quán bán chạy nhất</MenuItem>
                <MenuItem value="Newest restaurant">Quán mới nhất</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/* ================================================= */}
        <div className="flex gap-[30px] min-w-[355px]">
          <div className="2xl:min-w-[300px] min-w-[210px] lg:min-w-[230px]">
            <div className="bg-primary rounded-t-[20px] h-[95px] justify-center items-center flex gap-1">
              <img src="../src/assets/icons/menu/filter_icon.svg" alt="" />
              <div className="text-accent font-bold text-[18px] 2xl:text-[25px] uppercase text-center">
                Bộ lọc tìm kiếm
              </div>
            </div>
            <div className="bg-[#f0f1f2] p-5 pr-4 rounded-b-[20px]">
              <div className="">
                <Box>
                  <div className="flex justify-between items-center">
                    <Typography component="legend">
                      <div
                        className={`text-[18px] font-bold ${!isFilterRating ? 'text-gray-400' : 'text-primaryText'}`}
                      >
                        Quán có số sao từ
                      </div>
                    </Typography>

                    <Checkbox
                      checked={isFilterRating}
                      onChange={handleCheckboxChange}
                      sx={{
                        '&.Mui-checked': {
                          color: '#7D0600',
                        },
                      }}
                    />
                  </div>
                  <div className="flex items-end">
                    <Rating
                      name="simple-controlled"
                      value={countStar}
                      onChange={handleRating}
                      disabled={!isFilterRating}
                    />
                    <div
                      className={`ml-2 ${!isFilterRating ? 'text-gray-400' : 'text-primaryText'}`}
                    >
                      trở lên
                    </div>
                  </div>
                </Box>
              </div>

              <div className="bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]"></div>

              <DistrictFilter
                selectedDistricts={selectedDistricts}
                handleSelectDistricts={handleSelectDistricts}
              />

              <div className="bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]"></div>

              <CategroryFilter
                selectedCategories={selectedCategories}
                handleSelectCategories={handleSelectCategories}
              />
            </div>
          </div>

          {/* Kết quả tìm kiếm */}
          <div className="justify-center">
            {Restaurants ? (
              <RestaurantList Restaurants={Restaurants} />
            ) : (
              <div className="flex justify-center">
                <Typography variant="h6" color="textprimaryText">
                  Không tìm thấy nhà hàng nào phù hợp với tiêu chí của bạn.
                </Typography>
              </div>
            )}
            <div className="flex justify-center mt-10">
              {numberPages.numberPages > 1 ? (
                <Pagination
                  count={numberPages.numberPages}
                  page={page}
                  onChange={handlePageChange}
                  sx={{
                    '& .MuiPaginationItem-root': {
                      color: '#7D0600',
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                      backgroundColor: '#7D0600',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#a40b0b',
                      },
                    },
                    '& .MuiPaginationItem-ellipsis': {
                      color: '#7D0600',
                    },
                    '& .MuiPaginationItem-icon': {
                      color: '#7D0600',
                    },
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
