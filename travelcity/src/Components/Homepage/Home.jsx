import React, { useEffect } from 'react';
import styles from "./Home.module.scss";
import Searching from './Searching';
import { Button } from '@material-ui/core';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <div style={{ marginRight: "10px" }}>
          <div className={styles.formsContainer}>
            <Searching />
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.offerTop}>
          <div className={styles.inside}>
            <img src='https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium'
              alt='trip' />
            <h3>Find your perfect trip</h3>
            <p>Plan a trip for the whole family—from family travel tips to family-friendly filters, our tools make it easy.</p>
          </div>
          <div className={styles.inside}>
            <img src='https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium'
              alt='book' />
            <h3>Book with flexibility</h3>
            <p>Looking for a change of scenery, but want something flexible? With free cancellation on most hotels, you can book with peace of mind.</p>
          </div>
          <div className={styles.inside}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"
              alt="back" />
            <h3>We've got your back</h3>
            <p>Need more help along your journey? We offer 24/7 support on social and through virtual agents onsite.</p>
          </div>
        </div>

        <div className={styles.reso}>
          <div className={styles.info1}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg"
              alt="resorts" />
            <h3>All-inclusive resorts </h3>
            <p>Think of nothing beyond having a <br /> great time with your family</p>
            <Button>View deals</Button>
          </div>
          <div className={styles.info1}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg"
              alt="resorts" />
            <h3>Last minute getaways </h3>
            <p>Celebrate the moment with an<br /> unexpected getaway</p>
            <Button>View deals</Button>
          </div>
        </div>

        <h1 className={styles.next_trip}>Start planning your next trip</h1>

        <div className={styles.starting}>
          <div className={styles.planning}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
              alt="next_trip" />
            <h2>Sunny beach hotel offers</h2>
          </div>
          <div className={styles.planning}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
              alt="next_trip" />
            <h2>Car rental deals</h2>
          </div>
          <div className={styles.planning}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
              alt="next_trip" />
            <h2>Member discount</h2>
          </div>
          <div className={styles.planning}>
            <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
              alt="next_trip" />
            <h2>Vaction rental offers</h2>
          </div>
        </div>

        <h1 className={styles.offer_trip}>Featured offers</h1>

        <div className={styles.offers}>
          <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg"
            alt="offers" />
          <h4>Family vacation deals</h4>
          <p>Seize your next unforgettable family vacation.</p>
        </div>


        <div className={styles.infoVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ItS8X0SjT4s" title="YouTube video player" allowFullScreen></iframe>
        </div>

        <h1 className={styles.bold}>Here to help keep you on the move</h1>

        <div className={styles.row_a_ter_y_section}>
          <div className={styles.col}>
            <div className={styles.after_y_section_div}>
              <div className={styles.after_y_section_div_d}>
                <p>Change or cancel a trip</p>

                <img className={styles.after} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__mode_edit.svg"
                  alt="few" />
              </div>
              <p>Make updates to your itinerary or cancel a booking</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.after_y_section_div}>
              <div className={styles.after_y_section_div_d}>
                <p>Use a crdit or coupon</p>
                <img className={styles.after} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__monetization_on.svg" alt="few" />
              </div>
              <p>Apply a coupon code or credit to a new trip</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.after_y_section_div}>
              <div className={styles.after_y_section_div_d}>
                <p>Track your refund</p>
                <img className={styles.after} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__chat.svg"
                  alt="few" />
              </div>
              <p>Check the status of a refund currently in progress</p>
            </div>
          </div>
        </div>



        <div className={styles.row_last_second_div}>
          <div className={styles.last_second_div_1}>
            <img src="https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg"
              alt="dfge" />
          </div>
          <div className={styles.col_md_8_col_lg_6_last_second_div_2_cl8}>
            <div className={styles.barc}>
              <h3 className={styles.inside_last_second}>Wander Wisely with the Travelocity app</h3>
              <ul className={styles.ul_l_div}>
                <li>Get helpful alerts about flight status and gate numbers</li>
                <li>Access all your travel details, even when offline</li>
                <li>Easily contact your hotel by messaging them right in the app</li>
              </ul>
            </div>
            <h3>Text yourself a download link</h3>
            <div className={styles.cscodemaindiv}>
              <div className={styles.country_select_ref}>
                <select className={styles.cscode}>
                  <option value="">Country code</option>
                  <option value="+54,Argentina">Argentina +54</option>
                  <option value="+61,Australia">Australia +61</option>
                  <option value="+43,Austria">Austria +43</option>
                  <option value="+32,Belgium">Belgium +32</option>
                  <option value="+55,Brazil">Brazil +55</option>
                  <option value="+1,Canada">Canada +1</option>
                  <option value="+45,Denmark">Denmark +45</option>
                  <option value="+358,Finland">Finland +358</option>
                  <option value="+33,France">France +33</option>
                  <option value="+49,Germany">Germany +49</option>
                  <option value="+852,HongKong">Hong Kong SAR +852</option>
                  <option value="+91,India">India +91</option>
                  <option value="+353,Ireland">Ireland +353</option>
                  <option value="+39,Italy">Italy +39</option>
                  <option value="+81,Japan">Japan +81</option>
                  <option value="+52,Mexico">Mexico +52</option>
                  <option value="+31,Netherlands">Netherlands +31</option>
                  <option value="+64,New_Zealand">New Zealand +64</option>
                  <option value="+47,Norway">Norway +47</option>
                  <option value="+63,Philippines">Philippines +63</option>
                  <option value="+65,Singapore">Singapore +65</option>
                  <option value="+82,South_Korea">South Korea +82</option>
                  <option value="+34,Spain">Spain +34</option>
                  <option value="+46,Sweden">Sweden +46</option>
                  <option value="+41,Switzerland">Switzerland +41</option>
                  <option value="+886,Taiwan">Taiwan +886</option>
                  <option value="+66,Thailand">Thailand +66</option>
                  <option value="+44,United_Kingdom">United Kingdom +44</option>
                  <option value="+1,USA">USA +1</option>
                  <option value="+84,Vietnam">Vietnam +84</option>
                </select>
              </div>
              <div className={styles.ref}>
                <input type="text" placeholder='Phone number' />
                {/* <input type="text" name="" id="" placeholder="Phone number"> */}
              </div>
              <div className={styles.appbtn}>
                <button>Get the app</button>
              </div>
            </div>
            <div className={styles.last_second_div_2_last_p}>
              <p className={styles.grey_color}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
            </div>
          </div>
          <div className={styles.col_md_12_col_lg_2_last_second_div_3}>
            <img src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_travelocity.png"
              alt="barcode" />
            <h4>Scan the QR code</h4>
          </div>
        </div>
        <div className={styles.BarcodeSection}>
          
        </div> 

      </div>
    </div>
  );
}
