import {Container, Filters, Title, TopBar, ProductsGroupList} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                categoryId={1}
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                                        price: 500,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                                        price: 500,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                                        price: 500,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                                        price: 500,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                                        price: 500,
                                        items: [{price: 550}]
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
