





import React from "react";
import './Main.css'

function ContactMe(){
    return(
        <>
        <section id="contact" >
            <h2>contact Info</h2>
            <div className="grid">
              <div>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
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
            </div>
        </section>
        </>
    )
}
export default ContactMe