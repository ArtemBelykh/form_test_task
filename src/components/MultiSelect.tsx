import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {RootState} from "../redux/store";

const MultiSelect: React.FC = () => {
    const selectedCategory = useSelector((state: RootState) => state.selectedCategory);
    const items = useSelector((state: RootState) => state.items);
    const dispatch = useDispatch();
    const filteredItems = items.filter((item: any) => item.parent_id === selectedCategory.id);

    const handleItemSelect = (itemId: number) => {
        const selectedItem = items.find((item: any) => item.id === itemId);

        if (selectedItem) {
            dispatch(addItem(selectedItem));
        }
    };

    return (
        <div>
            <label>MultiSelect:</label>
            <select multiple>
                {filteredItems.map((item: any) => (
                    <option key={item.id} value={item.id} onClick={() => handleItemSelect(item.id)}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MultiSelect;