





import React from "react";
import './Main.css'

function ContactMe(){
    return(
        <>
        <section id="contact">
            <div>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Email"/>
                <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </div>
            <div>
                <button>Linkdin</button>
                <button>Telegran</button>
                <button>Facebook</button>
                <button>Whatsapp</button>
                <button>Instagram</button>
                <button>Tiktok</button>
            </div>
        </section>
        </>
    )
}
export default ContactMe