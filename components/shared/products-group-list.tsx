"use client"

import React from 'react';
import { useIntersection } from 'react-use';
import {Title} from "@/components/shared/title";
import {cn} from "@/finished/lib/utils";
import {ProductCard} from "@/finished/components/shared/product-card";

interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
   title,
   items,
   listClassName,
   categoryId,
   className
}) => {
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    });

    React.useEffect(()=>{
        if (intersection?.isIntersecting){
            console.log(title, categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} ref={intersectionRef} id={title}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items
                    .filter((product) => product.items.length > 0)
                    .map((product, i) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                        />
                    ))}
            </div>
        </div>
    );
};