import backArrow from '../../../src/images/Frame 34910.png'
import logo from '../../../src/images/LOgo6_prev_ui 1.png'

const Header = () => {
    return (
        <>
            <div className="header flex justify-between pt-4">
                <div className="back_arrow_div cursor-pointer">
                    <img src={backArrow} alt="back arrow" />
                </div>
                <img src={logo} alt="logo" />
                <h2 className=" text-xl font-bold text-dogboarding-100">Sign Up</h2>
            </div>
        </>
    )
}

export default Header