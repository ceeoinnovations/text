import GetImageURL, {TemplateIdFrom} from './Images.js';

export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="title">${about[0].name}</h1>
            <p>${about[0].description}</p>
            <div class="project-img">
            <img src="${GetImageURL(about[0].image)}" div class="project-img-holder">
            </div>
            
            <div class="buttons">
                <a href="${about[0].buttonlink}" target="_blank">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${about[0].buttonlabel}</button>
                </a>
            </buttons>
        </div>    
    </section>`
}
