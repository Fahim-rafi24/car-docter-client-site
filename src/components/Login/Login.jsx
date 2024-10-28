import { Link } from "react-router-dom"
import HomeImg from '../../../public/assets_Img/logo.svg'
import LoginImg from '../../../public/assets_Img/images/login/login.svg'
import { FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton } from "react-social-login-buttons";

const Login = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img src={HomeImg} className="mr-5" />
                    Car Doctor
                </div>
                <section className="flex w-4/6 mt-10 justify-around">
                    <div className="w-full">
                        <img src={LoginImg} alt="" />
                    </div>
                    <div className="w-5/6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 border-2">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Log in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete='username'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete='current-password'
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <Link
                                        to="#"
                                        className="text-sm font-medium text-primary-600 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="btn w-full hover:border-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-black border"
                                >
                                    Log in
                                </button>
                            </form>
                            <div className="text-center text-sm">
                                Or Log in with
                                <div className="mt-3 w-4/6 mx-auto grid gap-2">
                                    <FacebookLoginButton></FacebookLoginButton>
                                    <GoogleLoginButton></GoogleLoginButton>
                                    <LinkedInLoginButton></LinkedInLoginButton>
                                </div>
                                <p className="text-sm font-light text-gray-500 mt-5">
                                    Don’t have an account yet?{" "}
                                    <Link
                                        to="/register"
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        <span className="text-purple-500">Sign up</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Login