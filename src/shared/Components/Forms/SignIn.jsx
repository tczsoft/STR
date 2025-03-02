import { Link } from "react-router-dom";
import { InputOtp } from 'primereact/inputotp';

const SignIn = (props) => {

    const { handlechange, handlelogin,handleOTP, OTP, setOTP, Status } = props;

    return (
        <section className="relative flex items-center justify-center overflow-hidden h-dvh cart-bg">
            <div className="absolute top-20 -right-14"> <img src="/images/Rectangle 348.svg" alt="" className="h-[100px]" /></div>

            <div className="absolute -bottom-5 -left-[13%] hidden xl:block">  <img src="/images/Group 37.png" alt="" /></div>
            <div className="max-w-[30rem] w-full px-4 md:px-6  mx-auto">
                <div className="grid grid-cols-1 px-2 mb-10 2xl:mb-0 ">
                    <div className="relative">
                        <div className="relative z-10 p-10 overflow-hidden bg-white shadow-md rounded-xl">
                            <div className="mb-10">
                                <img src="./assets/Images/Logo/new_logo.png" className="w-full" alt="" srcset="" />
                                {/* <h1 className="text-2xl font-semibold text-center mt-4">Sign In</h1> */}
                            </div>
                            {Status === 'Login' && (
                            <form className="space-y-5" onSubmit={handlelogin}>
                                <div>
                                    <input type="email" onChange={handlechange} name="Email" id="Email" className="w-full px-4 py-3 border outline-none rounded-xl placeholder-slate-500" placeholder="Email Address" required/>
                                </div>
                                <div>
                                    <input type="password" onChange={handlechange} name="Password" id="Password" className="w-full px-4 py-3 border outline-none rounded-xl placeholder-slate-500" placeholder="Password" required/>
                                </div> 
                                <div>
                                    <button type="submit" className="py-3 px-4 border rounded-xl w-full bg-[#225a2b] text-white">
                                        Login
                                    </button>
                                </div>
                            </form>
                            )}
                            {Status === 'OTP Send' && (
                                <form className="space-y-5" onSubmit={handleOTP}>
                                    <h1 className="text-center text-2xl">OTP Verfication</h1>
                                    <div className="flex justify-center">
                                        <InputOtp value={OTP} onChange={(e) => setOTP(e.value)} required />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-4 border rounded-xl w-full bg-[#225a2b] text-white">
                                            Verify
                                        </button>
                                    </div>
                                </form>
                            )}
                            {/* <div className="flex justify-center gap-2 mt-5 text-md">
                                New to Website?
                                <Link to={"/register"}>
                                    <span className="font-semibold text-primary"> Register</span>
                                </Link>
                            </div>
                            <div className="flex justify-center gap-2 mt-5 text-md">
                            <Link to={"/forgotpassword"}>
                                    <span className="font-semibold text-primary"> Forgot Password?</span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="absolute top-20 -left-14"> <img src="/images/Rectangle 348.svg" alt="" className="h-[100px]" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;