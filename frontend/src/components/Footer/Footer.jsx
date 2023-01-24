import styles from "../../styles/footer.css";
import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Image } from "@chakra-ui/react";
import Blooming_Cart from "../../assets/images/Blooming Cart.png"

function Footer() {
    return (
        <Box className="footer_container">
            <hr className="footerHr" />
            <Box className="footer">
                <Box className="footer_flex">
                    <Box >
                        <Image borderRadius="50%" className={styles.logoGif} src={Blooming_Cart} alt="Logo" />
                    </Box>
                    
                    <Box>
                        <ul className="footerLinks" >
                            <h3>Company</h3>
                            <li><Link to="#"> About</Link></li>
                            <li><Link to="#"> Jobs</Link></li>
                            <li><Link to="#"> List your property</Link></li>
                            <li><Link to="#"> Partnerships</Link></li>
                            <li><Link to="#"> Newsroom</Link></li>
                            <li><Link to="#"> Investor Relations</Link></li>
                            <li><Link to="#"> Roaming Gnome Store</Link></li>
                            <li><Link to="#"> Advertising</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <ul className="footerLinks">
                            <h3>Explore</h3>
                            <li><Link to="#">Hotels in United States</Link></li>
                            <li><Link to="#">Vacation Rentals in United States</Link></li>
                            <li><Link to="#">Vacation Packages in United States</Link></li>
                            <li><Link to="#">Domestic Flights</Link></li>
                            <li><Link to="#">Car Rentals in United States</Link></li>
                            <li><Link to="#">Travelocity Reviews</Link></li>
                            <li><Link to="#">Travelocity Coupons</Link></li>
                            <li><Link to="#">Unique Places to Stay</Link></li>
                            <li><Link to="#">Travel Blog</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <ul className="footerLinks">
                            <h3>Policies</h3>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Do not sell my personal information</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <ul className="footerLinks">
                            <h3>Help</h3>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Cancel your hotel or vacation rental booking</Link></li>
                            <li><Link to="#">Cancel your flight</Link></li>
                            <li><Link to="#">Refund timelines, policies & processes</Link></li>
                            <li><Link to="#">Use a Travelocity coupon</Link></li>
                            <li><Link to="#">Coronavirus Disease (COVID-19)</Link></li>
                        </ul>
                    </Box>
                </Box>
                <hr className="footerHr" />
                <Box className="license">
                    <p>© 2023 1-800-Flowers.com, Inc., Jericho, NY Family of Brands</p>
                    <p> Design are trademarks or registered trademarks of Blooming Cart LLC. CST# 2056372-50.</p>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;