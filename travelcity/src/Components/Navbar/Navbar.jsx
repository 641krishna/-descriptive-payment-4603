import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { logOut } from "../../Store/Action";


import Header from "./Header";

export function Navbar() {
    const userName = useSelector((state) => state.Auth.userName);
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(logOut());
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                         <Link to="/"><img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt="" /></Link>
                    </div>
                </nav>
            </div>
        </>
    );
}