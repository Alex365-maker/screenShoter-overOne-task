import React from "react";
import './style.css'

const PartNine = () => {
    return (
        <>
            <section className="partNine">
                <div className={'partNine_container'}>
                    <div className={'partNine_h2'}>
                        <h2><span className={'main_partNine_h2'}>Screenshoter</span> - это функции на каждый день </h2>
                    </div>
                    <div className={'partNine_blocks_partOne'}>
                        <div className={'first_partNine_partOne'}>
                            <div className={'first_partNine_partOne_img'}></div>
                            <div className={'numberAndHeading_one'}>
                                <h3 className={'numberInFirstBlock'}>01.</h3>
                                <h3 className={'HeadingInFirstBlock'}> Обмен идеями </h3>
                            </div>
                            <p className={'firstTextInFirstBlock'}>
                                Когда нужно что-то наглядно показать<br/> коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий.
                            </p>
                            <p className={'secondTextInFirstBlock'}>
                                А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе
                                с вашими голосовыми комментариями
                            </p>
                        </div>
                        <div className={'second_partNine_partOne'}>
                            <div className={'second_partNine_partOne_img'}></div>
                            <div className={'numberAndHeading_two'}>
                                <h3 className={'numberInSecondBlock'}>02.</h3>
                                <h3 className={'HeadingInSecondBlock'}> Создание инструкций </h3>
                            </div>
                            <p className={'firstTextInSecondBlock'}>
                                Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии
                                и визуальные отметки в необходимом месте скриншота.
                            </p>
                            <p className={'secondTextInSecondBlock'}>

                                Поделиться снимком или видеозаписью можно с помощью ссылки, которая мгновенно появляется в буфере обмена
                            </p>
                        </div>
                        <div className={'third_partNine_partOne'}>
                            <div className={'third_partNine_partOne_img'}></div>
                            <div className={'numberAndHeading_third'}>
                                <h3 className={'numberInThirdBlock'}>03.</h3>
                                <h3 className={'HeadingInThirdBlock'}> Обратная связь </h3>
                            </div>
                            <p className={'firstTextInThirdBlock'}>
                                Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать.
                            </p>
                            <p className={'secondTextInThirdBlock'}>

                                Отправьте скриншот в техподдержку, где будет видно, в чем именно заключается проблема
                            </p>
                        </div>
                    </div>
                    <div className={'partNine_partTwo_h2'}>
                        <h2>Как использовать <span className={'two_partNine_h2'}>Screenshoter</span> </h2>
                    </div>
                    <div className={'partNine_blocks_partTwo'}>
                        <div className={'block_stepOne'}>
                            <h3> Шаг 1.</h3>
                            <div className={'frame'}>
                                <div className={'photo'}></div>
                            </div>
                            <p className={'add'}>
                                <span>Скачайте программу </span><br/>
                                на свой ПК или ноутбук
                            </p>
                        </div>
                        <div className={'block_stepTwo'}>
                            <h3> Шаг 2.</h3>
                            <div className={'frame'}>

                            </div>
                            <p className={'play'}>
                                <span>Запустите Screenshoter:<br/> </span>
                                программа будет работать в фоновом режиме
                            </p>
                        </div>
                        <div className={'block_stepThird'}>
                            <h3> Шаг 3.</h3>
                            <div className={'frame'}>

                            </div>
                            <p className={'enjoy'}>
                                <span>Наслаждайтесь удобством </span>
                                и быстродействием
                            </p>
                        </div>
                    </div>
                    <div className={'buttonInPartNine'}>
                        <button>
                            Скачать бесплатно
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartNine