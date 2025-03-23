import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

type CategoryFilterProps = {
    selectedCategories: string[];
    handleSelectCategories: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Categories: string[] = [
    'Đồ uống',
    'Thức ăn nhanh',
    'Món Á',
    'Cơm',
    'Trà sữa',
    'Món chay',
    'Bún phở',
    'Ăn vặt',
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, handleSelectCategories }) => {
    return (
        <div>
            <div className="text-[20px] text-primaryText font-bold">Danh mục món ăn</div>
            <FormGroup>
                {Categories.map((category) => (
                    <FormControlLabel
                        key={category}
                        control={
                            <Checkbox
                                sx={{ '&.Mui-checked': { color: '#7D0600' } }}
                                checked={selectedCategories.includes(category)}
                                onChange={handleSelectCategories}
                                value={category}
                            />
                        }
                        label={category}
                        className="text-primaryText"
                    />
                ))}
            </FormGroup>
        </div>
    );
};

export default CategoryFilter;
