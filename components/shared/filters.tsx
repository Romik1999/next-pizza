import React from 'react';
import {Title, FilterCheckbox, CheckboxFiltersGroup} from "@/components/shared";
import { Input, RangeSlider } from '@/components/ui';


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {

    return (
        <div className={className}>
            <Title
                text="Фильтрация"
                size="sm"
                className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
            />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value={1}/>
                <FilterCheckbox text="Новинки" value={2}/>
            </div>
            <div className="mt-10 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={30000}
                        value={0}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={30000}
                        placeholder="30000"
                        value={0}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[0, 1000]}
                />
            </div>
            <CheckboxFiltersGroup
                name="ingredients"
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    {text: "Сырный соус", value: 1},
                    {text: "Моцарелла", value: 2},
                    {text: "Чеснок", value: 3},
                    {text: "Соленые огурчики", value: 4},
                    {text: "Красный лук", value: 5},
                    {text: "Томаты", value: 6},
                ]}
                items={[
                    {text: "Сырный соус", value: 1},
                    {text: "Моцарелла", value: 2},
                    {text: "Чеснок", value: 3},
                    {text: "Соленые огурчики", value: 4},
                    {text: "Красный лук", value: 5},
                    {text: "Томаты", value: 6},
                    {text: "Сырный соус", value: 1},
                    {text: "Моцарелла", value: 2},
                    {text: "Чеснок", value: 3},
                    {text: "Соленые огурчики", value: 4},
                    {text: "Красный лук", value: 5},
                    {text: "Томаты", value: 6},
                ]}
            />

        </div>
    );
};
