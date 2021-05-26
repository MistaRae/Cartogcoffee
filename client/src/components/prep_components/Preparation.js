import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Preparation = () => {

    return(
        <div id = "prep">
            <div id ="prep-content-container">
                <img id = "prep-image" src="https://i.imgur.com/ZeA4YK5.gif" alt="" />
                <div id="prep-content">
                    <h2>SOME HELPFUL HOW TO GUIDES:</h2>
                    <ul>
                        <li>
                            <a href="https://www.ncausa.org/About-Coffee/How-to-Brew-Coffee">NCA - HOW TO BREW COFFEE</a>
                        </li>
                        <li>
                            <a href="https://www.eatingwell.com/article/41595/9-rules-for-how-to-make-a-perfect-cup-of-coffee/"> EATING WELL - 9 RULES FOR A PERFECT COFFEE</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=6yItCQB4V9A">COFFEE BASICS WITH BABISH</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=A_wc9nqTi8Y">BEGINNERS GUIDE TO MAKING COFFEE</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Preparation