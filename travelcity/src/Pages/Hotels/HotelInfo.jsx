import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const HotelInfo = ({data}) => {
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://6300c49f290d71b581e28acd.mockapi.io/products/")
      .then(({ data }) => {
        console.log(data);
        setInfo(data);
      });
  }, []);

  return (
    <div style={{ marginBottom: "50%" }}>
      <h1 className="para">Top Reads</h1>
      <div className="Main">
        {Info.map((pro) => (
          <Link
            style={{ textDecoration: "none" }}
            key={pro.id}
            to={`/hotel/${pro.id}`}
          >

            <div className="hotel-detail">
              <div className="hotel-name-add">
                <h3 className="hotel-name">
                  {data.name}
                  <div className="hotel-city">{data.address.city}</div>
                </h3>
              </div>

              <div className="desc-rating">
                <div className="description">Fully refundable</div>
                <div className="description">Reserve Now Pay Later</div>
                <div className="rating">
                  <span className="star">{data.starRating}/5.0</span>Excellent
                  (356 reviews)
                </div>
              </div>
            </div>
            <div className="price-detail">
              <div className="ofr">We have 5 left at 25% off</div>
              <div className="price">${data.price} </div>
              <div>Per night</div>
              <div className="total-price">${data.price + 20} Total </div>
              <div>Includes taxes and fees</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
