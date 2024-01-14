import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from '../actions/categoryActions';
import {RootState} from "../redux/store";

const Select: React.FC = () => {
    const categories = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = parseInt(event.target.value, 10);
        const selectedCategory = categories.find((category: any) => category.id === selectedCategoryId);

        if (selectedCategory) {
            dispatch(addCategory(selectedCategory));
        }
    };

    return (
        <div>
            <label>Select Category:</label>
            <select onChange={handleSelectChange}>
                {categories.map((category: any) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;