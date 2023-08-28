import Navbar from "@/components/Navbar"

export default function index () {
    return(
        <>
            <Navbar/>
            <div className="contact">
                <ul>
                    <li>
                        <h3>Email</h3>
                        <p>yustinayasin@gmail.com</p>
                    </li>
                    <li>
                        <h3>Twitter</h3>
                        <p>@ystnysn</p>
                    </li>
                    <li>
                        <h3>Instagram</h3>
                        <p>@yustinstudies</p>
                    </li>
                    <li>
                        <h3>Github</h3>
                        <p>@yustinayasin</p>
                    </li>
                </ul>
            </div>
        </>
    )
}