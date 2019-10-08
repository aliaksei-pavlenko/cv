import React from 'react';
import ReactDOM from 'react-dom';
import imgLinkCsharpHoldem from './img/C_sharp_application.png';
import imgLinkCsharpPickem8 from './img/C_sharp_application_2.png';


let App = () => {
    let style = {marginTop: '30px', display: 'flex',border: '1px solid black'};
    let styleStackTech = {fontWeight: '900', color: '#c83349'};
    return (
        <div className={'App-Component'} style={{maxWidth: '900px',margin: '0 auto',fontSize: '20px',}}>
            <div style={{display: 'flex',justifyContent:'space-between'}}>
                <div>
                    <div>05.2019 - now : JavaScript, React js, Redux, Node js</div>
                    <div>09.2018 - 05.2019 : HTML, CSS, JavaScript</div>
                    <div>2017 - 09.2018 : it самообразование</div>
                    <div>2016 - 2017 : разработка на С#, онлайн покер</div>
                    <div>2015 - 2016 : онлайн покер</div>
                    <div>2014 - 2015 : служба (Внутренние Войска)</div>
                    <div>2008 - 2014 : Академия управления при Президенте РБ</div>
                </div>
                <div style={{flex: '0 0 180px'}}>
                    <div>моб. +375291301190</div>
                    <div style={{display: 'flex',justifyContent:'space-between'}}>
                        <a href={'tel:+375291301190'}><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 512 512"><path fill="black" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></a>
                        <a href={'https://t.me/aliaksei_pavlenko'}><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 448 512"><path fill="black" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></a>
                        <a href={'mailto:vvshnik14@yandex.ru'}><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 512 512"><path fill="black" d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"></path></svg></a>
                        <a href={'https://jobs.tut.by/resume/f9015077ff034732c40039ed1f4e6e7149486c'}><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 -15 150 170"><path fill="#000000" d="M 57.552564,149.17033 C 30.377114,144.23601 11.392314,129.74814 3.7809037,108.13559 0.94704373,100.08886 0.55352373,91.924522 0.84067373,47.135593 L 1.1355937,1.1355932 27.885594,0.86926015 l 26.75,-0.266334 0,21.01633385 0,21.016333 -6.75,0.0819 c -3.7125,0.04505 -9.225,0.03615 -12.25,-0.01977 -3.025,-0.05592 -6.06177,0.270832 -6.74837,0.726109 -0.89169,0.591269 5.35445,9.668321 21.86155,31.769767 12.71046,17.018095 23.31952,31.469701 23.57569,32.114671 1.52675,3.84398 3.87303,1.51663 19.10746,-18.953278 29.028706,-39.004738 31.703666,-42.714685 31.703666,-43.970313 0,-0.92583 -3.18226,-1.274055 -12.29648,-1.345568 -6.76307,-0.05306 -12.73535,-0.535345 -13.271736,-1.071734 -0.58723,-0.587235 -0.86714,-8.90401 -0.70352,-20.903519 l 0.27174,-19.9282648 26.749996,-0.26633305 26.75,-0.266334 -0.0119,49.26633385 c -0.013,54.03666 -0.0541,54.48148 -6.06698,65.7629 -9.21419,17.28759 -26.93389,28.97784 -50.864806,33.55714 -8.92227,1.70732 -28.68604,1.69749 -38.13937,-0.019 z"/></svg></a>
                        <a href="https://www.linkedin.com/in/aliaksei-pavlenko-3335a7183/"><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 448 512"><path fill="black" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                    </div>
                </div>
            </div>
            <div style={style}>
                <div>Test Task</div>
                <div style={{marginLeft: '10px'}}>
                    <div><span><b>JS</b></span> <a href={'https://codepen.io/aliaksei_pavlenko/pen/LYPabvg'}>https://codepen.io/aliaksei_pavlenko/pen/LYPabvg</a></div>
                    <div style={{display: 'flex'}}>
                        <span><b>Layout</b>:</span> 
                        <div>
                            MobileFirst, Responsive, Pixel Perfect
                        </div>
                    </div>
                    <a href={'https://aliaksei-pavlenko.github.io/task-layout/'}><svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 576 512"><path fill="black" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> https://aliaksei-pavlenko.github.io/task-layout/</a>
                </div>
            </div>

            <div style={style}>
                <div>Test Task</div>
                <div style={{marginLeft: '10px'}}>
                    <div><b>6 tasks</b>: JS,JS,JS,JS,JS,React</div>
                    <div><a href={'https://github.com/aliaksei-pavlenko/test_task_onTravelSolution'}>https://github.com/aliaksei-pavlenko/test_task_onTravelSolution</a></div>
                </div>
            </div>

            <div style={style}>
                <div>Test Task</div>
                <div style={{marginLeft: '10px'}}>
                    <div>
                        {/* <span>Todo List SPA:</span> */}
                        <div style={{display: 'inline-flex',flexDirection: 'column', marginLeft: '5px'}}>
                            <div><b>Todo List SPA:</b></div>
                            <div>К записям можно добавлять ключевые слова с символом #</div>
                            <div>Осуществлять поиск по записям, с помощью, ключевых слов</div>
                            <div>Ввод реализован наподобие WYSIWIG редактора, с подсветкой ключевых слов</div>
                            <div style={styleStackTech}>React</div>
                            <div><a href={'https://aliaksei-pavlenko.github.io/note_app/'}><svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 576 512"><path fill="black" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> https://aliaksei-pavlenko.github.io/note_app/</a></div>
                            <div><a href={'https://github.com/aliaksei-pavlenko/note_app'}>https://github.com/aliaksei-pavlenko/note_app</a></div>
                        </div>
                    </div>
                    <div>
                        {/* <span>Todo List server:</span> */}
                        <div style={{display: 'inline-flex',flexDirection: 'column', marginLeft: '5px'}}>
                            <div><b>Todo List server:</b></div>
                            <div>REST API</div>
                            <div style={styleStackTech}>Node js, Express js</div>
                            <div><a href={'https://github.com/aliaksei-pavlenko/note_app_server'}>https://github.com/aliaksei-pavlenko/note_app_server</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={style}>
                <div><b>React-template</b></div>
                <div style={{display: 'inline-flex',flexDirection: 'column', marginLeft: '5px'}}>
                    <div>Сборка для разработки на React</div>
                    <div>Меньше функционала чем в create-react-app</div>
                    <div>В 2 раза меньше размер build проекта, чем в create-react-app</div>
                    <div style={styleStackTech}>React, Webpack, Babel</div>
                    <div><a href={'https://github.com/aliaksei-pavlenko/react-template'}>https://github.com/aliaksei-pavlenko/react-template</a></div>
                </div>
            </div>

            <div style={style}>
                <div>
                    <b>Pickem8 calculator</b>
                    <div style={{margin:'2px 0 0 2px'}}><a href={`${imgLinkCsharpPickem8}`}><svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 384 512"><path fill="black" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path></svg></a></div>
                </div>
                <div style={{display: 'inline-flex',flexDirection: 'column', marginLeft: '5px'}}>
                    <div>Согласно правилам игры рассчитывается EV (expected value)</div>
                    <div  style={styleStackTech}>C#</div>
                </div>
            </div>
            <div style={style}>
                <div>
                    <b>Holdem poker calculator</b>
                    <div style={{margin:'2px 0 0 2px'}}><a href={`${imgLinkCsharpHoldem}`}><svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 384 512"><path fill="black" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path></svg></a></div>
                </div>
                
                <div style={{display: 'inline-flex',flexDirection: 'column', marginLeft: '5px'}}>
                    <div>Выбираются карты на столе</div>
                    <div>Предполагаемый диапазон противника</div>
                    <div>Рассчитывается вероятность комбинации карт противника</div>
                    <div style={styleStackTech}>C#</div>
                </div>
            </div>

           
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'))