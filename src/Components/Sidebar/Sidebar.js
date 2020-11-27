import React, {useState} from 'react';
import bannerImage from '../../assets/images/banner.jpg'
import './Sidebar.scss';

const Sidebar = ({addPost}) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleChangeName = e => {
        let value = e.target.value;
        setName(value)
    }
    const handleChangeLastName = e => {
        let value = e.target.value;
        setLastName(value)
    }

    const handleSendData = () => {
        let tesObj = {}
        tesObj.first_name = name;
        tesObj.last_name = lastName;
        addPost(tesObj)
    }
    return (
        <div className="sidebar-wrapper">
            <div className="widget widget-about">
                <h2 className="title">ABOUT AUTHOR</h2>
                <div className="widget-content">
                    <div class="authorimage">
                        <div></div>
                    </div>
                </div>
                <div className="subtitle">Loredana</div>
                <br />
                <div className="author-text">This season, the American designer will showcase a series of historic objects from the New York museum's.</div>
            </div>
            <div className="widget widget-connected">
                <h2 className="title">STAY CONNECTED</h2>
                <div className="widget-content">
                    <ul className="social-icon">
                        <li className="facebook" />
                        <li className="twitter" />
                        <li className="instagram" />
                        <li className="google-plus" />
                        <li className="snapchat" />
                        <li className="dribbble" />
                        <li className="rss" />
                        <li className="behance" />
                        <li className="vimeo" />
                    </ul>
                </div>
            </div>
            <div className="widget widget-popular-post">
                <h2 className="title">POPULAR POSTS</h2>
                <div className="widget-content">
                    <ul>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">
                                Chair trick performed by this bearded man
                            </div>
                        </li>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">              
                                Attractive Beautiful Girl Flowers
                            </div>
                        </li>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">
                                Posing near the wardrobe
                            </div>
                        </li>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">
                                Adventure Beautiful Nature
                            </div>
                        </li>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">
                                Coffee Girl in Canteen 
                            </div>
                        </li>
                        <li>
                            <div className="item-thumbnail">

                            </div>
                            <div className="item-title">
                                Annie Sprat Unsplash Bedsheet
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-category">
                <h2 className="title">CATEGORY</h2>
                <div className="widget-content">
                    <span>Activities</span>
                    <span>Beauty</span>
                    <span>Break</span>
                    <span>Cool</span>
                    <span>Extras</span>
                    <span>Fashion</span>
                    <span>Lifestyle</span>
                    <span>Music</span>
                    <span>Sport</span>
                    <span>Travel</span>
                </div>
            </div>
            <div className="widget widget-sidebar-ads">
                <h2 className="title">SIDEBAR ADS</h2>
                <div className="widget-content">
                    <img src={bannerImage} />
                </div>
            </div>
            <div className="widget widget-contact-form">
                <h2 className="title">CONTACT FORM</h2>
                <div className="form">
                    <form>
                        <p></p>
                        Name
                        <br />
                        <input className="contact-form-name"  name="name" size="30" type="text" value={name} onChange={handleChangeName}/>
                        <p></p>
                        Email
                        <span>*</span>
                        <br />
                        <input className="contact-form-email" name="email" size="30" type="text" value={lastName} onChange={handleChangeLastName}/>
                        <p></p>
                        Message
                        <span>*</span>
                        <br />
                        <textarea className="contact-form-email-message" cols="25" name="email-message" rows="5" />
                        <p></p>
                        <input className="contact-form-button contact-form-button-submit" id="ContactForm1_contact-form-submit" type="button" value="Send" onClick={handleSendData} />
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
