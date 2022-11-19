import React from "react";
import TitleComponent from "../../components/title-component";
import Handelinput from "./handelinput";

export default class Contact extends React.Component {
    state = {
        button1: false,
        button2: false,
        button3: false,
        button4: false,
    }

    render() {
        return <>
            <TitleComponent
                title={'Contact Page'}
                description={'You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.'}
            />

            <section className='G-container G-flex-wrap '>
                <Handelinput />
                <div className='P-contact-info'>
                    <h2>Our Address</h2>
                    <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                    <a href="tel: 0800900110">080-090-0110</a><br />
                    <a href="mailto: info@company.com"> info@company.com</a>
                </div>
            </section>

            <section className='G-container'>
                <iframe
                    title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.496117553227!2d-43.36083891559567!3d-23.005549447187757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda4df8ae834f%3A0x3711edfa51d8012c!2z2KjYp9ix2Kcg2K_YpyDYqtmK2KzZiNmD2KfYjCDYsdmK2Ygg2K_ZiiDYrNin2YbZitix2YjYjCDYp9mE2KjYsdin2LLZitmE!5e0!3m2!1sar!2s!4v1668803586313!5m2!1sar!2s"
                    width="100%" height="600px" style={{ margin: "40px 0" }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </section>

            <TitleComponent
                title={'FAQs'}
                description={'This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666'}
            />

            <section className="G-container">
                <div>
                    <button
                        type="submit"
                        className="info-button"
                        name='button1'
                        onClick={() => { this.setState({ button1: !this.state.button1 }) }}>1. Fusce eu lorem et dui #09C maximus varius?</button>
                    {this.state.button1 ? <p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
                        : <></>}
                </div>
                <div>
                    <button type="submit" className="info-button" name='button2' onClick={() => { this.setState({ button2: !this.state.button2 }) }}>1. Fusce eu lorem et dui #09C maximus varius?</button>
                    {this.state.button2 ? <p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
                        : <></>}
                </div>
                <div>
                    <button type="submit" className="info-button" name='button3' onClick={() => { this.setState({ button3: !this.state.button3 }) }}>1. Fusce eu lorem et dui #09C maximus varius?</button>
                    {this.state.button3 ? <p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
                        : <></>}
                </div>
                <div>
                    <button type="submit" className="info-button" name='button4' onClick={() => { this.setState({ button4: !this.state.button4 }) }}>1. Fusce eu lorem et dui #09C maximus varius?</button>
                    {this.state.button4 ? <p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
                        : <></>}
                </div>
            </section>
        </>
    }
}