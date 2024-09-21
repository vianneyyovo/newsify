import Image from "next/image"
import phone from '../app/fonts/phone.png'
import dashboard from '../app/fonts/dashboard.png'
import icon from '../app/fonts/icon.png'
import st from '../app/fonts/st.png'
import g from '../app/fonts/g.png'
import s from '../app/fonts/s.png'
import visa from '../app/fonts/visa.png'
import sp from '../app/fonts/sp.png'
import i from '../app/fonts/i.png'
import z from '../app/fonts/z.png'



function HomePage() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 home-page container mx-auto px-4 " >
                <div className="description">
                    <span className="greating">
                    Hey,Everyone<Image
                        name="image"
                        src={icon}
                        alt="hand"
                    />
                    </span>
                    <p className="text">
                        Newsify is the email
                        newsletter that works
                        completely automated
                    </p> <br/>
                    <p className="accroche">Track connections in real time. See who your
                    community being lead by and find the most active</p> <br/>
                    <span className="forms">
                        <input type="text" id="search-navbar" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input" placeholder="Your email adress"/>&nbsp;&nbsp; 
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </span>
                </div>
                <div className="home-image grid justify-items-end home-phone">
                    <Image
                        name="image"
                        src={phone}
                        alt="phone"
                    />
                </div>
            </div>

            <div className="logos grid grid-cols-7 gap-4">
                <div><Image
                        name="image"
                        src={st}
                        alt="phone"
                    /></div>
                <div><Image
                        name="image"
                        src={g}
                        alt="phone"
                    /></div>
                <div><Image
                className="logo-style"
                        name="image"
                        src={s}
                        alt="phone"
                    /></div>
                <div><Image
                className="logo-style"
                        name="image"
                        src={visa}
                        alt="phone"
                    /></div>
                <div><Image
                        name="image"
                        src={sp}
                        alt="phone"
                    /></div>
                <div><Image
                        name="image"
                        src={i}
                        alt="phone"
                    /></div>
                <div><Image
                        name="image"
                        src={z}
                        alt="phone"
                    /></div>
            </div>

            <div className="grid grid-cols-1 container mx-auto second-section" >
                <div className="dashboard container">
                    <h2 className="title">Let Your Newsletter Do the talk</h2>
                    <p className="paragraph">Let`s clam it , today we don`t the time to talk or time to scroll over groups or other
                        plateforms . So it is better for <br/>your automated newsletter to do the tlk. What cloud be
                        done better? Stay connected to your community.</p>
                </div>
                <div className="graph">
                    <Image
                        className="h-auto mx-auto "
                        name="image"
                        src={dashboard}
                        alt="phone"
                        width={919}
                    />
                </div>
            </div>

        </div>
    )
}

export default HomePage