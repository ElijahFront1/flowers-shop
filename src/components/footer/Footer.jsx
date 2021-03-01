import React from 'react'

function Footer() {
    return (
        <footer className="footer__wrapper">
            <div className="container">
                <div className="footer__blocks">
                    <div>
                        <h4>О компании</h4>
                        <ul>
                            <li>Доставка</li>
                            <li>Оплата</li>
                            <li>Гарантии</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Помощь</h4>
                        <ul>
                            <li>Отзывы</li>
                            <li>Новости</li>
                            <li>Статьи</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Наши контакты</h4>
                        <ul>
                            <li>+7(963)-012-02-12</li>
                            <li>flowershop@gmail.com</li>
                            <li>442211, Энск</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__blocks-author__link">https://github.com/Span415</div>
            </div>
        </footer >
    )
}

export default Footer
