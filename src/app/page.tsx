import homepageStyle from "@/app/styles/homepage.module.scss"
import Image from "next/image"

const data = [
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
    {
        name: "The Sóng Vũng Tàu - Mai Hà Homestay",
        price: "487805",
        location: "Vũng Tàu",
        image_url: "https://cf.bstatic.com/xdata/images/hotel/square600/592601048.jpg?k=108dfb84a9f04415969417bb003bdc22efbd954c514d38930d445ce86565c874&o=",
    },
]

function Hotel({
    name, location, price, image_url
}: {
    name: string,
    location: string,
    price: string,
    image_url: string
}) {
    return <div className={homepageStyle.hotel}>
        <div className={homepageStyle.hotel_img}>
            <Image src={image_url} alt="Hotel image" fill />
        </div>
        <div className={homepageStyle.hotel_info}>
            <div className={homepageStyle.hotel_info_name}>
                <p>{name}</p>
            </div>
            <div className={homepageStyle.hotel_info_location}>
                <p>{location}</p>
            </div>
            <div className={homepageStyle.hotel_info_price}>
                <p>{price} VND</p>
            </div>
        </div>
    </div>
}

export default function HomePage() {
    return <div className={homepageStyle.homepage}>
        <div className="inline-block">
            <section className={homepageStyle.search}>
                <div className={homepageStyle.search_location}>
                    Bạn muốn đến đâu?
                </div>
                <div className={homepageStyle.search_day}>
                    Day
                </div>
                <div className={homepageStyle.search_submit_btn}>
                    Tìm
                </div>
            </section>
        </div>
        <section>
            <header>List hotel</header>
            <div className={homepageStyle.list_hotel}>
                {
                    data.map((hotel, index) => (
                        <Hotel
                            key={index}
                            name={hotel.name}
                            location={hotel.location}
                            price={hotel.price}
                            image_url={hotel.image_url}
                        />
                    ))
                }
            </div>

        </section>
    </div>
}